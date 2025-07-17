// maps in JS

// declaring a MAP

let mp = new Map();

mp.set(1, 'numeric Key');
mp.set('1', 'String Key');
mp.set(true, 'boolean Key');

//in objects the key is converted to string but here it remains same type as declared

console.log(mp.get(1));
console.log(mp.get('1'));
console.log(mp.size);

let john = {
    name: "john",
}

// object can be used as key in map
console.log(mp.set(john, 123)); // .set() returns the map
console.log(mp.get(john));// 123

// .keys() to iterate keys
let recipeMap = new Map([
    ['cucumber', 500],
    ['tomatoes', 350],
    ['onion',    50]
  ]);
  
  // iterate over keys (vegetables)
  for (let vegetable of recipeMap.keys()) {
    console.log(vegetable); // cucumber, tomatoes, onion
  }

  //.values to iterate on values

    for (let weight of recipeMap.values()) {
        console.log(weight); // 500, 350, 50
    }


    for (let mapping of recipeMap) {
        console.log(mapping); // [cucumber, 500], [tomatoes, 350], [onion, 50]
    }


let map = new Map([
    [1, 'num'],
    ['1', 'string'],
    [true, 'bool'],
]);

console.log(map);