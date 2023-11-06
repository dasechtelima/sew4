// Function to convert RGB values to a hex value
export function rgbToHex(r, g, b) {
    return "#" + r.toString(16).padStart(2, "0") + g.toString(16).padStart(2, "0") + b.toString(16).padStart(2, "0");
}

// Function to convert rgb() to a hex value
export function rgbFunctionToHex(rgb) {
    const values = rgb.match(/\d+(\.\d+)?/g);
    if (values.length !== 3) {
        throw new Error("Invalid RGB format");
    }
    const [r, g, b] = values.map(val => Math.round(parseFloat(val)));
    return rgbToHex(r, g, b);
}

// Function to convert a hex value to rgb(), optional in %
export function hexToRgb(hex, isPercentage) {
    if (hex[0] === "#") {
        hex = hex.slice(1);
    }

    const intValue = parseInt(hex, 16);
    const r = (intValue >> 16) & 255;
    const g = (intValue >> 8) & 255;
    const b = intValue & 255;

    if (isPercentage) {
        return `rgb(${(r / 255) * 100}%, ${(g / 255) * 100}%, ${(b / 255) * 100}%)`;
    } else {
        return `rgb(${r}, ${g}, ${b})`;
    }
}
 export default {
    rgbToHex
 }