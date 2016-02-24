import { Component }       from 'angular2/core';
import { JobService }     from './services/job.service';
import { JobsComponent } from './jobs/jobs.component';
import { JobDetailComponent } from './jobs/detail/job-detail.component';
import { DashboardComponent } from './dashboard/dashboard.components';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

@Component({
  selector: 'my-app',
  styleUrls: ['app/app.component.css'],
  templateUrl: 'app/app.component.html',
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
  {
  path: '/detail/:id',
  name: 'JobDetail',
  component: JobDetailComponent
  },
])
export class AppComponent {}
