import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { MessageServiceService } from 'src/app/services/message-service.service';

@Component({
  selector: 'app-create-message',
  templateUrl: './create-message.component.html',
  styleUrls: ['./create-message.component.css']
})
export class CreateMessageComponent implements OnInit {

  public message={
    mUsername: '',
    mSubject:'',
    mMessage:'',
    mReplytoUsername:'',
  } 
  public replytousername='';
  constructor(private messageService:MessageServiceService,private snack:MatSnackBar,private login: LoginService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    let user = this.login.getUser();
    this.message.mUsername=user.username;

    this.replytousername = this.route.snapshot.params['username'];
    this.message['mReplytoUsername'] = this.replytousername;
    if(this.message['mReplytoUsername']=='null'){
      this.message['mReplytoUsername']='';
    }
    
  }
  formSubmit(): any {

    if(this.message.mSubject==''){
      this.snack.open("Subject Required","ok",{
        duration:3000,  
      });
      return;
    }
    if(this.message.mMessage==''){
      this.snack.open("Message Required","ok",{
        duration:3000,  
      });
      return;
    }
    if(this.message.mReplytoUsername==''){
      this.snack.open("Username Required","ok",{
        duration:3000,  
      });
      return;
    }

    // alert("submitted")//debug
    this.messageService.addMessage(this.message).subscribe(
      
        (data:any)=>{
          console.log("success"+data);
          this.snack.open("Message Sent","ok",{
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
