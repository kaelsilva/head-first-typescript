export interface QuackBehavior {
  quack(): void;
}

export class Quack implements QuackBehavior {
  public quack(): void {
    console.log('QUACK!');
  }
}

export class Squeak implements QuackBehavior {
  public quack(): void {
    console.log('SQUEAK!');
  }
}

export class MuteQuack implements QuackBehavior {
  public quack(): void {
    console.log('[no sound emmited]');
  }
}