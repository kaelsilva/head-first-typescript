import Beverage from "../Beverage";
import { DarkRoast, Espresso, HouseBlend } from "../Beverages"
import { Mocha, Soy, Whip } from "../Condiments";

export default class StarbuzzCoffee {
  private beverage: Beverage | null;
  private beverage2: Beverage | null;
  private beverage3: Beverage | null;

  constructor(){
    this.beverage = null;
    this.beverage2 = null;
    this.beverage3 = null;
  }
  
  public orderCoffee(): void {
    this.beverage = new Espresso();
    console.log(this.beverage.getDescription() + '\t$ ' + this.beverage.cost());

    this.beverage2 = new DarkRoast();
    this.beverage2 = new Mocha(this.beverage2);
    this.beverage2 = new Mocha(this.beverage2);
    this.beverage2 = new Whip(this.beverage2);
    console.log(this.beverage2.getDescription() + '\t$ ' + this.beverage2.cost());

    this.beverage3 = new HouseBlend();
    this.beverage3 = new Soy(this.beverage3);
    this.beverage3 = new Mocha(this.beverage3);
    this.beverage3 = new Whip(this.beverage3);
    console.log(this.beverage3.getDescription() + '\t$ ' + this.beverage3.cost());
  }
}