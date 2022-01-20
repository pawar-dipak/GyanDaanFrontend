import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import baseUrl from 'src/app/services/helper';
import { RequestService } from 'src/app/services/request.service';

@Component({
  selector: 'app-accepted-meetings',
  templateUrl: './accepted-meetings.component.html',
  styleUrls: ['./accepted-meetings.component.css']
})
export class AcceptedMeetingsComponent implements OnInit {
  
  public allreq = [];
  
  public topic= '';
  
  constructor(
    private request:RequestService,
    private router:Router
    ) { }

  ngOnInit(): void {
    this.request.getAcceptedRequest().subscribe(
      (data:any)=>{
        this.allreq=data;
        let i = 0;
        let len = this.allreq.length;
        for (; i < len; i++){
          delete this.allreq[i]['rTeacherUsername'];
        }
      },
      (error)=>{
        console.log("Some Problem in Accepted req");//debug
      }
  
        );
  }
  public onClick() {
    //alert(this.search.rTopic);//debug

    this.request.getAcceptedRequest().subscribe(
      (data:any)=>{
        this.allreq = data.reverse();
        let i = 0;
        let len = this.allreq.length;
        for (; i < len; i++){
          delete this.allreq[i]['rTeacherUsername'];
        }
        
      },
      (error)=>{
        console.log("problem in fetching Accepted request");
      }
   );
  }

 
  

}
