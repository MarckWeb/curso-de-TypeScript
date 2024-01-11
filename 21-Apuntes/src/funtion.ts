
// function greet(name: string) {
//    console.log(`hola ${name}`)
// }

// greet('david')

const resultado = (): number => {
   return Math.floor(Math.random() * 100);
}

console.log(resultado())


const position = (position: { lat: number, long: number }): void => {
   console.log(position.lat, position.long)
}

position({ lat: 10, long: 20 })

const position1 = (position: { lat: number; long: number | string } = { lat: 20, long: 'hola' }): void => {
   console.log(position.lat, position.long)
}

position1({ lat: 10, long: 20 })