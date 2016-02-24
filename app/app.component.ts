import {Component} from 'angular2/core';

interface Job {
  id: number;
  name: string;
}

@Component({
    selector: 'my-app',
    template: `
      <h1>{{title}}</h1>
      <h2>{{job.name}} details!</h2>
      <div>
        <label>id: </label>{{job.id}}
      </div>
      <div>
        <label>name: </label>
        <div><input [(ngModel)]="job.name" placeholder="name"></div>
      </div>`
})
export class AppComponent {
  public title = 'List of jobs';
  public job : Job = {
    id: 1,
    name: 'Front End Developer'
  };
}
