import { WeatherData } from ".";
import { CurrentConditionsDisplay } from "../Display/CurrentConditionsDisplay";

const weatherData : WeatherData = new WeatherData();
const currentDisplay : CurrentConditionsDisplay = new CurrentConditionsDisplay(weatherData);

describe('Test getters and setters methods.', () => {
  test('Must set temperature to 70.', () => {
    expect(weatherData.setTemperature(70)).toBe(undefined);
  });
  
  test('Must set pressure to 40.', () => {
    expect(weatherData.setPressure(40)).toBe(undefined);
  });

  test('Must set humidity to 90.', () => {
    expect(weatherData.setHumidity(90)).toBe(undefined);
  });

  test('Must return temperature 0.', () => {
    expect(weatherData.getTemperature()).toBe(70);
  });
  
  test('Must return pressure 0.', () => {
    expect(weatherData.getPressure()).toBe(40);
  });
  
  test('Must return humidity 0.', () => {
    expect(weatherData.getHumidity()).toBe(90);
  });

  test('Must set measurements and update values from object.', () => {
    expect(weatherData.setMeasurements(1, 2, 3)).toBe(undefined);
    expect(weatherData.getTemperature()).toBe(1);
    expect(weatherData.getHumidity()).toBe(2);
    expect(weatherData.getPressure()).toBe(3);
  });
});

describe('Observer pattern test suite.', () => {  
  test('Must be an observer of weatherData subject.', () => {
    expect(currentDisplay.getWeatherData()).toBe(weatherData);
  });

  test('Must notify observers.', () => {
    expect(weatherData.notifyObservers()).toBe(undefined);
  });

  test('Must be able to register a new observer.', () => {
    let newDisplay : CurrentConditionsDisplay = new CurrentConditionsDisplay(weatherData);
    expect(weatherData.registerObserver(newDisplay)).toBe(undefined);
  });

  test('Must be able to remove an registered observer.', () => {
    let newDisplay : CurrentConditionsDisplay = new CurrentConditionsDisplay(weatherData);
    expect(weatherData.removeObserver(newDisplay)).toBe(undefined);
    expect(weatherData.getObservers().indexOf(newDisplay)).toBe(-1);
  });

  test('Must return a list of observers displays.', () => {
    expect(weatherData.getObservers()).toBeInstanceOf(Array);
  });

  test('Must notify observers when measurements change.', () => {
    expect(weatherData.measurementsChanged()).toBe(undefined);
  });
});