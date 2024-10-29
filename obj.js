
const pokeMono = [
    { nome: 'Pikcachu' , idade: 18},
    { nome: 'Miau' , idade: 12},
    { nome: 'Psiduck' , idade: 20},
    { nome: 'Onix' , idade: 12},
    { nome: 'Charizard' , idade: 12}
]

console.log(pokeMono.filter((poke) => poke.nome === 'Onix'))

console.log(pokeMono.map((poke) => poke.idade >= 18 ? poke : undefined))

async / await

