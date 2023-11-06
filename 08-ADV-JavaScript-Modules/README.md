SEW | ADV | JavaScript Modules

## User Story 1

*As a web designer, I want to be able to convert different RGB color notations into one another.*

### Acceptance Criteria

- A JS Module is available, which exports the following functions:
  - `rgbToHex(r, g, b)` \
    Converts RGB values to a hex value (e.g. `12,160,52 -> #0ca034`).
  
  - `rgbFunctionToHex(rgb)` \
    Converts a rgb() functional notation to a hex value. Each value could either be a number or a percentage (e.g. `"rgb(187,22%,88)" -> #bb3858`).
  
  - `hexToRgb(hex, isPercentage)`
    Converts a hex value to a rgb() functional notation, either with number or percentage values.
- A simple JS Script is available, which runs in a browser and tests the module functions.

## User Story 2

*As a web developer, I want to easily save a color and get different RGB color notations.*

- A JS Module is available, which exports a JS Class as default. 
  - The constructor accepts a color either in hex or in rgb() functional notation.
  - The class has three methods which return the color as hex value, as rgb() with number values and as rgb() with percentage values.
  - The class uses the helper functions of User Story 1.
- A simple JS Script is available, which runs in a browser and tests the module.   

#### Links

- [MDN Guide - JavaScript Modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)
- [CSS - RGB color model](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb_color_model)
