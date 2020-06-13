import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'ia-interview-list-card',
    templateUrl: 'interview-list-card.component.html'
})
export class InterviewListCardComponent implements OnInit{
    @Input() interviews;
    show = [];

    showInterview(index) {
        if (this.show[index] == 'show') {
            this.show[index] = '';
        } else {
            this.show[index] = 'show';
        }
    }

    constructor( private activatedRoute: ActivatedRoute) { }

    ngOnInit(): void {
        this.interviews = this.activatedRoute.snapshot.data['interviews'];
    }


}