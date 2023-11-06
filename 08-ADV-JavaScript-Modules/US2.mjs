import {hexToRgb, rgbFunctionToHex} from "./JavaScript-Modules.mjs";

class US2 {
    constructor(color) {
        this.color = color;
    }

    // Method to return color as hex value
    getHex() {
        if (this.color.startsWith('#')) {
            return this.color;
        } else {
            return rgbFunctionToHex(this.color);
        }
    }

    // Method to return color as rgb() with number values
    getRgb() {
        if (this.color.startsWith('#')) {
            return hexToRgb(this.color, false);
        } else {
            return `rgb(${this.color})`;
        }
    }

    // Method to return color as rgb() with percentage values
    getRgbPercentage() {
        if (this.color.startsWith('#')) {
            return hexToRgb(this.color, true);
        } else {
            const [r, g, b] = this.color.match(/\d+/g).map(Number);
            console.log(r, g, b);
            return `rgb(${(r / 255) * 100}%, ${(g / 255) * 100}%, ${(b / 255) * 100}%)`;
        }
    }
}
export default US2;

let color = new US2("#b93c3c");
console.log(color.getHex())
console.log(color.getRgb())
console.log(color.getRgbPercentage())