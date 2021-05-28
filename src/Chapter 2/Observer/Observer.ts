export interface Observer {
  update(temp: Number, humidity: Number, pressure: Number): void;
}