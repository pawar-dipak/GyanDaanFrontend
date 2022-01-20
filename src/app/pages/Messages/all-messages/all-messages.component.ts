import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { MessageServiceService } from 'src/app/services/message-service.service';

@Component({
  selector: 'app-all-messages',
  templateUrl: './all-messages.component.html',
  styleUrls: ['./all-messages.component.css']
})
export class AllMessagesComponent implements OnInit {

  public users = [];
  public role='';
  
  
 
  constructor(private message:MessageServiceService,private login:LoginService) { }

  ngOnInit(): void {
    let user = this.login.getUser();
    if(this.login.getUserRole()=='Teacher'){
      this.role='teacher'
    }
    else{
      this.role='student'
    }
    
    this.message.getAllMessages(user.username).subscribe(
      (data:any)=>{
        console.log(data);
        this.users=data;
        // let i = 0;
        // let len = this.allmeet.length;
        // for (; i < len; i++){
        //   delete this.allmeet[i]['tid'];
        // }
      },
      (error)=>{

        console.log("Some Problem in fetching all Messages");//debug
      }
  
        );
  }

//   public onClick(){
//     this.meeting.getFilteredMeeting(this.topic).subscribe(
//       (data:any)=>{
//         if(data.length>0){
//         this.allmeet=data.reverse();
//         //console.log(data);
//       }
//         else{
//           alert("No Request with searched topic");
//           this.topic='';
//         }
//       },
//       (error)=>{
//         console.log("Some Problem in fetching filtered req");//debug
//       }
//     );
//   }

}
