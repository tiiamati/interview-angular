import { Component, OnInit, Input } from '@angular/core';

import { InterviewService } from '../services/interview.service';
import { Interview } from '../interview';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'ia-interview-list-card',
    templateUrl: 'interview-list-card.component.html'
})
export class InterviewListCardComponent {
    @Input() interviews;
    @Input() filter;
    show = [];

    showInterview(index) {
        if (this.show[index] == 'show') {
            this.show[index] = '';
        } else {
            this.show[index] = 'show';
        }
    }

    constructor() { }

}