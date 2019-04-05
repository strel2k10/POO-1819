class Car {
    constructor(brand,plate,color,deposit, fuelType){
        this.brand = brand
        this.plate = plate
        this.color = color
        this.deposit = deposit
        this.fuelType = fuelType
    }
    refreshColor(color){
        this.color = color
    }

    reFuel(deposit){
        this.deposit += deposit
    }

    currentFuel(distance){
    const temp = distance * 5 / 100        
    
    if (temp > this.deposit) {
        alert("You cannot drive for that destination!")
    }
        else{
            this.deposit = this.deposit - (distance * 5) / 100
            alert("Good trip!")
        }
    }
    }
    

const refreshColor = new Car()

const car1 = new Car('Ford', '91-GH-15', 'verde', 40, 'Gasóleo')
const car2 = new Car('Opel', '23-AB-23', 'branco', 50, 'Gasolina')
const car3 = new Car('Nissan', '12-CX-45', 'preto', 22, 'Gasóleo')
const cars = []
cars.push(car1, car2, car3)
getCarsNumberByBrand();
function getCarsNumberByBrand(brand) {
    let count = 0
    for (const car of cars){
        if(car.brand === brand){
            count++
        }
    }
    return count    
}

function calcSumDepositByFuelType(fuelType) {
    let sum = 0
    for (const car of cars) {
        if(car.fuelType === fuelType){
            sum += car.deposit
        }
    }
    return sum
}

console.log(car1)

car1.refreshColor(prompt("Insira uma cor"));
car1.reFuel(+prompt("Número de litros a reabastecer"));
car1.currentFuel(distance = (+prompt("Quantos KM percorreu?")))
console.log(car1)