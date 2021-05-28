import { FlyBehavior } from '../Fly';
import { QuackBehavior } from '../Quack';

export abstract class Duck {
  
  private flyBehavior: FlyBehavior;
  private quackBehavior: QuackBehavior;
  
  public display(): void {}
  
  public performQuack(): void{
    this.quackBehavior.quack();
  }
  
  public performFly(): void {
    this.flyBehavior.fly();
  }
  
  public setFlyBehavior(flyBehavior: FlyBehavior): void {
    this.flyBehavior = flyBehavior;
  }

  public setQuackBehavior(quackBehavior: QuackBehavior): void {
    this.quackBehavior = quackBehavior;
  }
  
  constructor (flyBehavior: FlyBehavior, quackBehavior: QuackBehavior){
    this.flyBehavior = flyBehavior;
    this.quackBehavior = quackBehavior;
  }
}

export class MallardDuck extends Duck {
  public display(): void {
    console.log('I\'m a mallard duck!');
  }
 
}

