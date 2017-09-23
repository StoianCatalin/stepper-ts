import {Walk} from "../walk";
import {Step} from "../step";
import {Scheduler} from "../classes/Scheduler";
export interface IStepper {
  walks: Walk[];

  createWalk(walkName: string, scheduler: Scheduler): Walk;
  addStep(walkName: string, step: Step, scheduler: Scheduler): void;
  executeStepper(): void;
  extractWalk(name: string): Walk;
}
