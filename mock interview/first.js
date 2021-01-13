//1)question
//use inheritent to get those values by implementing this methods

const a = function (x) {
  this.x = x;
};

const b = function (x, y) {
  this.x = x;
  this.y = y;
};

// const newB = new b("x", "y");
// newB.getX(); use inheritence or somethig to get me those values
// newB.getX();

//1) question ends

//answer starts
b.prototype = Object.create(a.prototype);

b.prototype.getY = function () {
  return this.y;
};

b.prototype.getX = function () {
  return this.x;
};

const newB = new b("x", "y");
console.log(newB.getY()); //answers
console.log(newB.getX());

//2) question starts
const obj = {
  a: {
    b: {
      c: 1,
    },
  },
};

//const clone=
//clone a.b.c=2;
//if i console.log(obj.a.b.c) it should give me 1 not 2

//2) question ends

//2) answer starts
const clone = JSON.parse(JSON.stringify(obj));
clone.a.b.c = 2;
console.log(clone, obj);

//3) question starts
const arr1 = [1, 54, 2, 3, 4, 5];
const arr2 = [2, 1, 4, 0, 22, 45];
//merge this in a sorted manner
//3) question ends

// //2) answer starts
const result = [
  ...arr1.sort((a, b) => a - b),
  ...arr2.sort((a, b) => a - b),
].sort((a, b) => a - b);
console.log(result);

//4)question starts
const obj = {
  x: 1,
  getX() {
    const inner = function () {
      console.log(this.x);
    };
    inner();
  },
};
// obj.getX(); //here what obj.getX refer to? What the answer we get ?

//answer for this would be undefined,because 'this' refers to window

//The solution is to use arrow function,instead of normal function

const obj = {
  x: 1,
  getX() {
    const inner = () => {
      console.log(this.x);
    };
    inner();
  },
};
obj.getX();

//another solution is, because of lexical scoping
const obj = {
  x: 1,
  getX() {
    const that = this;
    const inner = function () {
      console.log(that.x);
    };
    inner();
  },
};
obj.getX();

//another solution is to call method,
const obj = {
  x: 1,
  getX() {
    const inner = function () {
      console.log("result is", this.x);
    };
    inner.call(this);
  },
};

obj.getX();
