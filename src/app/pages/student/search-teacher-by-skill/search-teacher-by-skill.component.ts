import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SkillsService } from 'src/app/services/skills.service';

@Component({
  selector: 'app-search-teacher-by-skill',
  templateUrl: './search-teacher-by-skill.component.html',
  styleUrls: ['./search-teacher-by-skill.component.css']
})
export class SearchTeacherBySkillComponent implements OnInit {

  public user=[];
  public skill='';
  public  userskills=[{}];
   

  constructor(private skillService:SkillsService,private snack:MatSnackBar) { }

  ngOnInit(): void {
  }
  onClick(){
    this.skillService.getUserWithSkill(this.skill).subscribe(
      (data:any)=>{
          this.user=data;
          this.userskills.pop();
          for(let i=0;i<this.user.length;i++){
            this.skillService.getUserSkills(this.user[i]).subscribe(
              (data:any)=>{
                
                this.userskills.push(data);
                console.log(this.userskills);
              },
              (error:any)=>{
                this.snack.open("Server Error","OK",{
                  duration:3000
                });
              }
            );
          }
      },
      (error)=>{
        this.snack.open("Server Error","OK",{
          duration:3000
        });
      }
    );
    
    
    

  }
  

}
