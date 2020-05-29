import { Interviewee } from '../interviewee/interviewee';
import { Employee } from '../employee/employee';

export interface Interview {
    id: number;
    interviewee: Interviewee;
    employee: Employee;
    date: string;
    hour: string;
    important: boolean;
    annotation: string;
    properties: [];
}
