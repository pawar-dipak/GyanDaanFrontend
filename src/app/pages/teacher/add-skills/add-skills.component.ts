import { Component, OnInit } from '@angular/core';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipInputEvent} from '@angular/material/chips';
import { LoginService } from 'src/app/services/login.service';
import { SkillsService } from 'src/app/services/skills.service';
import { MatSnackBar } from '@angular/material/snack-bar';


export interface Skill {
  name: string;
}

@Component({
  selector: 'app-add-skills',
  templateUrl: './add-skills.component.html',
  styleUrls: ['./add-skills.component.css']
})
export class AddSkillsComponent implements OnInit {
  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  skills: Skill[] = [];

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our fruit
    if (value) {
      this.skills.push({name: value});
    }

    // Clear the input value
    event.chipInput!.clear();
  }

  remove(skill: Skill): void {
    const index = this.skills.indexOf(skill);

    if (index >= 0) {
      this.skills.splice(index, 1);
    }
  }
  constructor(private login:LoginService,private skillService:SkillsService,private snack:MatSnackBar) { }

  ngOnInit(): void {
  }

  /**
   * formsubmit
   */
  public formSubmit() {
    let skill={
      susername:this.login.getUser().username,
      sname:''
    }
      for(let i=0;i<this.skills.length;i++){
       skill.sname=this.skills[i]['name'];
        this.skillService.addSkills(skill).subscribe(
          (data:any)=>{

          },
          (error:any)=>{
            this.snack.open("Server Error","OK",{
              duration:3000
            });
            this.ngOnInit();
          }
        );
      }
      this.skills = [];
      this.snack.open("Skills Added","OK",{
        duration:3000
      });
    
    
  }

}
