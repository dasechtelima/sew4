SEW | ADV | JavaScript Functions

## User Story 1
*As a sales person I want to easily check, if a given EAN/GTIN code is valid, in order to spot mistakes faster.*

### Acceptance Criteria
- A function named isEan(artNum), where artNum is the EAN/GTIN code, is available.
- The result is true, if the given EAN/GTIN code is valid (i.e. format and **checksum** is valid), otherwise it is false.

## User Story 2
*As a security expert I want to see the strength of a password, so that I can be sure to use strong passwords.*

### Acceptance Criteria
- A function named strength(password) is available.
- The result of this function is a positive number.
- Use several metrics to calculate the strength of a password, e.g.:
  - the length of the password
  - the number of different categories of characters (lower-, and upper-case, numbers, special chars, etc.)
  - the more unpredictable the password is, the stronger it is


## User Story 3
*As a security expert I want to encrypt and decrypt strings, so that I can have a secure conversation with my counterpart.*

### Acceptance Criteria
- A function rot13(text) is available.
- The given string is encrypted using the ROT13 method.
- Upper- and lower-case are kept.
- Letters and signs outside of the English alphabet are kept.
- If the argument is no string, it needs to be converted into a string.
- If the function is used twice on a string, it should produce the same string again.


## User Story 4
*As a software tester I want to test certain functions, so that I can be sure that they produce the right result.*

### Acceptance Criteria
- A function test(fu, arg, exp) is available, where fu is the function which needs to be tested, arg are the arguments for fu, and exp is the expected return value.
- The function test calls the function fu using arg as argument.
- The return value of fu is compared with exp and if they match true is returned, otherwise false is returned.


## User Story 5
*As a cool developer I want to create generic code, so that I can be minimize my coding effort.*

### Acceptance Criteria
- A function generate(op) is available.
- The parameter op can be one of the four basic mathematic operations +, -, * or /.
- generate returns a new function, which then can be called with two numbers as parameters.
- The given mathematic operation is performed on the two numbers.
- Example:
  - const mult = generate('*')
  - console.log(mult(3, 4)) // the value is 12 printed on the console

    
#### Links
- https://en.wikipedia.org/wiki/International_Article_Number
- https://my.skilldisplay.eu/en/skillset/592
