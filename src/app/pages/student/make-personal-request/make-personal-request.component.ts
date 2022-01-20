import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { RequestService } from 'src/app/services/request.service';

@Component({
  selector: 'app-make-personal-request',
  templateUrl: './make-personal-request.component.html',
  styleUrls: ['./make-personal-request.component.css']
})
export class MakePersonalRequestComponent implements OnInit {
 
  public request={
    rUsername: '',
    rTeacherUsername:'',
    rTopic:'',
    rDescription: '',
    rDate :'any',
    rTime:'any',
    rStatus: '',
  } 
  constructor(private requestService:RequestService,private snack:MatSnackBar,private login: LoginService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    let username = this.login.getUser().username;
    this.request.rUsername=username;
    this.request.rStatus = 'Open';

     
    this.request['rTeacherUsername'] = this.route.snapshot.params['username'];;
    if(this.request['rTeacherUsername']=='null'){
      this.request['rTeacherUsername']='';
    }
    
  }
  formSubmit(): any {
    if(this.request.rTopic==''){
      this.snack.open("Topic Required","ok",{
        duration:3000,  
      });
      return; 
    }
    if(this.request.rTeacherUsername==''){
      this.snack.open("Teacher Username Required","ok",{
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
    this.requestService.addPersonalrequest(this.request).subscribe(
      
      
        (data:any)=>{
         // console.log("success"+data);
          this.snack.open("Request Sent","ok",{
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
