import { Component } from "@angular/core";
import { EmployeeService } from './services/employee.service';

@Component({
    selector: 'ia-employee-custom-select',
    templateUrl: 'employee.component.html'
})

export class EmployeeComponent {
    description = 'Entrevistador';
    optionSelected = '-';
    employees: Object[] = [];

    constructor(employeeService: EmployeeService){
        employeeService.listEmployee().subscribe(e => this.employees = e);
    }
}
