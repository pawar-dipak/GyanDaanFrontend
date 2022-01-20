import { Component, NgModule, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { MessageServiceService } from 'src/app/services/message-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-show-messages',
  templateUrl: './show-messages.component.html',
  styleUrls: ['./show-messages.component.css']
})

export class ShowMessagesComponent implements OnInit {
  public allmsg = [];
  public username='';
  public role=''
  constructor(private message:MessageServiceService,private login:LoginService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    
    let user = this.login.getUser();
    this.role = this.login.getUserRole();
    if(this.role=='Teacher'){
      this.role  = 'teacher';
    }else{
      this.role='student';
    }
    this.username = user.username;
    let replytousername = this.route.snapshot.params['username'];
    if(replytousername!='null'){
    
    this.message.getMessages(user.username, replytousername).subscribe(
      (data:any)=>{
        console.log(data);
        // this.allmsg.mUsername=data.mUsername;
        // this.allmsg.mMessage=data.mMessage;
        // this.allmsg.mSubject=data.mSubject;
        // this.allmsg.mReplytoUsername=data.mReplytoUsername;

        this.allmsg = data;

      },
      (error)=>{
        console.log("Some Problem in fetching all Messages");//debug
        Swal.fire("Server Error","ok","error");
      }
  
        );}
        else{
          
          this.message.AllMessages(user.username).subscribe(
            (data:any)=>{
              console.log(data);
              // this.allmsg.mUsername=data.mUsername;
              // this.allmsg.mMessage=data.mMessage;
              // this.allmsg.mSubject=data.mSubject;
              // this.allmsg.mReplytoUsername=data.mReplytoUsername;
      
              this.allmsg = data;
      
            },
            (error)=>{
              console.log("Some Problem in fetching all Messages");//debug
              Swal.fire("Server Error","ok","error");
            }
        
              );

        }
  }

}
