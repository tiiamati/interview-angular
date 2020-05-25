import { Component, OnInit } from '@angular/core';

import { InterviewService } from '../services/interview.service';
import { Interview } from '../interview';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'ia-interview-list',
    templateUrl: 'interview-list.component.html',
    styleUrls: ['./interview-list.component.css']
})
export class InterviewListComponent implements OnInit {
    interviews: Interview[] = [];
    show = [];
    currentDate = new Date();
    tomorrow =  new Date(new Date().setDate(new Date().getDate() + 1));

    showInterviewee(index) {
        if (this.show[index] == 'show') {
            this.show[index] = '';
        } else {
            this.show[index] = 'show';
        }
    }

    filterData(data){
        data = data.getFullYear() + '-' + ('0' + (data.getMonth() + 1)).slice(-2) + '-' + ('0' + data.getDate()).slice(-2);
        return this.interviews.filter(x => x.date == data);
    }

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