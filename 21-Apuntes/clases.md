### clases

las clases con constructures que primero se declara las propiedades con sus tipos, seguido del constructor con sus parametros que deberia ser igual a los declarados anteriormente.

despues viene la declaracion de las propiedades con this. que hace referencia a a propiedad de la clase

mas abajo se pueden declara los metodos

## usar

se coloca la variable se iguala a el new constructor y se pasa como parametro los valores de las propiedades declaradas en la clase

### control de acceso

PUBLIC -. todos son publicos si no tiene private o protected

PRIVATE-. se puede utilizar solo en la clase padre y no en los demas

protected -. se extiende solo a su herencia mas no a mas

```
//clases sirven para organizar codigo, no deha de ser objeto

class Employee {
   // Atributos -. variables o proiedades de la clase se puede ocntrolar dentro o

   id?: number;
   name?: string;
   dept?: string;

   constructor(id: number, name: string, dept: string) {
      this.id = id,
         this.name = name,
         this.dept = dept,
         this.showInfo();
   }

   // metodos -. son acciones que podemso llevar a cabo dentro de la clase o frura dependera de la visibilidad que le demos.

   showInfo(): void {
      console.log(this.name)
   }
}
//unainstancia de la clase employe
const employeOne = new Employee(2, 'dvd', 'sales')

console.log(employeOne)
```

### readonñy

es de solo lectura, despues de que se inicializa
