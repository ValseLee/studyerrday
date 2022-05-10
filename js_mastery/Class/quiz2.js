class Employee {
  #name;
  #department;
  #monthHour;
  #wage;
  #result;

  constructor(name, department, monthHour) {
    this.#name = name;
    this.#department = department;
    this.#monthHour = monthHour;
  };
};

class Official extends Employee {
  constructor(result) {
    super(result);
  };
  wage(officialMoney) {
    this.result = officialMoney * 10000;
    return this.result;
  };
};

class PartTimer extends Employee {
  constructor(result) {
    super(result);
  };

  wage(unofficialMoney) {
    this.result = unofficialMoney * 8000;
    return this.result;
  };
};

const OFFICIAL = new Official('jamal', 'b2c', '100bilion');
console.log(OFFICIAL.wage(1000));

const PARTIMER = new PartTimer('celan', 'b2c', '100');
console.log(PARTIMER.wage(20));
