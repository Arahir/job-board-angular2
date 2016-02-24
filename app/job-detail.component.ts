import {Component, OnInit} from 'angular2/core';
import {Job} from './job';
import {RouteParams} from 'angular2/router';
import { JobService } from './job.service';

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
      <button (click)="goBack()">Back</button>
    </div>
  `
})
export class JobDetailComponent implements OnInit{
  job: Job;

  constructor(
    private _jobService: JobService,
    private _routeParams: RouteParams) {
  }

  ngOnInit() {
    let id = +this._routeParams.get('id');
    this._jobService.getJob(id)
      .then((job: Job) => this.job = job);
  }

  goBack() {
    window.history.back();
  }
}
