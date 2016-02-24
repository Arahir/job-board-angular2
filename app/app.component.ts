import {Component} from 'angular2/core';

interface Job {
  id: number;
  name: string;
}

let JOBS: Job[] = [
  { "id": 11, "name": "Back End" },
  { "id": 12, "name": "Dev Ops" },
  { "id": 13, "name": "Data Scientist" },
  { "id": 14, "name": "Front End" },
  { "id": 15, "name": "UX designer" }
];

@Component({
    selector: 'my-app',
    template: `
      <h1>{{title}}</h1>
      <ul class="jobs">
        <li *ngFor="#job of jobs"
          [class.selected]="job === selectedJob"
          (click)="onSelect(job)" >
          <span class="badge">{{job.id}}</span> {{job.name}}
        </li>
      </ul>
      <div *ngIf="selectedJob">
        <h2>{{selectedJob.name}} details!</h2>
        <div><label>id: </label>{{selectedJob.id}}</div>
        <div>
          <label>name: </label>
          <input [(ngModel)]="selectedJob.name" placeholder="name"/>
        </div>
      </div>
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
    `]

})
export class AppComponent {
  public title = 'List of jobs';
  public jobs = JOBS;

  selectedJob: Job;
  onSelect(job: Job) { this.selectedJob = job; }

}
