class Complex {
    realPart;
    imaginaryPart;

    constructor(realPart = 0, imaginaryPart = 0) {
        if (typeof realPart == "number") {
            this.realPart = realPart;
            this.imaginaryPart = imaginaryPart;
        } else {
            this.realPart = realPart.realPart;
            this.imaginaryPart = realPart.imaginaryPart;
        }
    }

    add(realPart = 0, imaginaryPart = 0) {
        let temp = new Complex(realPart, imaginaryPart)

        this.realPart += temp.realPart;
        this.imaginaryPart += temp.imaginaryPart;

        return this.realPart + " + " + this.imaginaryPart + "i";
    }

    toString() {
        if (this.imaginaryPart < 0) {
            return this.realPart + "" + this.imaginaryPart + "i";
        } else if (this.imaginaryPart === 0) {
            return this.realPart;
        } else if (this.imaginaryPart === 1) {
            return this.realPart + "+i"
        }
        return this.realPart + "+" + this.imaginaryPart + "i";
    }
}

let first = new Complex(2, 5);
let second = new Complex(-1, 2);
let third = new Complex(-3, -4);
let fourth = new Complex(2, 1);
let fifth = new Complex(fourth)
console.log(third.toString());
console.log(fourth.toString());
console.log("(", first.toString(), ")+(", second.toString(), ")=", first.add(-1, 2).toString());
console.log(fourth.add(third))