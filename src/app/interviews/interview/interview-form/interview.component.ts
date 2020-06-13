import { Component, OnInit } from "@angular/core";

import { InterviewService } from '../services/interview.service';

@Component({
    selector: 'ia-interview-insert',
    templateUrl: 'interview.component.html'
})
export class InterviewComponent {

    constructor(
        private interviewService: InterviewService
    ){
    
    }

    onSubmit() {

        this.interviewService
            .insertInterview(this.data)
            .subscribe(i => this.interviews = i);
    }

}