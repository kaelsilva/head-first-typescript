import { Observer } from "../../Observer/Observer";
import { WeatherData } from "../../WeatherData";
import { DisplayElement } from "../DisplayElement";

export class CurrentConditionsDisplay implements Observer, DisplayElement {
  private temperature: Number = 0;
  private humidity: Number = 0;
  private pressure: Number = 0;
  private weatherData: WeatherData;

  constructor(weatherData: WeatherData) {
    this.weatherData = weatherData;
    weatherData.registerObserver(this);
  }

  public update(temperature: Number, humidity: Number, pressure: Number): void {
    this.setHumidity(humidity);
    this.setPressure(pressure);
    this.setTemperature(temperature);
    this.display();
  }

  public display() {
    console.log(`Current conditions: ${this.getTemperature()} F degrees, ${this.getPressure()} kPa 
      and  ${this.getHumidity()} % humidity`);
  }
  
  public setWeatherData(v : WeatherData) {
    this.weatherData = v;
  }

  public setTemperature(v : Number) {
    this.temperature = v;
  }
  
  public setHumidity(v : Number) {
    this.humidity = v;
  }
  
  public setPressure(v : Number) {
    this.pressure = v;
  }
  
  public getTemperature() : Number {
    return this.temperature;
  }
  
  public getHumidity() : Number {
    return this.humidity;
  }
  
  public getPressure() : Number {
    return  this.pressure;
  }
  
  public getWeatherData() : WeatherData {
    return this.weatherData;
  } 
}