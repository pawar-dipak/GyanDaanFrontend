import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RequestService } from 'src/app/services/request.service';

@Component({
  selector: 'app-accepted-request',
  templateUrl: './accepted-request.component.html',
  styleUrls: ['./accepted-request.component.css']
})
export class AcceptedRequestComponent implements OnInit {

  public allreq = [];
  
  public topic= '';
 
  constructor(private request:RequestService,private snack:MatSnackBar) { }

  ngOnInit(): void {
    this.request.getAcceptedRequestUser().subscribe(
      (data:any)=>{
        this.allreq=data;
        let i = 0;
        let len = this.allreq.length;
        for (; i < len; i++){
          delete this.allreq[i]['rUsername'];
        }
      },
      (error)=>{
        this.snack.open("Server Error","ok",{
          duration:3000
        });
      }
  
        );
  }
  public onClick() {
    //alert(this.search.rTopic);//debug

    this.request.getAcceptedRequestUser().subscribe(
      (data:any)=>{
        this.allreq = data.reverse();
        let i = 0;
        let len = this.allreq.length;
        for (; i < len; i++){
          delete this.allreq[i]['rUsername'];
        }
        
      },
      (error)=>{
        console.log("problem in fetching Accepted request User");
      }
   );
  }

}
