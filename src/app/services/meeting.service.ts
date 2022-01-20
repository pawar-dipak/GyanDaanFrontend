import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class MeetingService {

  constructor(private http: HttpClient) { }
  public getAllMeetings(){
    return this.http.get(baseUrl+"/teacher/Meetings");
  }

  public addtoAllMeetings(meeting:any){
    return this.http.post(baseUrl+"/teacher/Meetings",meeting );
  }

  public getFilteredMeeting(topic:any){
    return this.http.get(baseUrl+"/teacher/Meetings/"+topic)
  }

  public gettAllMeetingsofTeacher(username:any){
    return this.http.get(baseUrl+"/teacher/Meetings/u="+username);
  }
 
  public deleteMeeting(id:any){
    return this.http.delete(baseUrl+"/teacher/Meetings/"+id);
  }
  
  
  //********   Personal Meeting APIs     ********//

  public getAllPersonalMeetingsOfTeacher(username:any){
    return this.http.get(baseUrl+"/teacher/PersonalMeetings/u="+username);
  }

  public addtoAllPersonalMeetings(personalMeeting:any){
    return this.http.post(baseUrl+"/teacher/PersonalMeetings",personalMeeting );
  }
  
  public getAllPersonalMeetingsOfStudent(username:any){
  return this.http.get(baseUrl+"/user/PersonalMeetings/"+username);
  }

  public addMeetingtoPersonalMeetingStudent(id:any,username:any){
    return this.http.post(baseUrl+"/user/add-PersonalMeetings/"+id+'/'+username,null);

  }
  public deletePersonalMeeting(id:any){
    return this.http.delete(baseUrl+"/teacher/PersonalMeetings/"+id);
  }




}
