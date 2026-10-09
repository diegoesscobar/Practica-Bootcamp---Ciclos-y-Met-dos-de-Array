// Ejercicio 5: Transformar elementos con map()
console.log("--- Precios con 10% de descuento ---");

const preciosOriginales = [100, 200, 300, 400];

// Completá el cálculo dentro de la función de map:
const preciosConDescuento = preciosOriginales.map((precio) => {
  return precio * 0.90;
});

console.log(`Precios Originales sin descuento: $${preciosOriginales}`)
console.log(` $${preciosConDescuento}`);