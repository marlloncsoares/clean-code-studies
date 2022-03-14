class DtaRcrd102 {
  constructor() {
    this.gentymdhms = Date.now();;
    this.modymdhms = Date.now();;
    this.pszqint = "102";
  }
  /** ... */
}


class Customer {
  constructor() {
    this.generationTimestamp = Date.now();
    this.modificationTimestamp = Date.now();
    this.recordId = "102";
  }
  /** ... */
}

console.log(new Customer())