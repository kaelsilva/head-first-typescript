export interface FlyBehavior {
  fly(): void;
}

export class FlyWithRocket implements FlyBehavior {
  public fly(): void {
    console.log('I\'m flying with a Rocket!');
  }
}

export class FlyWithWings implements FlyBehavior {
  public fly(): void {
    console.log('I\'m flying');
  }
}

export class FlyNoWay implements FlyBehavior {
  public fly(): void {
    console.log('I can\'t fly!');
  }
}