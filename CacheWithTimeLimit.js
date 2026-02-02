/*
Write a class that allows getting and setting key-value pairs, however a time until expiration is associated with each key.

The class has three public methods:

set(key, value, duration): accepts an integer key, an integer value, and a duration in milliseconds. 

Steps: 

for Set:

   1. Once the duration has elapsed, the key should be inaccessible
   2. The method should return true if the same un-expired key already exists and false otherwise
   3. Both the value and duration should be overwritten if the key already exists

for Get()
    
    if an un-expired key exists, it should return the associated value
    Otherwise it should return -1.

count()

    returns the count of un-expired keys.

*/

class TimeLimitedCache {
  constructor() {
    this.store = new Map();
  }

  set(key, value, duration) {
    const currentTime = Date.now();
    const existingKey = this.store.get(key);

    const unExpired =
      existingKey !== undefined && existingKey.expireDuration > currentTime;

    this.store.set(key, {
      value,
      expireDuration: currentTime + duration,
    });
    return unExpired;
  }

  get(key) {
    const now = Date.now();
    const entry = this.store.get(key);
    if (!entry) return -1;
    if (entry.expireDuration <= now) return -1;
    return entry.value;
  }

  count() {
    const now = Date.now();
    let count = 0;
    for (const entry of this.store.values()) {
      if (entry.expireDuration > now) count++;
    }
    return count;
  }
}

// 2nd way to do same // This one is automatic deletion

class TimeLimitCache {
  constructor() {
    this.store = new Map();
  }

  set(key, value, duration) {
    const hasKey = this.store.has(key);
    if (hasKey) clearTimeout(this.store.get(key).ref);
    this.store.set(key, {
      value,
      ref: setTimeout(() => this.store.delete(key), duration),
    });
  }
  get(key) {
    return this.store.has(key) ? this.store.get(key).value : -1;
  }
  count() {
    return this.store.size;
  }
}

const callTimeOut = new TimeLimitCache();

console.log(callTimeOut.set(1, 42, 100));
console.log(callTimeOut.get(1));
console.log(callTimeOut.count());
