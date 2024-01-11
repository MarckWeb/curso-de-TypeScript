
// sive para ya asignar el tipo de variables que tenga cada objeto, array o funcion, se puede declarar siempres antes de cada proyecto
interface Book {
   id: number;
   title: string;
   autor: string;
   //pasa a ser opcional
   coAutor?: string;

}

const book: Book = {
   id: 1,
   title: 'my title',
   autor: 'dvd',
};

const books: Book[] = [{ id: 2, title: 'hola', autor: 'sno' }, { id: 3, title: 'asas', autor: 'sasas' }];

console.log(books)

function getBook(): Book {
   return {
      id: 1, title: 'title',
      autor: 'dvd'
   }
}

//interface extends
interface Persons {
   id: number;
   name: string
   getLastname?: () => void
}

interface Employes extends Persons {
   dept: string;
}

interface Customer extends Persons {
   country: string;
}

const customer: Customer = {
   country: 'city',
   id: 1,
   name: 'vs'
}

//implement -. obligar a utilizar ciertos metodos del interface se usa en clases de typescript.



