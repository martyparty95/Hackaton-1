// easy

const existInObject = (obj, prop) => {
  const result1 = utils.existInObject({ a: 5 }, 'a');
const result2 = utils.existInObject({ a: 5 }, 'b');

console.log(result1); 
console.log(result2); 

};

const removeProp = (obj, prop) => {
  // TODO
};

// medium

const copy = (obj) => {
  // TODO
};

const typeOfProps = (obj) => {
  // TODO
};

// hard

const flat = (obj) => {
  // TODO
};

const entries = (obj) => {
  // TODO
};

export { existInObject, typeOfProps, copy, removeProp, flat, entries };
