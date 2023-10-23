SEW | ADV | JavaScript Classes

## User Story 1
*As a skilled mathematician I want to develop a class for working with complex numbers, so that I can use it in my daily work.*

### Acceptance Criteria
- A class called Complex is available, which is used to create complex numbers.
- A complex number has a real part and an imaginary part.
- A complex number has two methods:
 - add() to add the arguments to this and return this
 - toString() returns the complex number as string in the format re+im i (Beispiele: 2+5i, -1+2i, -3-4i, 2+i)
- The constructor function and the add method interpret their arguments according to the amount of arguments given, i.e.:
  - no argument -> number is 0
  - one argument -> (real) number or complex object
  - two arguments -> real and imaginary part
- A number of different test cases is provided.

*Hint*: JavaScript allows [default parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters?retiredLocale=de).

#### Links
- https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Classes_in_JavaScript
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
- https://my.skilldisplay.eu/en/skillset/594
