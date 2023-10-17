//User Story 1
function isEan(artNum) {
    let regex = /^(\d{8}|\d{13})$/;
    if (!regex.test(artNum)) {
        return false;
    }

    let weights = [1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3];
    if (artNum.length % 2 === 0) {
        weights = weights.reverse();
    }
    const digits = artNum.split('').map(Number);

    let sum = 0;
    for (let i = 0; i < digits.length-1; i++) {
        sum += digits[i] * weights[i];
    }

    const checksum = (10 - (sum % 10)) % 10;
    console.log(checksum);
    return digits[digits.length-1] === checksum;
}

console.log("EAN Number:", isEan("1234567890128")); // true
console.log("EAN Number:", isEan("1234567890127")); // false
console.log("EAN Number:", isEan("9783140626361")); // true
console.log("EAN Number:", isEan("12345678")); // false
console.log("EAN Number:", isEan("12345670")); // true

//User Story 2
function strength(password) {
    const length = password.length;

    let score = 0;

    const commonPasswords = [
        "123456",
        "123456789",
        "12345",
        "qwerty",
        "password",
        "12345678",
        "111111",
        "123123",
        "1234567890",
        "1234567",
        "qwerty123",
        "000000",
        "1q2w3e",
        "aa12345678",
        "abc123",
        "password1",
        "1234",
        "qwertyuiop",
        "123321",
        "password123"
    ];

    if (commonPasswords.includes(password)) {
        return 0;
    }

    const categoryRegexes = [
        /[a-z]/,     // Lowercase letters
        /[A-Z]/,     // Uppercase letters
        /[0-9]/,     // Digits
        /[^a-zA-Z0-9]/  // Special characters
    ];
    let containsCategory = [false, false, false, false];

    for (let i = 0; i < categoryRegexes.length; i++) {
        containsCategory[i] = categoryRegexes[i].test(password);
        if (containsCategory[i]) {
            score += 1;
        }
    }

    if (length >= 8) {
        score += 1;
    }

    const uniqueCharacters = new Set(password);
    const uniqueCharacterCount = uniqueCharacters.size;
    score += uniqueCharacterCount;

    return score;
}

const password1 = "123456";
const password2 = "MyP@ssw0rd";
const password3 = "!MyP@ssw0rd!";
const strength1 = strength(password1);
const strength2 = strength(password2);
const strength3 = strength(password3);

console.log(`Password strength of ${password1} is: ${strength1}`);
console.log(`Password strength of ${password2} is: ${strength2}`);
console.log(`Password strength of ${password3} is: ${strength3}`);

//User Story 3
function rot13(text) {
    text = String(text);

    return text.replace(/[a-zA-Z]/g, function (match) {
        const isUpperCase = match === match.toUpperCase();
        const shift = isUpperCase ? 65 : 97;
        return String.fromCharCode((match.charCodeAt(0) - shift + 13) % 26 + shift);
    });
}

const originalText = "Hello, World!";
const encryptedText = rot13(originalText);
const decryptedText = rot13("Uryyb, Jbeyq!");

console.log("Original Text:   ", originalText);
console.log("Encrypted Text:  ", encryptedText);
console.log("Decrypted Text:  ", decryptedText);

//User Story 4
function test(fu, arg, exp) {
    return fu(arg) === exp;
}

console.log("test( rot13(), Hello, World!, Uryyb, Jbeyq!")
console.log(test(rot13, "Hello, World!", "Uryyb, Jbeyq!"));

//User Story 5
function generate(op) {
    if (op !== '+' && op !== '-' && op !== '*' && op !== '/') {
        throw new Error("Unsupported operator");
    }
    return function (a, b) {
        switch (op) {
            case '+':
                return a + b;
            case '-':
                return a - b;
            case '*':
                return a * b;
            case '/':
                if (b !== 0) {
                    return a / b;
                } else {
                    throw new Error("Division by zero is not allowed.");
                }
            default:
                throw new Error("Unsupported operator");
        }
    };
}

// Example usage:
const mult = generate('*');
console.log(mult(3, 4));

const add = generate('+');
console.log(add(7, 7));