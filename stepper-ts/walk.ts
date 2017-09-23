import {IWalk} from "./interfaces/IWalk";
import {Step} from "./step";
import {Scheduler} from "./classes/Scheduler";
export class Walk implements IWalk {
  name: string;
  steps: Step[];
  scheduler: Scheduler;

  constructor(name: string, scheduler: Scheduler) {
    this.name = name;
    this.steps = [];
    if (scheduler) {
      this.scheduler = scheduler;
    } else {
      this.scheduler = new Scheduler(0, null, null, false);
    }
  }

  addStep(step: Step): void {
    this.steps.push(step);
  }

  tryToExecute(): void {
    this.executeInitSteps();
    this.executeByTime();
  }

  executeByTime() {
    if (this.scheduler.time) {
      setTimeout(() => {
        this.steps.map((step: Step) => {
          step.toExecute();
        });
      }, this.scheduler.time);
    }
  }

  executeInitSteps() {
    if (this.scheduler.init) {
      this.steps.map((step: Step) => {
        step.toExecute();
      });
    }
  }
}
