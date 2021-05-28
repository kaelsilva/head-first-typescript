import { Subject } from '../Observer/Subject';
import { Observer } from "../Observer/Observer";

export class WeatherData implements Subject {
  private observers: Observer[];
  private temperature: number = 0;
  private humidity: number = 0;
  private pressure: number = 0;
  
  constructor() {
    this.observers = [];
  }

  public registerObserver(o: Observer): void {
    this.observers.push(o);
  }

  public removeObserver(observer: Observer): void {
  let index: number = this.observers.indexOf(observer);
    if (index !== -1)
      this.observers.splice(index,1);
  }

  public notifyObservers() : void {
    this.observers.forEach(observer => {
      observer.update(this.temperature, this.humidity, this.pressure);
    });
  }

  public measurementsChanged(): void {
    this.notifyObservers();
  }

  public setMeasurements(temperature: number, humidity: number, pressure: number): void {
    this.setHumidity(humidity);
    this.setTemperature(temperature);
    this.setPressure(pressure);
    this.measurementsChanged();
  }

  public setHumidity(v : number) :void {
    this.humidity = v;
  }

  public setPressure(v : number) :void {
    this.pressure = v;
  }

  public setTemperature(v : number) : void {
    this.temperature = v;
  }
  
  public getHumidity() : number {
    return this.humidity;
  }
  
  public getPressure() : number {
    return this.pressure;
  }

  public getTemperature() : number {
    return this.temperature;
  }
  
  public getObservers() : Observer[] {
    return this.observers;
  }
  
}