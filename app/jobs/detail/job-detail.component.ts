import {Component, OnInit} from 'angular2/core';
import {Job} from '../../job';
import {RouteParams} from 'angular2/router';
import { JobService } from '../../services/job.service';

@Component({
  selector: 'my-job-detail',
  inputs: ['job'],
  styleUrls: ['app/jobs/detail/job-detail.component.css'],
  templateUrl: 'app/jobs/detail/job-detail.component.html'
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
