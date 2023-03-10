interface Human {
    name: string;
    age: number;
}

const obj: Human[] = [
    {
        name: "Andrew",
        age: 15
    }, {
        name: "Kate",
        age: 111
    }
];

function getArray<T extends Human>(arrObj: T[]): any[] {
    return arrObj.map((element) => element.name);
}

console.log("----------------------------Task - 1----------------------------");
console.log(getArray<Human>(obj));


enum Size {
    Small,
    Medium,
    Large
}

class SizeModel {
    width: number;
    height: number;
    color: string;

    constructor(width: number, height: number, color: string) {
        this.width = width;
        this.height = height;
        this.color = color;
    }
}

function getObjectBySize(arg: Size): {} {
    if (arg === Size.Small) {
        return new SizeModel(5, 4, "Green");
    }

    if (arg === Size.Medium) {
        return new SizeModel(1, 3, "Blue");
    }

    return new SizeModel(10, 5, "Red");
}

console.log("----------------------------Task - 2----------------------------");
console.log(getObjectBySize(Size.Small));


class Vechile {
    private make: string;
    readonly model: string;
    protected year: number;

    constructor(make: string, model: string, year: number) {
        this.make = make;
        this.model = model;
        this.year = year
    }

    start() {
        console.log("Vechile: start - ", this.getMake(), ", ", this.getModel(), ", ", this.getYear());
    }

    getMake(): string {
        return this.make;
    }

    getModel(): string {
        return this.model;
    }

    getYear(): number {
        return this.year;
    }
}

class Car extends Vechile {
    private color: string;

    constructor(make: string, model: string, year: number, color: string) {
        super(make, model, year);
        this.color = color;
    }

    drive() {
        console.log("Car: drive - ", this.getColor());
    }

    getColor() {
        return this.color;
    }
}

let car = new Car("General Motor", "Ford", 1982, "Red");

console.log("----------------------------Task - 3----------------------------");

car.start();
car.drive();