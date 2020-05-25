import { Interviewee } from '../interviewee/interviewee';

export interface Interview {
    id: number;
    interviewee: Interviewee;
    date: Date;
    hour: string;
    important: boolean;
    annotation: string;
    properties: [];
}
