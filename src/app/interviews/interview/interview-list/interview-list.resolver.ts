import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot,  } from '@angular/router';
import { Observable } from 'rxjs';
import { Interview } from '../interview';
import { InterviewService } from '../services/interview.service';

@Injectable({ providedIn: 'root'})
export class InterviewListResolver implements Resolve<Observable<Interview[]>> {

    constructor( private service:InterviewService ) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){

        const idEmployee = route.params.idEmployee;
        return this.service.listInterview(idEmployee);
    }
}