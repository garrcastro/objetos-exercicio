const pokemon1 ={
    nome: "Bulbasaur",
    tipo: "Grama",
    nivel: 5
};

const pokemon2 ={
    ...pokemon1,
    nome: "Squirtle",
    tipo: "Água"
}

const ataques = []
pokemon1['ataques'] = []

const ataque ={
    nome: "Investida",
    dano: 40,
    tipo: "Normal",
    precisao: 100
}
pokemon2.ataques = ataques
pokemon1.ataques.push(ataque)
pokemon2.ataques.push(ataque)
const ataque2 ={
    nome: "Folha Navalha",
    dano: 40,
    tipo: "Grama",
    precisao: 100
}
pokemon1.ataques.push(ataque2)

const ataque3 ={
    nome: "Jato de Água",
    dano: 40,
    tipo: "Água",
    precisao: 100
}
pokemon2.ataques.push(ataque3);
console.log(pokemon1)
console.log(pokemon2)