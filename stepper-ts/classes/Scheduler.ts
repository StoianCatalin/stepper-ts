import {IScheduler} from "../interfaces/scheduler";
export class Scheduler implements IScheduler {
  time: number;
  after: string;
  before: string;
  init: boolean;

  constructor(time, after, before, init) {
    this.time = time;
    this.after = after;
    this.before = before;
    this.init = init;
  }
}
