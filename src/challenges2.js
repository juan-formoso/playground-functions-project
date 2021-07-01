// Desafio 10
function techList(tech, name) {
  let list = [];
  if (tech.length <= 0) {
    return 'Vazio!';
  }
  tech = tech.sort();
  for (let index in tech) {
    list.push(
      technologies = {
        tech: tech[index],
        name: name
      }
    );
  }
  return list;
}

// Desafio 11
function generatePhoneNumber(phoneNumber) {
  if (phoneNumber.length !== 11) {
    return 'Array com tamanho incorreto.'
  } 
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (lineA + lineB <= lineC || lineA + lineC <= lineB || lineB + lineC <= lineA)
        return false;
    else
        return true;
}

// Desafio 13
function hydrate(drinks) {
  let amountOfDrinks = drinks.match(/\d+/g).map(Number);
  let cupsOfWater = 0;
  for (let index = 0; index < amountOfDrinks.length; index += 1) {
    cupsOfWater += Number(amountOfDrinks[index]);
  } if (cupsOfWater === 1) {
    return cupsOfWater + ' copo de água'
  } else {
    return cupsOfWater + ' copos de água'
  }
} 

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
