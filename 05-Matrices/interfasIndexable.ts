

//se puede usar interfaces que describan los tipos de matriz en los que se puede indexar.

interface ArrayTiposDeHelado {
   //se declara una interfaz un index con numero , pero que contendra string como elementos

   //[index: number]: Indica que puedes acceder al objeto usando claves numéricas.
   //string: Indica que el valor asociado a cada clave numérica debe ser de tipo string.
   [index: number]: string;
}

let miHelado: ArrayTiposDeHelado;
miHelado = ['chocolate', 'vainilla', 'extraberry']

let miElemento: string = miHelado[0];
console.log(miElemento)

for (let indice in miHelado) {
   console.log(miHelado[indice])
}