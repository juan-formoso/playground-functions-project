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
function generatePhoneNumber(digit) {
  let phoneNumber = "";
  for (let index = 0; index < digit.length; index += 1) {
    if (digit.length !== 11) {
      return 'Array com tamanho incorreto.'
    } else if (digit[index] < 0 || digit[index] > 9) {
      return 'não é possível gerar um número de telefone com esses valores'
    }
    let number = 0
    for (let index2 = 0; index2 < digit.length; index2 += 1) {
      if (digit[index2] === digit[index]) {
        number += 1;
      }
    } if (number > 2) {
      return 'não é possível gerar um número de telefone com esses valores'
    }
  } if (digit.length === 11) {
    return (phoneNumber = phoneNumber + "(" + digit[0] + digit[1] + ")" + ' ' + digit[2] + digit[3] + digit[4] + digit[5] + digit[6] + '-' + digit[7] + digit[8] + digit[9] + digit[10]);
  } else {
    return ('Array com tamanho incorreto.');
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
// Referẽncia usada como BASE para desenvolvimento do código abaixo: https://codereview.stackexchange.com/questions/115885/extract-numbers-from-a-string-javascript
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
