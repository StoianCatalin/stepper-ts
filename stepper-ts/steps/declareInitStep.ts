import {Step} from "../step";
import {Scheduler} from "../classes/Scheduler";
import stepper from "../stepper";

export function declareInitStep() {
  return function (target, propertyKey: string, descriptor: PropertyDescriptor) {
    const step = new Step(propertyKey, target[propertyKey]);
    stepper.addStep('init', step, new Scheduler(0, null, null, true));
  }
}
