import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class MessageServiceService {
  
  constructor(private http: HttpClient) { }

  //getting  distinct names of usernames from msg 
  public getAllMessages(username:any){
      
      return this.http.get(baseUrl+"/user/Messages/"+username);
  }

  public addMessage(message:any){
    return this.http.post(baseUrl+"/user/Messages",message);

  }

  //getting all msgs with specific one 
  public getMessages(username:any,replytoUsername:any){
      
     return this.http.get(baseUrl+"/user/Messages/"+username+"/"+replytoUsername);
}

public AllMessages(username:any){
      
  return this.http.get(baseUrl+"/user/Messages/u="+username);
}

}
