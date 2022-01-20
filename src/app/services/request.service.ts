import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private http: HttpClient,private login: LoginService) { }
 
  //AllRequest APIs
  public addAllrequest(request:any){
    return this.http.post(baseUrl+"/Request/AllRequest",request);

  }
  public getAllRequests(){
    return this.http.get(baseUrl+"/Request/AllRequest")
  }

  public getAllRequestsOfStudent(){
    return this.http.get(baseUrl+"/Request/AllRequest/u="+this.login.getUser().username);
  }

  public deleteRequest(id:any){
    return this.http.delete(baseUrl+"/Request/AllRequest/"+id);
  }


  //Personal Request APIs
  public getPersonalRequests(){
    return this.http.get(baseUrl+"/Request/PersonalRequest/"+this.login.getUser().username);
  }

  public getAllPersonalRequestsOfStudent(){
    return this.http.get(baseUrl+"/Request/PersonalRequest/u="+this.login.getUser().username);
  }
  
  public addPersonalrequest(request:any){
    return this.http.post(baseUrl+"/Request/PersonalRequest",request);

  }
  public deletePersonalRequest(id:any){
    return this.http.delete(baseUrl+"/Request/PersonalRequest/"+id);
  }

  //after filter applied APIs
  public getFilteredAllRequest(topic:any){
    return this.http.get(baseUrl+"/Request/AllRequest/"+topic);
  }
  public getFilteredPersonalRequest(topic:any){
    return this.http.get(baseUrl+"/Request/PersonalRequest/"+this.login.getUser().username+"/"+topic);
  }



  //accepted request APIs

  public addAcceptedRequest(id:any){
    return this.http.post(baseUrl+"/Request/AcceptedRequest/"+id+"/"+this.login.getUser().username,null);
  }

  public addPerReqtoAcceptedRequest(id:any){
    return this.http.post(baseUrl+"/Request/PerReqtoAcceptedRequest/"+id+"/"+this.login.getUser().username,null);
  }

  //get accepted requests of teacher/mentor (used as "acceptedMeeting component")
  public getAcceptedRequest(){
    return this.http.get(baseUrl+"/Request/AcceptedRequest/"+this.login.getUser().username);
  }

  //get accepted requests of user/student
  public getAcceptedRequestUser(){
    return this.http.get(baseUrl+"/Request/student/AcceptedRequest/"+this.login.getUser().username);
  }

}
