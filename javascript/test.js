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
/* class Square {
  constructor(public width: number) {}
}

class Rectangle extends Square {
  constructor(public width: number, public height: number) {
    super(width);
  }
}

let square = new Rectangle(10, 10);
 */
/*
// - Structural typing

interface Vector2D {
  x: number;
  y: number;
}

function calculateLength(v: Vector2D) {
  return Math.sqrt(v.x * v.x + v.y * v.y);
}

interface NamedVector {
  name: string;
  x: number;
  y: number;
}

const v: NamedVector = { x: 3, y: 4, name: 'Zee' };

console.log(calculateLength(v));

interface Vector3D {
  x: number;
  y: number;
  z: number;
}
// Types are alwasys open in TypeScript
function normalize(v: Vector3D) {
  let length = calculateLength(v);
  return {
    x: v.x / length,
    y: v.y / length,
    z: v.z / length
  };
}

console.log(normalize({ x: 3, y: 4, z: 5 }));

// Since 'v' can have more properties than Vector3D,
// we can't guarantee that 'v' has 3 properties: x, y, z
function calculateLength1(v: Vector3D) {
  let length = 0;
  for (const axis of Object.keys(v)) {
    const coord = v[axis];
    length += Math.abs(coord);
  }
  return length;
}

// Alternative implemtation
function calculatteLength2(v: Vector3D) {
  return Math.abs(v.x) + Math.abs(v.y) + Math.abs(v.z);
}

class C {
  foo: String;
  constructor(foo: string) {
    this.foo = foo;
  }
}

const c = new C('instance of C');
const d: C = { foo: 'object literal' };
 */
/*
// - Any type pasks bugs and stops Typescript language
// - service from helping you. (no autocomplete for type any),
// - (no rename for type any)

// it lets you do things that are not type safe
let age: number;
age = '12';
age = '12' as any;
age += 1;
console.log(age);

// it breaks contracts
function calcuateAge(birthDate: Date): number { return 0; }
let birthDate: any = '1990-01-01'
calcuateAge(birthDate);

// version that masks bugs (using any) of ComponentProps
// interface ComponentProps {
//   onSelectItem: (item: any) => void;
// }

// reworked version of ComponentProps
interface ComponentProps {
  onSelectItem: (item: number) => void;
}
function renderSelector(props: ComponentProps) { }
let selectedId: number = 0;
function handleSelectedItem(item: any) {
  selectedId = item.id;
}
renderSelector({ onSelectItem: handleSelectedItem});
 */
