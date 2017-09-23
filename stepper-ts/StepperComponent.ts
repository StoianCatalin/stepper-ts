import stepper from "./stepper";
export abstract class StepperComponent {

  ngOnInit(): void {
    stepper.executeStepper();
  };
}
