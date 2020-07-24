class Car {
    constructor(brand) {
        this.carname = brand;
    }
    present() {
        return "I have a " + this.carname;
    }
}

mycar = new Car("Ford");
mycar2 = new Car("Mazda");
document.getElementById("demo").innerHTML = mycar.present();
document.getElementById("demo2").innerHTML = mycar2.present();