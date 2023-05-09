class PullStoreCollection {
  constructor() {
    // VERIFY IF WE ARE IN ABSTRACT CLASS
    if (this.constructor === PullStoreCollection) {
      throw new Error("Can't instantiate abstract class!");
    }
  }
}

module.exports = PullStoreCollection;
