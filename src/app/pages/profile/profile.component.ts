import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoginService } from 'src/app/services/login.service';
import { SkillsService } from 'src/app/services/skills.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  
  username = "";
  name='';
  email = "";
  phone = '';
  role = '';
  skills=[];
  constructor(private login: LoginService,private skillService:SkillsService,private snack:MatSnackBar) { }

  ngOnInit(): void {
    let user = this.login.getUser();
    // this.login.getCurrentUser().subscribe(
    //   (data:any)=>{
    //     user = data;
    //   },
    //   (error)=>{
    //     alert('error');
    //   }
    // );
    this.name = user.name;
    this.username = user.username;
    this.email = user.email;
    this.phone = user.phone;
    this.role = user.authorities[0].authority;

    this.skillService.getUserSkills(this.username).subscribe(
      (data:any)=>{
        this.skills=data;
      },
      (error:any)=>{
        this.snack.open("Server Error","OK",{
          duration:3000
        });
      }
    );

  }

}
