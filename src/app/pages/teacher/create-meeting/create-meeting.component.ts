import { Component, getNgModuleById, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoginService } from 'src/app/services/login.service';
import { MeetingService } from 'src/app/services/meeting.service';

@Component({
  selector: 'app-create-meeting',
  templateUrl: './create-meeting.component.html',
  styleUrls: ['./create-meeting.component.css']
})
export class CreateMeetingComponent implements OnInit {
  public meet={
    tDate: '',
    tDescription: '',
    tLink: '',
    tTime: '',
    tTopic:'',
    tUsername:'',
  } 
  constructor(private meetingService:MeetingService,private snack:MatSnackBar,private login: LoginService) { }

  ngOnInit(): void {
    let username = this.login.getUser().username;
    this.meet.tUsername=username;
    
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
    this.meetingService.addtoAllMeetings(this.meet).subscribe(
      
        (data:any)=>{
          console.log("success"+data);
          this.snack.open("Meeting Created","ok",{
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
