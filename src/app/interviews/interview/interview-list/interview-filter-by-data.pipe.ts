import { PipeTransform, Pipe } from '@angular/core';

import { Interview } from '../interview';

@Pipe({ name: 'interviewFilterByData'})
export class InterviewFilterByData implements PipeTransform {

    transform(interviews: Interview[], data: string) {
        return interviews.filter(x => x.date == data);
    }
}