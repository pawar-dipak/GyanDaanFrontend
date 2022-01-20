import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RequestService } from 'src/app/services/request.service';

@Component({
  selector: 'app-personal-requests',
  templateUrl: './personal-requests.component.html',
  styleUrls: ['./personal-requests.component.css']
})
export class PersonalRequestsComponent implements OnInit {

  public allreq = [];
  public accptedRequestid='';
  public topic= '';
 
  constructor(private request:RequestService,private snack:MatSnackBar) { }

  ngOnInit(): void {
    this.request.getPersonalRequests().subscribe(
      (data:any)=>{
        this.allreq=data;
        let i = 0;
        let len = this.allreq.length;
        for (; i < len; i++){
          delete this.allreq[i]['rTeacherUsername'];
        }
      },
      (error)=>{
        console.log("Some Problem in fetching all req");//debug
      }
  
        );
  }
  public onClick() {
    //alert(this.search.rTopic);//debug

    this.request.getFilteredPersonalRequest(this.topic).subscribe(
      (data:any)=>{
        if(data.length>0){
        this.allreq = data.reverse();
        let i = 0;
        let len = this.allreq.length;
        for (; i < len; i++){
          delete this.allreq[i]['rTeacherUsername'];
        }

      // console.log(data);
    }
        else{
          alert("No Request with searched topic");
          this.topic='';
        }
        
      },
      (error)=>{
        console.log("problem in fetching filtered request");
      }
   );
  }

  public accept(str:any){
    // alert(str);//debug
     this.accptedRequestid=str;
     this.request.addPerReqtoAcceptedRequest(this.accptedRequestid).subscribe(
       (data:any)=>{
         this.snack.open("Request Accepted","ok",{
           duration:3000,  
         });

         this.request.getPersonalRequests().subscribe(
          (data:any)=>{
            this.allreq=data;
            let i = 0;
            let len = this.allreq.length;
            for (; i < len; i++){
              delete this.allreq[i]['rTeacherUsername'];
            }
          },
          (error)=>{
            console.log("Some Problem in fetching all req");//debug
          }
      
            );

       },
       (error)=>{
         console.log("error occured during Accepting Request");
       }
 
     );
   }

}
