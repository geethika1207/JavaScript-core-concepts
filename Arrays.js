// Arrays: creation and basic operations
const fruits = ['orange', 'mango', 'banana'];

fruits.push('strawberry');      // add at end
fruits.unshift('blueberry');   // add at start
fruits[2] = 'apple';           // update by index

console.log('Fruits:', fruits);
console.log('Index of apple:', fruits.indexOf('apple'));

// forEach
fruits.forEach((fruit, index) => {
  console.log(`Fruit ${index}: ${fruit}`);
});

// map
const upperFruits = fruits.map(fruit => fruit.toUpperCase());
console.log('Uppercase fruits:', upperFruits);

// filter
const longNamedFruits = fruits.filter(fruit => fruit.length > 5);
console.log('Fruits with long names:', longNamedFruits);

// find
const firstWithA = fruits.find(fruit => fruit.includes('a'));
console.log('First fruit containing "a":', firstWithA);
