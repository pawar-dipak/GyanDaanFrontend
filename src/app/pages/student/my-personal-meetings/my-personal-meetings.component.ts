import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { MeetingService } from 'src/app/services/meeting.service';

@Component({
  selector: 'app-my-personal-meetings',
  templateUrl: './my-personal-meetings.component.html',
  styleUrls: ['./my-personal-meetings.component.css']
})
export class MyPersonalMeetingsComponent implements OnInit {

  public allmeet = [];
  public topic ='';
  constructor(private meeting:MeetingService,private login:LoginService) { }

  ngOnInit(): void {
    
    this.meeting.getAllPersonalMeetingsOfStudent(this.login.getUser().username).subscribe(
      (data:any)=>{
      
        this.allmeet=data.reverse();
        // let i = 0;
        // let len = this.allmeet.length;
        // for (; i < len; i++){
        //   delete this.allmeet[i]['tid'];
        // }
      },
      (error)=>{
        console.log("Some Problem in fetching all req");//debug
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
// }

}
