import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoginService } from 'src/app/services/login.service';
import { MeetingService } from 'src/app/services/meeting.service';
import { RequestService } from 'src/app/services/request.service';

@Component({
  selector: 'app-make-request',
  templateUrl: './make-request.component.html',
  styleUrls: ['./make-request.component.css']
})
export class MakeRequestComponent implements OnInit {

  public request={
    rUsername: '',
    rTopic:'',
    rDescription: '',
    rDate :'any',
    rTime:'any',
    rStatus: '',
  } 
  constructor(private requestService:RequestService,private snack:MatSnackBar,private login: LoginService) { }

  ngOnInit(): void {
    let username = this.login.getUser().username;
    this.request.rUsername=username;
    this.request.rStatus = 'Open';
    
  }
  formSubmit(): any {
    if(this.request.rTopic==''){
      this.snack.open("Topic Required","ok",{
        duration:3000,  
      });
      return; 
    }
   
    if(this.request.rDescription==''){
      this.snack.open("Description Required","ok",{
        duration:3000,  
      });
      return; 
    }

    // alert("submitted")//debug
    if(this.request.rTopic==''){
      return;
    }
    if(this.request.rDescription==''){
      return;
    }
    this.requestService.addAllrequest(this.request).subscribe(
      
        (data:any)=>{
          // console.log("success"+data);
          this.snack.open("Request Sent","OK",{
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
