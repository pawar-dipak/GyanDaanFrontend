import { Component  } from '@angular/core';
import { NgModule  } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SignupComponent } from './pages/signup/signup.component';
import { StudentDashboardComponent } from './pages/student/student-dashboard/student-dashboard.component';
import { TeacherDashboardComponent } from './pages/teacher/teacher-dashboard/teacher-dashboard.component';
import { WelcomeComponent } from './pages/teacher/welcome/welcome.component';
import { StudentGuard } from './services/student.guard';
import { TeacherGuard } from './services/teacher.guard';
import {AllRequestsComponent} from './pages/all-requests/all-requests.component';
import {PersonalRequestsComponent} from './pages/teacher/personal-requests/personal-requests.component'
import { CommonMeetingsComponent } from './pages/common-meetings/common-meetings.component';
import { MakeRequestComponent } from './pages/student/make-request/make-request.component';
import { StudentWelcomeComponent } from './pages/student/student-welcome/student-welcome.component';
import { MakePersonalRequestComponent } from './pages/student/make-personal-request/make-personal-request.component';
import { AcceptedRequestComponent } from './pages/student/accepted-request/accepted-request.component';
import { CreateMeetingComponent } from './pages/teacher/create-meeting/create-meeting.component';
import { AcceptedMeetingsComponent } from './pages/teacher/accepted-meetings/accepted-meetings.component';
import { CreateMessageComponent } from './pages/Messages/create-message/create-message.component';
import { AllMessagesComponent } from './pages/Messages/all-messages/all-messages.component';
import { CreatePersonalMeetingComponent } from './pages/teacher/create-personal-meeting/create-personal-meeting.component';
import { ShowMessagesComponent } from './pages/Messages/show-messages/show-messages.component';
import { MyPersonalMeetingsComponent } from './pages/student/my-personal-meetings/my-personal-meetings.component';
import { AllMeetingsTeacherComponent } from './pages/teacher/all-meetings-teacher/all-meetings-teacher.component';
import { AllRequestsStudentComponent } from './pages/student/all-requests-student/all-requests-student.component';
import { AddSkillsComponent } from './pages/teacher/add-skills/add-skills.component';
import { SearchTeacherBySkillComponent } from './pages/student/search-teacher-by-skill/search-teacher-by-skill.component';


export const routes: Routes = [
 {
    path:'signup',
    component:SignupComponent,
    pathMatch:'full',
  },
  {
    path:'login',
    component:LoginComponent,
    pathMatch:'full',

  },
  {
    path:'',
    component: HomeComponent,
    pathMatch:'full',
  },
  {
    path:'teacher',
    component: TeacherDashboardComponent,
    // pathMatch:'full',
    canActivate: [TeacherGuard],
    
    children:[
      {
        path:'welcome',
        component:WelcomeComponent,
      },
      {
      path:'profile',
      component:ProfileComponent,
    },
    {
      path:'add-skills',
      component:AddSkillsComponent,
    },
    {
      path:'Meetings',
      component:CommonMeetingsComponent,
    },
    {
      path:'all-requests',
      component:AllRequestsComponent,
    },
    {
      path:'personal-requests',
      component:PersonalRequestsComponent,
    },
    {
      path:'accepted-requests',
      component:AcceptedMeetingsComponent,
    },
    {
      path:'add-meeting',
      component:CreateMeetingComponent,
    },
    {
      path:'all-meeting',
      component:AllMeetingsTeacherComponent,
    },
    {
      path:'add-message/:username',
      component:CreateMessageComponent,
    },
    {
      path:'allMessages',
      component:AllMessagesComponent,
    },
    {
      path:'allMessages/:username',
      component:ShowMessagesComponent,
    },
    {
      path:'PersonalMeeting/:username',
      component:CreatePersonalMeetingComponent,
    },

    
    ],
  },
  {
    path:'student',
    component: StudentDashboardComponent,
    // pathMatch:'full',
    canActivate:[StudentGuard],
    children:[
      {
        path:'welcome',
        component:StudentWelcomeComponent,
      },
      {
        path:'profile',
        component:ProfileComponent
      },
      {
        path:'searchTeacher',
        component:SearchTeacherBySkillComponent,
      },
      {
        path:'myMeetings',
        component:MyPersonalMeetingsComponent,
      },
      {
        path:'myRequests',
        component:AllRequestsStudentComponent,
      },
      {
        path:'request',
        component:MakeRequestComponent,
      },
      {
        path:'personal-request/:username',
        component:MakePersonalRequestComponent,
      },
      {
        path:'all-request',
        component:AllRequestsComponent,
      },
      {
        path:'accepted-request',
        component:AcceptedRequestComponent,
      },
      {
        path:'all-meetings',
        component:CommonMeetingsComponent,
      },
      {
        path:'add-message/:username',
        component:CreateMessageComponent,
      },
      {
        path:'allMessages',
        component:AllMessagesComponent,
      },
      {
        path:'allMessages/:username',
        component:ShowMessagesComponent,
        
      },

     
    ],
  },
  {
    path:'profile',
    component:ProfileComponent,
  },
  {
    path:'Meetings',
    component:CommonMeetingsComponent,
  },
  
 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
