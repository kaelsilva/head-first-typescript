import Beverage from "../Beverage";

export default abstract class CondimentDecorator extends Beverage {
  abstract beverage: Beverage;

  public abstract getDescription(): String;

  public setBeverage(beverage: Beverage): void {
    this.beverage = beverage;
  }
}