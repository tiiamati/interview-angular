import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'ia-interview-list-card',
    templateUrl: 'interview-list-card.component.html'
})
export class InterviewListCardComponent {
    @Input() interviews;
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