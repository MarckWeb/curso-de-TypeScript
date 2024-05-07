interface Vehiculo {
   marca: string;
   modelo: string;
   anio: number;
   info: () => string;
}

const miCoche: Vehiculo = {
   marca: 'Toyota',
   modelo: 'Corolla',
   anio: 2020,
   info: () => "Es un Toyota Corolla del año 2020."
}

console.assert(miCoche.marca === "Toyota");
console.assert(miCoche.modelo === "Corolla");
console.assert(miCoche.anio === 2020);
console.assert(miCoche.info() === "Es un Toyota Corolla del año 2020.");

//////////////////////////////////////

class Computer {
   brand: string;
   cpu: string;
   ram: number;

   constructor(brand: string, cpu: string, ram: number) {
      this.brand = brand;
      this.cpu = cpu;
      this.ram = ram;
   }

   getBrand() {
      return this.brand;
   }

   setBrand(brand: string) {
      this.brand = brand;
   }

   getCpu() {
      return this.cpu;
   }

   setCpu(cpu: string) {
      this.cpu = cpu;
   }

   getRam() {
      return this.ram;
   }

   setRam(ram: number) {
      this.ram = ram;
   }


}

class Laptop extends Computer {
   batteryLife: number;
   weight: number;

   constructor(brand: string, cpu: string, ram: number, batteryLife: number, weight: number) {
      super(brand, cpu, ram);
      this.batteryLife = batteryLife;
      this.weight = weight;
   }

   getBatteryLife() {
      return this.batteryLife;
   }

   setBatteryLife(batteryLife: number) {
      this.batteryLife = batteryLife;
   }

   getWeight() {
      return this.weight;
   }

   setWeight(weight: number) {
      this.weight = weight;
   }
}

const computadora = new Computer("Dell", "i7", 16);
console.log(computadora.getBrand());  // Debe imprimir "Dell"

const laptop = new Laptop("Apple", "M1", 8, 20, 1.5);
console.log(laptop.getBatteryLife());  // Debe imprimir 20