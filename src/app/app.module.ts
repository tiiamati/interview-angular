import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { InterviewComponent } from './interview-form/interview/interview.component';
import { IntervieweeComponent } from './interview-form/interviewee/interviewee.component';
import { EmployeeComponent } from './interview-form/employee/employee.component';

@NgModule({
  declarations: [
    AppComponent,
    InterviewComponent,
    IntervieweeComponent,
    EmployeeComponent
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
