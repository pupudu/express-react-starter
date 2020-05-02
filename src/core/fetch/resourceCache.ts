const cacheMap = new Map();

type Entry<T> = {
  value: T;
  err: Error;
  promise: Promise<void>;
};

/**
 * This class uses the Visitor design pattern to let the useResource hook access its corresponding cache entry
 * without having to directly access the cache map.
 *
 * This encapsulates the implementation details of the cache map from useResource, so that the life-cycle
 * of the cache entry is seen intuitive in the hook.
 *
 * This also enables us to replace the simple Map with a sophisticated cache in future if ever needed. (eg: an LRU)
 */
class CacheVisitor<T = any> {
  private readonly key: string;

  constructor(key: string) {
    this.key = key;
  }

  get(): Entry<T> {
    return cacheMap.get(this.key) ?? {};
  }

  /**
   * Update the cache entry with an error, promise or a value.
   * The key in the entry is derived by the argument type
   *
   * Also note that the entry is cleared when the argument is a value (rather than an error or a promise)
   */
  put(item: Promise<void> | Error | T) {
    const type = item instanceof Error ? 'err' : item instanceof Promise ? 'promise' : 'value';
    cacheMap.set(this.key, {
      ...(type !== 'value' ? this.get() : {}),
      [type]: item,
    });
  }

  clear() {
    cacheMap.set(this.key, {});
  }

  readValue(): Entry<T> {
    const entry = this.get();

    if (entry.err) {
      throw entry.err;
    }

    return entry;
  }
}

export function getCacheVisitor<T>(configKey) {
  return new CacheVisitor<T>(configKey);
}
