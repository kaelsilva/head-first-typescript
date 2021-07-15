import Beverage from "../Beverage";
import CondimentDecorator from "../CondimentDecorator";

export class Mocha extends CondimentDecorator {
  beverage: Beverage;

  constructor(beverage: Beverage){
    super();
    this.beverage = beverage;
  }

  public getDescription(): String {
    return this.beverage.getDescription() + ', Mocha';
  }

  public cost(): number {
    return this.beverage.cost() + .20;
  }
}

export class Whip extends CondimentDecorator {
  beverage: Beverage;

  constructor(beverage: Beverage){
    super();
    this.beverage = beverage;
  }

  public getDescription(): String {
    return this.beverage.getDescription() + ', Whip';
  }

  public cost(): number {
    return this.beverage.cost() + .10;
  }
}

export class Soy extends CondimentDecorator {
  beverage: Beverage;

  constructor(beverage: Beverage){
    super();
    this.beverage = beverage;
  }

  public getDescription(): String {
    return this.beverage.getDescription() + ', Soy';
  }

  public cost(): number {
    return this.beverage.cost() + .15;
  }
}