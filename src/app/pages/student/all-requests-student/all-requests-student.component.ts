import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoginService } from 'src/app/services/login.service';
import { RequestService } from 'src/app/services/request.service';

@Component({
  selector: 'app-all-requests-student',
  templateUrl: './all-requests-student.component.html',
  styleUrls: ['./all-requests-student.component.css']
})
export class AllRequestsStudentComponent implements OnInit {

  public allreq = [];
  public PersonalReq=[];
  
  
  constructor(private request:RequestService,private login:LoginService,private snack:MatSnackBar) { }

  ngOnInit(): void {
    
    //console.log("entering"); //debug
    this.request.getAllRequestsOfStudent().subscribe(
    (data:any)=>{
      this.allreq=data.reverse();
     

    },
    (error)=>{
      this.snack.open("Server Error","ok",{
        duration:3000,
      });
      console.log("Some Problem in fetching all req");//debug
    }

      );

      this.request.getAllPersonalRequestsOfStudent().subscribe(
        (data:any)=>{
          this.PersonalReq=data.reverse();
         
    
        },
        (error)=>{
          this.snack.open("Server Error","ok",{
            duration:3000,
          });
          console.log("Some Problem in fetching all req");//debug
        }
    
          );

   

    
  }
  public onDeleteAllRequest(id:any){
    this.request.deleteRequest(id).subscribe(
      (data:any)=>{
        this.snack.open("Request Deleted","OK",{
          duration:3000,
         });
         this.ngOnInit();
        },
        (error:any)=>{
         this.snack.open("Server Errror","OK",{
           duration:3000,
         });
       });
     
   }

   public onDeletePersonalRequest(id:any){
    this.request.deletePersonalRequest(id).subscribe(
      (data:any)=>{
        this.snack.open("Request Deleted","OK",{
          duration:3000,
         });
         this.ngOnInit();
        },
        (error:any)=>{
         this.snack.open("Server Errror","OK",{
           duration:3000,
         });
       });
     
   }
   

}
