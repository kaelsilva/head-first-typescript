import { CurrentConditionsDisplay } from "../Display/CurrentConditionsDisplay";
import { WeatherData } from "../WeatherData";


export class WeatherStation {
  public weatherData : WeatherData = new WeatherData();

  public currentDisplay: CurrentConditionsDisplay = new CurrentConditionsDisplay(this.weatherData);
  //   StatisticsDisplay statisticsDisplay = new StatisticsDisplay(weatherData);
  // ForecastDisplay forecastDisplay = new ForecastDisplay(weatherData);

  public start() : void {
    this.weatherData.setMeasurements(80, 65, 30.4);
    this.weatherData.setMeasurements(82, 70, 29.2);
    this.weatherData.setMeasurements(78, 90, 29.2);
  }
}