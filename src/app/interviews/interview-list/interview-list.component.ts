import { Component, OnInit } from '@angular/core';
import { Interview } from '../interview';
import { InterviewService } from '../services/interview.service';

@Component({
    selector: 'ia-interview-list',
    templateUrl: 'interview-list.component.html',
    styleUrls: ['./interview-list.component.css']
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