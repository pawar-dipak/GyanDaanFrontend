import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { MeetingService } from 'src/app/services/meeting.service';

@Component({
  selector: 'app-common-meetings',
  templateUrl: './common-meetings.component.html',
  styleUrls: ['./common-meetings.component.css']
})
export class CommonMeetingsComponent implements OnInit {

  public allmeet = [];
  public role='';
  
  public topic ='';

  public meet={
    tDate: '',
    tDescription: '',
    tLink: '',
    tTime: '',
    tTopic:'',
    tUsername:'',
    tStudentUsername:'',
  } 
  constructor(private meeting:MeetingService,private login:LoginService) { }

  ngOnInit(): void {
    this.role = this.login.getUserRole();
    this.meeting.getAllMeetings().subscribe(
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

 public onClick(){
        this.meeting.getFilteredMeeting(this.topic).subscribe(
          (data:any)=>{
            if(data.length>0){
            this.allmeet=data.reverse();
            //console.log(data);
          }
            else{
              alert("No Request with searched topic");
              this.topic='';
            }
          },
          (error)=>{
            console.log("Some Problem in fetching filtered req");//debug
          }
        );
  }
  public add(id:any){
    this.meeting.addMeetingtoPersonalMeetingStudent(id,this.login.getUser().username).subscribe(
      (data:any)=>{
        alert("success") //debug
      },
      (error:any)=>{
          alert("error");
      }
    );
  }
  


}
