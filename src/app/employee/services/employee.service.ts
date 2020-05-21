import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../employee';

const URL = 'http://localhost:8089/api';

@Injectable({ providedIn: 'root' })
export class EmployeeService {

  constructor(private http: HttpClient) {}

  listEmployee() {
    return this.http
      .get<Employee[]>(URL + '/employee');
  }
}