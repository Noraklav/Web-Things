const arraycito = [1,2,3,4,5,9,7,564,645,489,56,456,5,456,]

const main = document.getElementById('main')

console.log(arraycito)

// for(let x=0; x<=arraycito.length; x++){
//   console.log(`${arraycito[x]}: ${x}`)
// }

arraycito.forEach((e, index) =>{
  console.log(`${e}: ${index}`)
})

let arraycitoCubo = arraycito.map(e => console.log(e**3))

const objArray = [
    {name: 'Agustin',age: 22},
    {name: 'Matias',age: 43},
    {name: 'Cesar',age: 52},
    {name: 'Julieta', age: 115}

  ]

const exDOM = obj =>{
  let div = document.createElement('div')
  div.innerHTML = `
      <h2 class="h2-style">Nombre: ${obj.name}</h2>
      <p class="p-style">Edad: ${obj.age}</p>
    `
  return div
}

objArray.forEach(e =>{
  main.appendChild(exDOM(e))
})