###inteface
se refieran a declaran variables con sus tipos las cuales se utilizaran ya sea en objetos o array, el cual un interface se puede extender sus datos a otro interface.

```
//interface extends
interface Person {
   id: number;
   name: string
}

interface Employes extends Person {
   dept: string;
}

interface Customer extends Person {
   country: string;
}

const customer: Customer = {
   country: 'city',
   id: 1,
   name: 'vs'
}
```
