// Ejercicio 6: Buscar un elemento con find()
console.log("--- Buscando usuario por ID ---");

const usuarios = [
    {id: 1, nombre: "Poison"},
    {id: 2, nombre: "Lijiki"},
    {id: 3, nombre: "Fuglex"},
    {id: 4, nombre: "Queque"},
    {id: 5, nombre: "Nicañoqui"},
];

// Completá la condición dentro de find:
const usuarioEncontrado = usuarios.find((usuario) => {
    return usuario.id === 3
    
});

console.log(usuarioEncontrado);