export abstract class Serializable {
  public abstract serialize(data: any): any;

  protected transform(): this {
    return this;
  }
}
