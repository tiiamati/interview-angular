import { Component, OnInit } from "@angular/core";
import { InterviewService } from './services/interview.service';
import { Interview } from './interview';

@Component({
    selector: 'ia-interview-list',
    templateUrl: 'interview-list.component.html'
})
export class InterviewListComponent implements OnInit{
    interviews: Interview[] = [];

    constructor(private interviewService: InterviewService) {}

    ngOnInit(): void {
        this.interviewService
            .listInterview()
            .subscribe(i => this.interviews = i);
    }
}