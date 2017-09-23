import {IStep} from "./interfaces/IStep";
export class Step implements IStep {
  name: string;
  toExecute: Function;

  constructor(name: string, toExecute: Function) {
    this.name = name;
    this.toExecute = toExecute;
  }
}

