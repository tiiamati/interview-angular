import { Interviewee } from '../interviewee/interviewee';
import { Employee } from '../employee/employee';

export interface Interview {
    id: number;
    interviewee: Interviewee;
    employee: Employee;
    date: Date;
    hour: string;
    important: boolean;
    annotation: string;
    properties: [];
}
