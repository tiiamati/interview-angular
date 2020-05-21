import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { InterviewComponent } from './interviews/interview/interview.component';
import { IntervieweeComponent } from './interviewee/interviewee.component';
import { EmployeeComponent } from './employee/employee.component';
import { InterviewListComponent } from './interviews/interview/interview-list.component';
import { InterviewDetailedComponent } from './interviews/interview/interview-detailed.component';

@NgModule({
  declarations: [
    AppComponent,
    InterviewComponent,
    IntervieweeComponent,
    EmployeeComponent,
    InterviewListComponent,
    InterviewDetailedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
