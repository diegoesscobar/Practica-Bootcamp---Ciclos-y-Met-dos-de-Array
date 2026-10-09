// Ejercicio 2.1: Filtrar elementos con filter()
console.log("--- Precios en oferta ---");

const precios = [100, 800, 250, 1200, 400, 600];

// Completá la función flecha dentro de filter:
const ofertas = precios.filter((precio) => {
    return precio <= 500;

});

console.log(ofertas);