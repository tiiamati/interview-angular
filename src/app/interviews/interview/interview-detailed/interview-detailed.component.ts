import { Component, OnInit, Input } from "@angular/core";

import { InterviewService } from '../services/interview.service';
import { Interview } from '../interview';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'ia-interview-detailed',
    templateUrl: 'interview-detailed.component.html'
})
export class InterviewDetailedComponent implements OnInit {
    interview: Interview;
    properties = [];

    @Input() idInterview;

    constructor(
        private interviewService: InterviewService,
        private activatedRoute: ActivatedRoute
    ) { }

    ngOnInit(): void {
        const idEmployee = this.activatedRoute.snapshot.params.idEmployee;

        console.log(idEmployee);

        this.interviewService
            .getInterview(idEmployee, this.idInterview)
            .subscribe(data => {
                this.interview = data,
                this.properties = data.properties
            });
    }
}