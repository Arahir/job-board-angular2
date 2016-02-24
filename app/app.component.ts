import {Component} from 'angular2/core';
import {JobDetailComponent} from './job-detail.component';
import {Job} from './job';
import {JobService} from './job.service';
import {OnInit} from 'angular2/core';

@Component({
    selector: 'my-app',
    providers: [JobService],
    template: `
      <h1>{{title}}</h1>
      <ul class="jobs">
        <li *ngFor="#job of jobs"
          [class.selected]="job === selectedJob"
          (click)="onSelect(job)" >
          <span class="badge">{{job.id}}</span> {{job.name}}
        </li>
      </ul>
      <my-job-detail [job]="selectedJob"></my-job-detail>
    `,
    styles:[`
      .selected {
        background-color: #CFD8DC !important;
        color: white;
      }
      .jobs {
        margin: 0 0 2em 0;
        list-style-type: none;
        padding: 0;
        width: 10em;
      }
      .jobs li {
        cursor: pointer;
        position: relative;
        left: 0;
        background-color: #EEE;
        margin: .5em;
        padding: .3em 0em;
        height: 1.6em;
        border-radius: 4px;
      }
      .jobs li.selected:hover {
        color: white;
      }
      .jobs li:hover {
        color: #607D8B;
        background-color: #EEE;
        left: .1em;
      }
      .jobs .text {
        position: relative;
        top: -3px;
      }
      .jobs .badge {
        display: inline-block;
        font-size: small;
        color: white;
        padding: 0.8em 0.7em 0em 0.7em;
        background-color: #607D8B;
        line-height: 1em;
        position: relative;
        left: -1px;
        top: -4px;
        height: 1.8em;
        margin-right: .8em;
        border-radius: 4px 0px 0px 4px;
      }
    `],
    directives: [JobDetailComponent]

})
export class AppComponent implements OnInit{
  public title = 'List of jobs';
  public jobs: Job[];
  selectedJob: Job;

  constructor(private _jobService: JobService) { }
  ngOnInit() {
    this.getJobs();
  }

  getJobs() {
    this._jobService.getJobs().then((jobs: Job[]) => this.jobs = jobs);
  }

  onSelect(job: Job) { this.selectedJob = job; }

}
