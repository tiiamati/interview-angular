import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Interview } from '../interview';

const URL = 'http://localhost:8089/api';

@Injectable({ providedIn: 'root' })
export class InterviewService {

  constructor(private http: HttpClient) {}

  listInterview() {
    return this.http
      .get<Interview[]>(URL + '/interview/employee/2');
  }

  getInterview() {
    return this.http
      .get<Interview>(URL + '/interview/employee/2/3');
  }

}