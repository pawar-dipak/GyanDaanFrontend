import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginData = {
    username : '',
    password : '', 
  }
  constructor(private snack:MatSnackBar,private login:LoginService,private router:Router) { }

  ngOnInit(): void {
    
  }

  formSubmit(){
    console.log("login form submited");
    if(this.loginData.username.trim()=='' || this.loginData.username==null){
       this.snack.open("Please Enter Valid Email","OK",{
         duration:3000,
       });
       return;
    }
    if(this.loginData.password.trim()=='' || this.loginData.password==null){
      this.snack.open("Please Enter Valid Password","OK",{
        duration:3000,
      });
      return;
   }
   



  // now requesting server to genreate token
    this.login.generateToken(this.loginData).subscribe(
       (data:any)=>{
         console.log('Success');
         console.log(data);

         //login
        this.login.loginUser(data.token);
        this.login.loginStatusSubject.next(true);
        this.login.getCurrentUser().subscribe(
          (user:any)=>{
            this.login.setUser(user);
            console.log(user);
            //redirect if Role=teacher---redirect to teacher DashBoard
            //redirect if Role=student----redirect to student Dashboard
             if(this.login.getUserRole()=="Teacher"){
                //redirect to teacher Dashboard
               // window.location.href='/teacher';
               this.router.navigate(['teacher/all-meeting']);

             }else if(this.login.getUserRole()=='Student'){
              //redirect to student DashBoard
              //window.location.href = '/student';
              this.router.navigate(['student/myMeetings']);

             }else{
               this.login.logout();
             }
              

          }
        );

       },
       (error)=>{
         console.log('Error..!!');
         console.log(error);
         this.snack.open('Invalid Deatils !! Please Enter Correct Details ','OK',{
           duration:3000,
         });
       }

    );


  }

}
