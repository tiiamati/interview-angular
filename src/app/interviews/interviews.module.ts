import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { InterviewComponent } from './interview/interview-form/interview.component';
import { IntervieweeComponent } from './interviewee/interviewee-form/interviewee.component';
import { EmployeeComponent } from './employee/employee-form/employee.component';
import { InterviewListComponent } from './interview/interview-list/interview-list.component';
import { InterviewDetailedComponent } from './interview/interview-detailed/interview-detailed.component';
import { InterviewListCardComponent } from './interview/interview-list-card/interview-list-card.component';
import { InterviewFilterByData } from './interview/interview-list/interview-filter-by-data.pipe';
import { InterviewFilterUpcoming } from './interview/interview-list/interview-filter-upcoming.pipe';

@NgModule({
    declarations: [
        InterviewComponent,
        IntervieweeComponent,
        EmployeeComponent,
        InterviewListComponent,
        InterviewDetailedComponent,
        InterviewListCardComponent,
        InterviewFilterByData,
        InterviewFilterUpcoming
    ],
    exports: [],
    imports: [ 
        CommonModule,
        HttpClientModule 
    ]
})
export class InterviewsModule {}