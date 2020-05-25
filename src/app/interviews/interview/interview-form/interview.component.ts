import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from '@angular/forms';

import { Interview } from '../interview';

@Component({
    selector: 'ia-interview-insert',
    templateUrl: 'interview.component.html'
})
export class InterviewComponent implements OnInit {

    uploadForm: FormGroup;
    
    constructor( private formBuilder: FormBuilder ) {}
    ngOnInit(): void {
        throw new Error('Method not implemented.');
    }

    onSubmit = function (interview: Interview) {
        console.log(interview);
        //this.http.post('http://xxx/externalapi/add', user);
    }

}