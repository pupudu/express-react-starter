export class BaseModule {
  private static instance: any;

  protected constructor(__arg: 'DANGEROUSLY USE CONSTRUCTOR') {
    // Not constructable directly
  }

  // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
  // @ts-ignore
  protected static getInstance<T extends typeof BaseModule>(this: T): InstanceType<T> {
    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore
    return new this('DANGEROUSLY USE CONSTRUCTOR') as InstanceType<T>;
  }

  // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
  // @ts-ignore
  protected static getSingleton<T extends typeof BaseObject>(this: T): InstanceType<T> {
    if (this.instance) {
      return this.instance;
    }
    this.instance = new this('DANGEROUSLY USE CONSTRUCTOR');
    return this.instance;
  }

  protected static async willInit() {
    //
  }

  protected async didInit() {
    //
  }

  // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
  // @ts-ignore
  public static async init<T extends typeof BaseModule>(this: T): Promise<InstanceType<T>> {
    this.willInit();
    const instance = this.getInstance();
    await instance.didInit();
    return instance;
  }
}
