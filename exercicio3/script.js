const pokemon1 = {
  nome: "Bulbasaur",
  tipo: "Grama",
  nivel: 5,
};

pokemon1.ataques = [];

const ataque = {
  nome: "Investida",
  dano: 40,
  tipo: "Normal",
  precisao: 100,
};

pokemon1.ataques.push({
  FolhaNavalha: 45,
  precisao: 100,
  tipo: "Grama",
});

console.log("Lista Original", pokemon1);

const pokemon1Copia = {
  ...pokemon1,
  nome: "Squirtle",
  tipo: "Água",
};

pokemon1Copia.ataques = [];

pokemon1Copia.ataques.push({
  jatoDeAgua: 40,
  precisao: 100,
  tipo: "Água",
});

const adiconando = pokemon1.ataques.push(ataque);
console.log(adiconando);

console.log("Cópia da lista", pokemon1Copia);
