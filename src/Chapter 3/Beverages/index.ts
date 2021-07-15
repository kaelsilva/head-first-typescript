import Beverage from "../Beverage";

export class Espresso extends Beverage {
  constructor(){
    super();
    this.setDescription('Espresso');
  }

  public cost(): number {
    return 1.99;
  }
}

export class HouseBlend extends Beverage {
  constructor(){
    super();
    this.setDescription('House Blend Coffee');
  }

  public cost(): number {
    return .89;
  }
}

export class DarkRoast extends Beverage {
  constructor(){
    super();
    this.setDescription('Dark Roast Coffee');
  }

  public cost(): number {
    return .99;
  }
}

export class Decaf extends Beverage {
  constructor(){
    super();
    this.setDescription('Decaf Coffee');
  }

  public cost(): number {
    return 1.05;
  }
}