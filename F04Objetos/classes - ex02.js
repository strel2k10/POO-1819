class Car {
    constructor(brand,plate,color,deposit, fuelType){
        this.brand = brand
        this.plate = plate
        this.color = color
        this.deposit = deposit
        this.fuelType = fuelType
    }

}

const car1 = new car('Ford', '91-GH-15', 'verde', 40, 'Gasóleo')
const car2 = new car('Opel', '23-AB-23', 'branco', 50, 'Gasolina')
const car3 = new car('Nissan', '12-CX-45', 'preto', 22, 'Gasóleo')