
//los tipos (Type) no se pueden exterder y tampoco nombrar varios con el mismo nombre

type Empleados = {
   nombre: string;
   apellido: string;
   nombreCompleto(): string
}

// Los tipos pueden utilizar uniones (|) e intersecciones (&) para crear tipos más complejos.

type Flores = {
   tipo: string;
   nombre: string;
};

type Tipos = {
   aroma: string;
}

type Plantas = Flores & Tipos;

const flores: Plantas = {
   tipo: 'nose',
   nombre: 'rosa',
   aroma: 'lavanda'
}

console.log(flores)

//Declaración de tipos condicionales: Los tipos pueden utilizar condicionales para calcular tipos basados en condiciones.

type esNumero<T> = T extends string ? boolean : number;
let a: esNumero<number>;

type ApiResponse<T> = T extends 'user' ? { name: string; age: number } : T extends 'product' ? { productName: string; price: number } : never;

// Ejemplo de uso
let userData: ApiResponse<'user'> = { name: 'John', age: 30 };
let productData: ApiResponse<'product'> = { productName: 'Laptop', price: 1200 };