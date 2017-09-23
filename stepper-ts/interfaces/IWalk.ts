import {Step} from "../step";
export interface IWalk {
  name: string;
  steps: Step[];
  scheduler: any;

  addStep(step: Step): void;
  tryToExecute(): void
}
