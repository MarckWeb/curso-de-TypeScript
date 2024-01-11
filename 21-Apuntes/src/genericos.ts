//generics

interface Persona {
   id: number;
   name: string;
}

interface Producto {
   id: number;
   name: string;
   price: number;
}


interface Empleado extends Persona {
   role: string
}

//type dataType = Persona | Producto

//<T> = es por convencion se podria usar R o Otro
//quiere decir que reemplazaria a tipe unions el cual al crear la nueva clase le diremos el tipo de interface a utilizar 



interface Data<T> {
   addItem(newItem: T): void;
}
//al implementar data en la clase pedira que se coloque el metodo addItems

class DataCollection<T extends { id: number, name: string }> implements Data<T>  {
   private items: T[] = [];

   addItem(newItem: T): void {
      this.items.push(newItem);
   }
   getItems(): void {
      console.log(`lista de items`, JSON.stringify(this.items))
   }

   getNames(): string[] {
      return this.items.map((item) => item.name)
   }

   getItemById(id: number): T | undefined {
      return this.items.find((item: T) => item.id === id)
   }
}

// const personColection = new DataCollection();
// const newData = {
//    id: 1,
//    name: 'dvd'
// }
// personColection.addItem(newData);


const productCollections = new DataCollection<Producto>();

const newData2 = {
   id: 2,
   name: 'beer',
   price: 20
}
productCollections.addItem(newData2);
productCollections.getItems()

//////////////////////empleado//////////////////////
const employeeCollections = new DataCollection<Empleado>();

const newEmployee = {
   id: 2,
   name: 'david',
   role: 'CEO'
}

employeeCollections.addItem(newEmployee);
employeeCollections.getItems()