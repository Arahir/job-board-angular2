import { Component }       from 'angular2/core';
import { JobService }     from './job.service';
import { JobsComponent } from './jobs.component';
import { DashboardComponent } from './dashboard.components';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <a [routerLink]="['Dashboard']">Dashboard</a>
    <a [routerLink]="['Jobs']">Jobs</a>
    <router-outlet></router-outlet>
  `,
  directives: [ROUTER_DIRECTIVES],
  providers: [
    ROUTER_PROVIDERS,
    JobService
  ]
})
@RouteConfig([
  {
  path: '/dashboard',
  name: 'Dashboard',
  component: DashboardComponent,
  useAsDefault: true
  },
  {
    path: '/jobs',
    name: 'Jobs',
    component: JobsComponent
  },
])
export class AppComponent {
  title = 'Tour of Heroes';
}
