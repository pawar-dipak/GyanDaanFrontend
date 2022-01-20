import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  constructor(private http: HttpClient,private login: LoginService) { }

  public addSkills(skill:any){
    return this.http.post(baseUrl+"/teacher/skills",skill);
  }

  public getUserWithSkill(skill:any){
    return this.http.get(baseUrl+"/teacher/skills/s="+skill);
  }
  
  public getUserSkills(username:any){
    return this.http.get(baseUrl+"/teacher/skills/u="+username);
  }   

}
