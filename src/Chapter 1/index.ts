import { Duck, MallardDuck } from './Duck';
import { FlyWithWings, FlyWithRocket, FlyNoWay } from './Fly';
import { MuteQuack, Quack, Squeak } from './Quack';

let mallard: Duck = new MallardDuck(new FlyWithWings(), new Quack());

mallard.performQuack();
mallard.performFly();

mallard.setFlyBehavior(new FlyWithRocket());
mallard.performFly();

mallard.setFlyBehavior(new FlyNoWay());
mallard.performFly();

mallard.setQuackBehavior(new MuteQuack);
mallard.performQuack();

mallard.setQuackBehavior(new Squeak);
mallard.performQuack();

mallard.display();