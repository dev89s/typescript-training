/*
const states = [
  { name: 'Alabama', capital: 'Montgomery' },
  { name: 'Alaska', capital: 'Juneau' },
  { name: 'Arizona', capital: 'Phoenix' },
  // ...
];

for  (const state of states) {
  // console.log(state.capitol);
  console.log(state.capital);
}
 */
/*
function add(a: number, b: number) {
  return a + b;
}

console.log(add(2, 3));

// const x: number = null;
const x: number | null = null; // - strictNullChecks: true
 */
class Square {
    constructor(width) {
        this.width = width;
    }
}
class Rectangle extends Square {
    constructor(width, height) {
        super(width);
        this.width = width;
        this.height = height;
    }
}
let square = new Rectangle(10, 10);
