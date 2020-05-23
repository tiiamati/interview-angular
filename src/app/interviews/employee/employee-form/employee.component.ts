import { Component, OnInit } from "@angular/core";

import { EmployeeService } from '../services/employee.service';
import { Employee } from '../employee';

@Component({
    selector: 'ia-employee-custom-select',
    templateUrl: 'employee.component.html'
})
export class EmployeeComponent implements OnInit{
    description = 'Entrevistador';
    optionSelected = '-';
    employees: Employee[] = [];

    constructor(private employeeService: EmployeeService){}

    ngOnInit(): void {
        this.employeeService
            .listEmployee()
            .subscribe(e => this.employees = e);
    }
}
