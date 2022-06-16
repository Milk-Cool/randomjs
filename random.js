class Random {
  constructor(seed = 0){
    this.seed = seed;
    this.s = {
      "br": () => this.builtinRandom,
      "dr": () => this.defaultRandom,
      "sr": () => this.seedRandom,
      "tr": () => this.timedRandom,
      "ri": (a, b) => this.randomInt(a, b),
      "rf": (a, b) => this.randomFloat(a, b),
      "rc": (...a) => this.randomChoice(...a),
      "re": a => this.randomElement(a)
    };
  }
  get builtinRandom(){
    return Math.random();
  }  
  get defaultRandom(){
    return this.seed ? this.seedRandom : this.builtinRandom;
  }
  randomFloat(min, max){
    if(!max){
      max = min;
      min = 0;
    }
    return min + this.defaultRandom * (max - min);
  }
  randomInt(min, max){
    return Math.floor(this.randomFloat(min, max));
  }
  get timedRandom(){
    let out = 0;
    while(new Date() - new Date() == 0)
      out++;
    return out;
  }
  get seedRandom(){
    this.seed *= 16807;
    this.seed %= 2147483647;
    return this.seed / 2147483647;
  }
  randomChoice(...arr){
    return arr[this.randomInt(arr.length)];
  }
  randomElement(arr){
    return this.randomChoice(...arr);
  }
}
// Uncomment the line below for NodeJS usage
// module.exports = Random;
