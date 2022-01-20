import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import Swal from 'sweetalert2';
import {MatCardModule} from '@angular/material/card';
import { HomeComponent } from './pages/home/home.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { authInterceptorProvider } from './services/auth.interceptor';
import { TeacherDashboardComponent } from './pages/teacher/teacher-dashboard/teacher-dashboard.component';
import { StudentDashboardComponent } from './pages/student/student-dashboard/student-dashboard.component';
import { ProfileComponent } from './pages/profile/profile.component';
import {MatListModule} from '@angular/material/list';
import { SidebarComponent } from './pages/sidebar/sidebar.component';
import { WelcomeComponent } from './pages/teacher/welcome/welcome.component';
import { AllRequestsComponent } from './pages/all-requests/all-requests.component';
import { PersonalRequestsComponent } from './pages/teacher/personal-requests/personal-requests.component';
import { CommonMeetingsComponent } from './pages/common-meetings/common-meetings.component';
import { MakeRequestComponent } from './pages/student/make-request/make-request.component';
import { StudentSidebarComponent } from './pages/student/student-sidebar/student-sidebar.component';
import { MakePersonalRequestComponent } from './pages/student/make-personal-request/make-personal-request.component';
import { AcceptedRequestComponent } from './pages/student/accepted-request/accepted-request.component';
import { StudentWelcomeComponent } from './pages/student/student-welcome/student-welcome.component';
import { CreateMeetingComponent } from './pages/teacher/create-meeting/create-meeting.component';
import { AcceptedMeetingsComponent } from './pages/teacher/accepted-meetings/accepted-meetings.component';
import { AllMessagesComponent } from './pages/Messages/all-messages/all-messages.component';
import { CreateMessageComponent } from './pages/Messages/create-message/create-message.component';
import { CreatePersonalMeetingComponent } from './pages/teacher/create-personal-meeting/create-personal-meeting.component';
import { NgxUiLoaderHttpModule, NgxUiLoaderModule } from "ngx-ui-loader";
import { ShowMessagesComponent } from './pages/Messages/show-messages/show-messages.component';
import { MyPersonalMeetingsComponent } from './pages/student/my-personal-meetings/my-personal-meetings.component';
import { AllMeetingsTeacherComponent } from './pages/teacher/all-meetings-teacher/all-meetings-teacher.component';
import { AllRequestsStudentComponent } from './pages/student/all-requests-student/all-requests-student.component';
import { SearchTeacherBySkillComponent } from './pages/student/search-teacher-by-skill/search-teacher-by-skill.component';
import { AddSkillsComponent } from './pages/teacher/add-skills/add-skills.component';
import {MatChipsModule} from '@angular/material/chips';

@NgModule({
  declarations: [
    
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    TeacherDashboardComponent,
    StudentDashboardComponent,
    ProfileComponent,
    SidebarComponent,
    WelcomeComponent,
    AllRequestsComponent,
    PersonalRequestsComponent,
    CommonMeetingsComponent,
    MakeRequestComponent,
    StudentSidebarComponent,
    MakePersonalRequestComponent,
    AcceptedRequestComponent,
    StudentWelcomeComponent,
    CreateMeetingComponent,
    AcceptedMeetingsComponent,
    AllMessagesComponent,
    CreateMessageComponent,
    CreatePersonalMeetingComponent,
    ShowMessagesComponent,
    MyPersonalMeetingsComponent,
    AllMeetingsTeacherComponent,
    AllRequestsStudentComponent,
    SearchTeacherBySkillComponent,
    AddSkillsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    HttpClientModule,
    MatSnackBarModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    BrowserModule,
    MatListModule,
    NgxUiLoaderModule,
    NgxUiLoaderHttpModule.forRoot({
      maxTime:1000,
    }),
    MatChipsModule,

     
  
   
    
  ],
  providers: [
    authInterceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
