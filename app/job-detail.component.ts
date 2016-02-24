import {Component} from 'angular2/core';
import {Job} from './job';

@Component({
  selector: 'my-job-detail',
  inputs: ['job'],
  template: `
    <div *ngIf="job">
      <h2>{{job.name}} details!</h2>
      <div><label>id: </label>{{job.id}}</div>
      <div>
        <label>name: </label>
        <input [(ngModel)]="job.name" placeholder="name"/>
      </div>
    </div>
  `
})
export class JobDetailComponent {
  job: Job;
}
