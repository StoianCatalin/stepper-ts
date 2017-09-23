import {IStepper} from "./interfaces/IStepper";
import {Walk} from "./walk";
import {Step} from "./step";
import {Scheduler} from "./classes/Scheduler";

class Stepper implements IStepper {
  walks: Walk[];

  constructor() {
    this.walks = [];
  }

  createWalk(walkName: string, scheduler: Scheduler = null): Walk {
    const walk = new Walk(walkName, scheduler);
    this.walks.push(walk);
    return walk;
  }

  addStep(walkName: string, step: Step, scheduler: Scheduler): void {
    let walkFound: boolean = false;
    this.walks.map((walk: Walk) => {
      if (walk.name === walkName) {
        walkFound = true;
        walk.addStep(step);
      }
    });
    if (!walkFound) {
      const walk: Walk = this.createWalk(walkName, scheduler);
      walk.addStep(step);
    }
  }

  executeStepper(): void {
    this.walks.map((walk: Walk) => {
      walk.tryToExecute();
    })
  }

  extractWalk(name: string): Walk {
    return this.walks.find((walk: Walk) => walk.name == name);
  }

}

const stepper = new Stepper();

export default stepper;

