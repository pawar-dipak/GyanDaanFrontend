import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

import { LoginService } from 'src/app/services/login.service';
import { RequestService } from 'src/app/services/request.service';

@Component({
  selector: 'app-all-requests',
  templateUrl: './all-requests.component.html',
  styleUrls: ['./all-requests.component.css']
})
export class AllRequestsComponent implements OnInit {

  public allreq = [];
  public topic ='';
  public role='';

  public accptedRequestid='';
   
  constructor(private request:RequestService,private login:LoginService,private snack:MatSnackBar) { }

  ngOnInit(): void {
    this.role = this.login.getUserRole();
    //console.log("entering"); //debug
    this.request.getAllRequests().subscribe(
    (data:any)=>{
      this.allreq=data.reverse();
     

    },
    (error)=>{
      console.log("Some Problem in fetching all req");//debug
    }

      );

    
  }
   public onClick() {
    //alert(this.search.rTopic);//debug

    this.request.getFilteredAllRequest(this.topic).subscribe(
      (data:any)=>{
        if(data.length>0){
        this.allreq = data.reverse();

      console.log(data);}
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
    this.request.addAcceptedRequest(this.accptedRequestid).subscribe(
      (data:any)=>{
        this.snack.open("Request Accepted","ok",{
          duration:3000,  
        });

        this.request.getAllRequests().subscribe(
          (data:any)=>{
            this.allreq=data.reverse();
           
      
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
