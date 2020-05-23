import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Interview } from '../interview';

const URL = 'http://localhost:8089/api';

@Injectable({ providedIn: 'root' })
export class InterviewService {

  constructor(
    private http: HttpClient
  ) { }

  listInterview(idEmployee: string) {
    return this.http
      .get<Interview[]>(URL + '/interview/employee/' + idEmployee);
  }

  getInterview(idEmployee: string, idInterview: string) {
    return this.http
      .get<Interview>(URL + '/interview/employee/' + idEmployee + '/' + idInterview);
  }

}