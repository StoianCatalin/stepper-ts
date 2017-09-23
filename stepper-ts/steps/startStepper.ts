import stepper from "../stepper";
export function startStepper() {
  return function (target, propertyKey: string, descriptor: PropertyDescriptor) {
    stepper.executeSteppers();
  }
}
