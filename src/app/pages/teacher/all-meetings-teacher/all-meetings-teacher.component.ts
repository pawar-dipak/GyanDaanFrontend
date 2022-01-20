import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoginService } from 'src/app/services/login.service';
import { MeetingService } from 'src/app/services/meeting.service';

@Component({
  selector: 'app-all-meetings-teacher',
  templateUrl: './all-meetings-teacher.component.html',
  styleUrls: ['./all-meetings-teacher.component.css']
})
export class AllMeetingsTeacherComponent implements OnInit {

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

  //***personal meetings
  public pallmeet = [];
  public ptopic ='';


  constructor(private meeting:MeetingService,private login:LoginService,private snack:MatSnackBar) { }

  ngOnInit(): void {
    this.role = this.login.getUserRole();
    this.meeting.gettAllMeetingsofTeacher(this.login.getUser().username).subscribe(
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


        //adding personal meetings

        this.meeting.getAllPersonalMeetingsOfTeacher(this.login.getUser().username).subscribe(
          (data:any)=>{
          
            this.pallmeet=data.reverse();
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
  public onDeleteAllMeeting(id:any){
   this.meeting.deleteMeeting(id).subscribe(
     (data:any)=>{
       this.snack.open("Meeting Deleted","OK",{
         duration:3000,
        });},
       (error:any)=>{
        this.snack.open("Server Errror","OK",{
          duration:3000,
        });
      });
    
  }
  public onDeletePersonalMeeting(id:any){
    this.meeting.deletePersonalMeeting(id).subscribe(
      (data:any)=>{
        this.snack.open("Meeting Deleted","OK",{
          duration:3000,
         });},
        (error:any)=>{
         this.snack.open("Server Errror","OK",{
           duration:3000,
         });
       });
     
   }

}
