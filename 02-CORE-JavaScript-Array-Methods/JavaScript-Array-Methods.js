//User Story 1
function sort_array_lexical(str_arr) {
    return str_arr.sort(new Intl.Collator("en").compare);
}

console.log("Sort Array Lexical: " + sort_array_lexical(["A", "G", "L", "aa", "bb", "Z", 5]));

//User Story 2
function get_even_numbers(num_arr) {
  return num_arr.filter(num => num % 2 === 0);
}

console.log(get_even_numbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 12]));

//User Story 3
function get_capital_words(str_arr) {
  return str_arr.filter(str => str.toString()[0] != str.toString()[0].toLowerCase());
}

console.log("Capital Words: " + get_capital_words(["!Hallo", "mein", "Name", "ist", "Lisa", 5]));

//User Story 4
function modulo_array(num_arr, modulo) {
    let calc_array = [];
    num_arr.forEach(num => {
        calc_array.push(num % modulo)
    });
    return calc_array;
}

console.log("Modulo Array: " + modulo_array([2, 3, 10, 13], 2));

//User Story 5
function convert_to_lowercase(str_arr) {
    let convert_arr = [];
    str_arr.forEach(str => {
        convert_arr.push(str.toString().toLowerCase());
    });
    return convert_arr;
}
console.log("Convert to lowercase: " + convert_to_lowercase(["HALLO", "MEIN", "NAME", "IST", "LISA-marie", 5]));