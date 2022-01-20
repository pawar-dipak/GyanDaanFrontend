import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private userService:UserService,private snack:MatSnackBar,private router:Router) { }
  public user={
    email: '',
    password: '',
    phone: '',
    name: '',
    role:'Student',
  }

  ngOnInit(): void {
  }

  formSubmit(): any {
   // alert("submit");


    //adding user to backend using userservice
    this.userService.addUser(this.user).subscribe(
      (data:any)=>{
        console.log("success");
        this.snack.open("User Created","ok",{
          duration:1000,  
        });
        Swal.fire("User Registered","Welcome "+this.user.name,"success");
        this.clearForm();
        this.router.navigate(['login']);
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
