import {Component} from 'angular2/core';
import {JobDetailComponent} from './job-detail.component';
import {Job} from './job';
import {JobService} from './job.service';
import {OnInit} from 'angular2/core';
import { Router } from 'angular2/router';

@Component({
    selector: 'my-jobs',
    templateUrl: 'app/jobs.component.html',
    styleUrls: ['app/jobs.component.css'],
    directives: [JobDetailComponent]

})
export class JobsComponent implements OnInit{
  public title = 'List of jobs';
  public jobs: Job[];

  constructor(
    private _router: Router,
    private _jobService: JobService) { }
  ngOnInit() {
    this.getJobs();
  }

  getJobs() {
    this._jobService.getJobs().then((jobs: Job[]) => this.jobs = jobs);
  }

  gotoDetail(job: Job) {
    let link = ['JobDetail', { id: job.id }];
    this._router.navigate(link);
  }

}
