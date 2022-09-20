export class Task {
  public name: string;
  public description: string;
  public done: boolean;

  constructor(name: string, desc: string = '', done: boolean = false) {
    this.name = name;
    this.description = desc;
    this.done = done;
  }
}
