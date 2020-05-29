import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as moment from 'moment';

import { InterviewService } from '../services/interview.service';
import { Interview } from '../interview';


@Component({
    selector: 'ia-interview-list',
    templateUrl: 'interview-list.component.html',
    styleUrls: ['./interview-list.component.css']
})
export class InterviewListComponent implements OnInit {
    interviews: Interview[] = [];
    //currentDate = new Date().getFullYear() + '-' + ('0' + (new Date().getMonth() + 1)).slice(-2) + '-' + ('0' + new Date().getDate()).slice(-2);
    currentDate = moment().format('YYYY-MM-DD');
    tomorrow = moment().add(1, "days").format("YYYY-MM-DD");

    interviewForm(){
        this.router.navigateByUrl('/interview/new');
    }

    constructor(
        private interviewService: InterviewService,
        private activatedRoute: ActivatedRoute,
        private router: Router
    ) { }
    
    ngOnInit(): void {
        const idEmployee = this.activatedRoute.snapshot.params.idEmployee;

        this.interviewService
            .listInterview(idEmployee)
            .subscribe(i => this.interviews = i);
    }
}