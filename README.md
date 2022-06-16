# randomjs
A small JavaScript library with a few kinds of random.

## Installation
For use in **web**, paste this in your `<head>` element:
```html
<script src="https://raw.githubusercontent.com/Milk-Cool/randomjs/main/random.js"></script>
```
For **NodeJS** use, download the `random.js` file and uncomment the last line.
Then, use it in any script just like this:
```js
const Random = require("./random.js"); // Or whatever you called it
```

## Usage
First, use the `Random` constructor to create your first "random"!
```js
const random = new Random();
```
Then you can do whatever you want with it.
### Random.builtinRandom
Basically an alias for `Math.random()`.
### Random.defaultRandom
If a seed is set, returns `Random.seedRandom` (see below), else returns `Random.builtinRandom`.
### Random.randomFloat(min, max) _[or]_ Random.randomFloat(max)
Returns a random number (not always an integer) in the range of *[min, max)*. If `min` is undefined, it becomes equal to `0`.
### Random.randomInt(min, max) _[or]_ Random.randomInt(max)
Does the same as `Random.randomFloat` but only returns integers.
### Random.timedRandom
Returns a truly random integer. The algorithm is based on comparing two `Date` objects - while they're equal, the counter increases. See the source code for better understanding.
### Random.seedRandom
Returns a seed-based "random" number in the range of *[0, 1]*. To define the seed, when creating th `Random` object, specify the seed as the first argument:
```js
const Random = new Random(5021); // Instead of 5021 you can use any number or number-like object.
```
### Random.randomChoice(...arr)
Chooses a random argument out of all given.
### Random.randomElement(arr)
Basically an alias for `Random.randomChoice(...)`, except it takes one argument - an array (or any other unpackable object) and then calls `Random.randomChoice(...)` with the unpacked array.

## Aliases
There are short aliases for each method, here's the list:
 - `Random.s.br()` → `Random.builtinRandom`
 - `Random.s.dr()` → `Random.defaultRandom`
 - `Random.s.sr()` → `Random.seedRandom`
 - `Random.s.tr()` → `Random.timedRandom`
 - `Random.s.ri(a, b)` → `Random.randomInt(a, b)`
 - `Random.s.rf(a, b)` → `Random.randomFloat(a, b)`
 - `Random.s.rc(...a)` → `Random.randomChoice(...a)`
 - `Random.s.re(a)` → `Random.randomElement(a)`

## Contributing
I'd love if someone contributes to my project, but PLEASE do it using a pull request. Thanks in advance!
