import { Interviewee } from '../interviewee/interviewee';

export interface Interview {
    id: number;
    interviewee: Interviewee;
    date: Date;
    important: boolean;
    annotation: string;
    properties: [];
}
