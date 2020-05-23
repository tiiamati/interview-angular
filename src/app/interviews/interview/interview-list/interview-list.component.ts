import { Component, OnInit } from '@angular/core';

import { InterviewService } from '../services/interview.service';
import { Interview } from '../interview';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'ia-interview-list',
    templateUrl: 'interview-list.component.html',
    styleUrls: ['./interview-list.component.css']
})
export class InterviewListComponent implements OnInit {
    interviews: Interview[] = [];
    show = [];

    showInterviewee(index) {
        if (this.show[index] == 'show') {
            this.show[index] = '';
        } else {
            this.show[index] = 'show';
        }
    };

    constructor(
        private interviewService: InterviewService,
        private activatedRoute: ActivatedRoute
    ) { }
    
    ngOnInit(): void {
        const idEmployee = this.activatedRoute.snapshot.params.idEmployee;

        this.interviewService
            .listInterview(idEmployee)
            .subscribe(i => this.interviews = i);
            
    }
}