import {Injectable} from 'angular2/core';
import {JOBS} from './mock-jobs';
import {Job} from './job';

@Injectable()
export class JobService {
  getJobs(): Promise<Job[]> {
    return Promise.resolve(JOBS);
  }
}
