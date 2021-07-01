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
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
