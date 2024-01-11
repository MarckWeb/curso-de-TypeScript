"use strict";
//generics
//al implementar data en la clase pedira que se coloque el metodo addItems
class DataCollection {
    constructor() {
        this.items = [];
    }
    addItem(newItem) {
        this.items.push(newItem);
    }
    getItems() {
        console.log(`lista de items`, JSON.stringify(this.items));
    }
    getNames() {
        return this.items.map((item) => item.name);
    }
    getItemById(id) {
        return this.items.find((item) => item.id === id);
    }
}
// const personColection = new DataCollection();
// const newData = {
//    id: 1,
//    name: 'dvd'
// }
// personColection.addItem(newData);
const productCollections = new DataCollection();
const newData2 = {
    id: 2,
    name: 'beer',
    price: 20
};
productCollections.addItem(newData2);
productCollections.getItems();
//////////////////////empleado//////////////////////
const employeeCollections = new DataCollection();
const newEmployee = {
    id: 2,
    name: 'david',
    role: 'CEO'
};
employeeCollections.addItem(newEmployee);
employeeCollections.getItems();
