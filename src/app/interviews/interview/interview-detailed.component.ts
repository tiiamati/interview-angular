import { Component, OnInit } from "@angular/core";
import { InterviewService } from './services/interview.service';
import { Interview } from './interview';

@Component({
    selector: 'ia-interview-detailed',
    templateUrl: 'interview-detailed.component.html'
})
export class InterviewDetailedComponent implements OnInit{
    interview: Interview;
    properties = [];

    constructor(private interviewService: InterviewService) {}

    ngOnInit(): void {
        this.interviewService
            .getInterview()
            .subscribe(data => {
                this.interview = data,
                this.properties = data.properties
            });
    }
}