const createPerson = (name, age) => {
  // your code here
  return {
    name, age
  }
};

const getName = object => {
  // your code here
  return object.name;
};

const getProperty = (property, object) => {
  // your code here
  return object[property];
};

const hasProperty = (property, object) => {
  // your code here
  return object[property] !== undefined;
};

const isOver65 = person => {
  // your code here
  return person.age > 65;
};

const getAges = people => {
  // your code here
  return people.map(obj => obj.age);
};

const findByName = (name, people) => {
  // your code here
  return people.find(person => person.name === name);
};

const findHondas = cars => {
  // your code here
  return cars.filter(car => car.manufacturer === 'Honda');
};

const averageAge = people => {
  // your code here
  let total = 0;
  people.forEach(person => {
    total += person.age;
  })
  return total / people.length;
};

const createTalkingPerson = (name, age) => {
  return {
    name: name,
    age: age,
    introduce: (firendsName) => {
      return `Hi ${firendsName}, my name is ${name} and I am ${age}!`;
    }
  }
};




module.exports = {
  createPerson,
  getName,
  getProperty,
  hasProperty,
  isOver65,
  getAges,
  findByName,
  findHondas,
  averageAge,
  createTalkingPerson
};
