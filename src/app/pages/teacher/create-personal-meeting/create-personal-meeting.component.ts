import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { MeetingService } from 'src/app/services/meeting.service';

@Component({
  selector: 'app-create-personal-meeting',
  templateUrl: './create-personal-meeting.component.html',
  styleUrls: ['./create-personal-meeting.component.css']
})
export class CreatePersonalMeetingComponent implements OnInit {

  public meet={
    tDate: '',
    tDescription: '',
    tLink: '',
    tTime: '',
    tTopic:'',
    tUsername:'',
    tStudentUsername:'',
  } 
  public studentusername='';
  constructor(
    private meetingService:MeetingService,
    private snack:MatSnackBar,
    private login: LoginService,
    private route:ActivatedRoute
    ) { }

  ngOnInit(): void {
    let username = this.login.getUser().username;
    this.meet.tUsername=username;
    this.studentusername = this.route.snapshot.params['username'];
    this.meet['tStudentUsername'] = this.studentusername;
    if(this.meet['tStudentUsername']=='null'){
      this.meet['tStudentUsername']='';
    }
  }
  formSubmit(): any {
    if(this.meet.tTopic==''){
      this.snack.open("Topic Required","ok",{
        duration:3000,  
      });
      return;
    }
    if(this.meet.tLink==''){
      this.snack.open("Link Required","ok",{
        duration:3000,  
      });
      return;
    }
    if(this.meet.tDate==''){
      this.snack.open("Date Required","ok",{
        duration:3000,  
      });
      return;
    }
    if(this.meet.tTime==''){
      this.snack.open("Time Required","ok",{
        duration:3000,  
      });
      return;
    }

    // alert("submitted")//debug
    this.meetingService.addtoAllPersonalMeetings(this.meet).subscribe(
      
        (data:any)=>{
         // console.log("success"+data);
          this.snack.open("Meeting Created ","ok",{
            duration:3000,  
            
          });
          this.clearForm(); 
        },
        (error:any)=>{
          this.snack.open("Error Occured","ok",{
            duration:3000,  
          });
        }
      
    );
 
  } 
  clearForm(){
    (<HTMLFormElement>document.getElementById("form")).reset();
   } 

}
