import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public login:LoginService) { }

  ngOnInit(): void {
    //this is how eventlistner works in angular 
    //this loginstatussubject object will be sent to object that subscribes it every time we set its value

    // this.login.loginStatusSubject.asObservable().subscribe(data=>{

    // });
  }

  public logout(){
    this.login.logout();
  }
}
