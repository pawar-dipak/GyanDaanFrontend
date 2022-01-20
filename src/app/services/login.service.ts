import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public loginStatusSubject = new Subject<boolean>();

  constructor(private http: HttpClient) { }


  //to get current logged in User
  public getCurrentUser(){
    return this.http.get(baseUrl+"/current-user"); 
  }

  public generateToken(loginData:any){
    return this.http.post(baseUrl+"/generate-token",loginData);
  }   


  //Login USer
  //will save token in local storage
  public loginUser(token:any){
    localStorage.setItem('token',token);
    return true;

  }
  //isLogin : user is logged in or not
  public isLoggedIn(){
    let tokenstr = localStorage.getItem('token');
    if(tokenstr == undefined || tokenstr == '' || tokenstr == 'null'){
      return false;

    }else{
      return true;
    }
  }

  //logOut: removes token from local Storage
  public logout(){
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    return true;

  }

  //get token: to get token
  public getToken(){
    return localStorage.getItem('token');
    
  }

  //set userDetail

  public setUser(user:any){
    localStorage.setItem('user',JSON.stringify(user));

  }
  public getUser(){
    let userStr = localStorage.getItem("user");
    if(userStr!=null){
      return JSON.parse(userStr);
    }else{
         this.logout();
         return null;
    }

  }
  //get userRole
  public getUserRole(){
    let user = this.getUser();
    return user.authorities[0].authority;
  }


}
