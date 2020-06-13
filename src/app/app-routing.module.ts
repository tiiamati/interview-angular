import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InterviewComponent } from './interviews/interview/interview-form/interview.component';
import { InterviewListComponent } from './interviews/interview/interview-list/interview-list.component';
import { InterviewDetailedComponent } from './interviews/interview/interview-detailed/interview-detailed.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { InterviewListResolver } from './interviews/interview/interview-list/interview-list.resolver';

const routes: Routes = [
  {
    path: 'interview/new', 
    component: InterviewComponent
  },
  {
    path: 'interview/:idEmployee', 
    component: InterviewListComponent,
    resolve: {
      interviews: InterviewListResolver
    }
  },
  {
    path: 'interview/:idEmployee/:idInterview', component: InterviewDetailedComponent
  },
  {
    path: '**', component: NotFoundComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
