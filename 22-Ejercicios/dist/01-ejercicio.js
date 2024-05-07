"use strict";
const miCoche = {
    marca: 'Toyota',
    modelo: 'Corolla',
    anio: 2020,
    info: () => "Es un Toyota Corolla del año 2020."
};
console.assert(miCoche.marca === "Toyota");
console.assert(miCoche.modelo === "Corolla");
console.assert(miCoche.anio === 2020);
console.assert(miCoche.info() === "Es un Toyota Corolla del año 2020.");
//////////////////////////////////////
class Computer {
    constructor(brand, cpu, ram) {
        this.brand = brand;
        this.cpu = cpu;
        this.ram = ram;
    }
    getBrand() {
        return this.brand;
    }
    setBrand(brand) {
        this.brand = brand;
    }
    getCpu() {
        return this.cpu;
    }
    setCpu(cpu) {
        this.cpu = cpu;
    }
    getRam() {
        return this.ram;
    }
    setRam(ram) {
        this.ram = ram;
    }
}
class Laptop extends Computer {
    constructor(brand, cpu, ram, batteryLife, weight) {
        super(brand, cpu, ram);
        this.batteryLife = batteryLife;
        this.weight = weight;
    }
    getBatteryLife() {
        return this.batteryLife;
    }
    setBatteryLife(batteryLife) {
        this.batteryLife = batteryLife;
    }
    getWeight() {
        return this.weight;
    }
    setWeight(weight) {
        this.weight = weight;
    }
}
const computadora = new Computer("Dell", "i7", 16);
console.log(computadora.getBrand()); // Debe imprimir "Dell"
const laptop = new Laptop("Apple", "M1", 8, 20, 1.5);
console.log(laptop.getBatteryLife()); // Debe imprimir 20
