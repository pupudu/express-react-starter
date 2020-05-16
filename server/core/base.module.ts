const PRIVATE_CONSTRUCTOR_TOKEN = Symbol('DANGEROUSLY USE CONSTRUCTOR');

export class BaseModule {
  private static instance: any;
  public __SINGLETON__ = false;

  public constructor(privateConstructorToken: typeof PRIVATE_CONSTRUCTOR_TOKEN) {
    void privateConstructorToken;
  }

  protected static async willInit(): Promise<any> {
    //
  }

  protected async didInit() {
    //
  }

  static getInstance() {
    if (!this.instance || this.instance.__SINGLETON__ !== true) {
      this.instance = new this(PRIVATE_CONSTRUCTOR_TOKEN);
    }
    return this.instance;
  }

  public static async init<T extends typeof BaseModule>(this: T): Promise<InstanceType<T>> {
    await this.willInit();
    if (this.instance) {
      this.getInstance();
      return this.instance;
    }
    const instance = this.getInstance();

    for (const key of Object.keys(instance)) {
      if (instance[key].__IS_DEPENDENCY__) {
        instance[key] = await instance[key].promise;
      }
    }

    await instance.didInit();
    return instance;
  }
}

export function inject<T extends typeof BaseModule>(ClassName: T): InstanceType<T> {
  // @ts-ignore
  return { promise: ClassName.init(), __IS_DEPENDENCY__: true };
}
