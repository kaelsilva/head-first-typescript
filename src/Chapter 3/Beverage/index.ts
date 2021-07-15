export default abstract class Beverage {
  private description: String;

  constructor() {
    this.description = '';
  }
  
  public getDescription(): String {
    return this.description;
  }

  public setDescription(description: String): void {
    this.description = description;
  }
  
  public abstract cost(): number;
}