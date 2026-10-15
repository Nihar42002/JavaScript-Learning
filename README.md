# JavaScript Learning Repository

A structured, well-organized curriculum and code reference for JavaScript fundamentals, DOM manipulation, and event handling.

---

## 📚 Curriculum & Directory Structure

```
JavaScript Learning/
├── 01_Basics_and_Variables/
│   ├── 01_variables_and_datatypes.html
│   ├── 01_variables_and_datatypes.js
│   └── practice_set1/
│       ├── 01_product_object.html
│       └── 01_product_object.js
│
├── 02_Operators_and_Conditionals/
│   ├── 01_operators_and_conditionals.html
│   ├── 01_operators_and_conditionals.js
│   └── practice_set2/
│       ├── 01_multiple_of_5_check.html
│       ├── 01_multiple_of_5_check.js
│       ├── 02_grade_calculator.html
│       └── 02_grade_calculator.js
│
├── 03_Loops/
│   ├── 01_loop_types.html
│   ├── 01_loop_types.js
│   └── practice_set3/
│       ├── 01_even_numbers_0_to_100.html
│       ├── 01_even_numbers_0_to_100.js
│       ├── 02_number_guessing_game.html
│       └── 02_number_guessing_game.js
│
├── 04_Strings/
│   ├── 01_string_methods_and_templates.html
│   ├── 01_string_methods_and_templates.js
│   └── practice_set4/
│       ├── 01_username_generator.html
│       └── 01_username_generator.js
│
├── 05_Arrays/
│   ├── 01_array_loops.html
│   ├── 01_array_loops.js
│   ├── 02_array_methods.html
│   ├── 02_array_methods.js
│   └── practice_set5/
│       ├── 01_average_marks_and_discount.html
│       ├── 01_average_marks_and_discount.js
│       ├── 02_company_array_operations.html
│       └── 02_company_array_operations.js
│
├── 06_Functions_and_Methods/
│   ├── 01_function_basics.html
│   ├── 01_function_basics.js
│   ├── 02_forEach_callback.html
│   ├── 02_forEach_callback.js
│   ├── 03_map_filter_reduce.html
│   ├── 03_map_filter_reduce.js
│   └── practice_set6/
│       ├── 01_count_vowels.html
│       ├── 01_count_vowels.js
│       ├── 02_square_numbers_forEach.html
│       ├── 02_square_numbers_forEach.js
│       ├── 03_filter_marks_and_reduce.html
│       └── 03_filter_marks_and_reduce.js
│
├── 07_DOM_Part1/
│   ├── 01_dom_selectors.html
│   ├── 01_dom_selectors.js
│   ├── practice_set9/
│   │   ├── 01_append_heading_text.html
│   │   └── 01_append_heading_text.js
│   └── practice_set10/
│       ├── 01_change_box_content.html
│       ├── 01_change_box_content.js
│       └── style.css
│
├── 08_DOM_Part2/
│   ├── 01_dom_attributes_and_elements.html
│   ├── 01_dom_attributes_and_elements.js
│   ├── practice_set11/
│   │   ├── 01_create_button_prepend.html
│   │   └── 01_create_button_prepend.js
│   └── practice_set12/
│       ├── 01_classlist_styling.html
│       ├── 01_classlist_styling.js
│       └── style.css
│
├── 09_Events_Handling/
│   ├── 01_mouse_keyboard_form_events.html
│   └── 01_mouse_keyboard_form_events.js
│
└── 10_Event_Objects/
    ├── 01_event_object_and_listeners.html
    ├── 01_event_object_and_listeners.js
    └── practice_set13_dark_mode_toggle/
        ├── 01_dark_mode_toggle.html
        └── 01_dark_mode_toggle.js
```

---

## 📖 Chapter Breakdown & Topic Guide

### [01_Basics_and_Variables](file:///C:/Users/parwa/OneDrive/Documents/JavaScript%20Learning/01_Basics_and_Variables)
- **`01_variables_and_datatypes.js`**: Variable declarations (`var`, `let`, `const`), primitives (`string`, `number`, `boolean`, `undefined`), and object structures (`user`, `product`, `address`).
- **`practice_set1/01_product_object.js`**: Defining a product object with properties (`productName`, `price`, `deal`, `offerInPercentage`).

### [02_Operators_and_Conditionals](file:///C:/Users/parwa/OneDrive/Documents/JavaScript%20Learning/02_Operators_and_Conditionals)
- **`01_operators_and_conditionals.js`**: Arithmetic operators, unary operators, assignment shortcuts, equality checks (`==` vs `===`), logical operators (`&&`, `||`, `!`), ternary operator, and `switch` statement.
- **`practice_set2/01_multiple_of_5_check.js`**: Checking user-input number divisibility by 5.
- **`practice_set2/02_grade_calculator.js`**: Calculating average marks across subjects and assigning letter grades using `switch(true)`.

### [03_Loops](file:///C:/Users/parwa/OneDrive/Documents/JavaScript%20Learning/03_Loops)
- **`01_loop_types.js`**: Demonstrations of `for`, `while`, `do...while`, `for...in` (object keys), and `for...of` (iterable values).
- **`practice_set3/01_even_numbers_0_to_100.js`**: Printing all even numbers from 0 to 100.
- **`practice_set3/02_number_guessing_game.js`**: Guessing game using `Math.random()` and a `while` loop until user guesses the secret number.

### [04_Strings](file:///C:/Users/parwa/OneDrive/Documents/JavaScript%20Learning/04_Strings)
- **`01_string_methods_and_templates.js`**: Template literals, interpolation, `toUpperCase`, `toLowerCase`, `trim`, `slice`, `concat`, `replace`, and `charAt`.
- **`practice_set4/01_username_generator.js`**: Automatic username generator combining user first name, surname, random number, and email domain.

### [05_Arrays](file:///C:/Users/parwa/OneDrive/Documents/JavaScript%20Learning/05_Arrays)
- **`01_array_loops.js`**: Iterating through arrays with `for`, `for...of`, `forEach`, `while`, and `do...while`.
- **`02_array_methods.js`**: Array modification methods: `push()`, `pop()`, `toString()`, `concat()`, `shift()`, `unshift()`, `slice()`, and `splice()`.
- **`practice_set5/01_average_marks_and_discount.js`**: Calculating class average score and applying a 10% discount across an array of prices.
- **`practice_set5/02_company_array_operations.js`**: Company list operations (removing first element, replacing with `splice`, and appending with `push`).

### [06_Functions_and_Methods](file:///C:/Users/parwa/OneDrive/Documents/JavaScript%20Learning/06_Functions_and_Methods)
- **`01_function_basics.js`**: Function definitions, parameters, return statements, and default parameters.
- **`02_forEach_callback.js`**: Array `forEach()` with element, index, and array parameters using traditional and arrow functions.
- **`03_map_filter_reduce.js`**: Higher-order array methods (`map` for transformation, `filter` for conditions, `reduce` for aggregation).
- **`practice_set6/01_count_vowels.js`**: Function to scan and count vowels in any string.
- **`practice_set6/02_square_numbers_forEach.js`**: Calculating squares of numbers in an array using `forEach`.
- **`practice_set6/03_filter_marks_and_reduce.js`**: Filtering marks >= 90 and calculating sum and factorial/product using `reduce()`.

### [07_DOM_Part1](file:///C:/Users/parwa/OneDrive/Documents/JavaScript%20Learning/07_DOM_Part1)
- **`01_dom_selectors.js`**: Accessing and mutating elements with `getElementById`, `getElementsByTagName`, `getElementsByClassName`, `querySelector`, and `style`.
- **`practice_set9/01_append_heading_text.js`**: Appending custom text to heading elements using `textContent`.
- **`practice_set10/01_change_box_content.js`**: Updating the `innerText` of multiple box elements with CSS styling.

### [08_DOM_Part2](file:///C:/Users/parwa/OneDrive/Documents/JavaScript%20Learning/08_DOM_Part2)
- **`01_dom_attributes_and_elements.js`**: DOM element attributes (`getAttribute`, `setAttribute`) and tree operations (`createElement`, `append`, `prepend`, `before`, `after`, `remove`).
- **`practice_set11/01_create_button_prepend.js`**: Dynamically creating a styled button and prepending it to the document body.
- **`practice_set12/01_classlist_styling.js`**: Managing element CSS classes with `classList.add()`.

### [09_Events_Handling](file:///C:/Users/parwa/OneDrive/Documents/JavaScript%20Learning/09_Events_Handling)
- **`01_mouse_keyboard_form_events.js`**: Handling `click`, `mouseover`, `mouseout`, `keypress`, `keydown`, `keyup`, form `submit` (`preventDefault()`), `window.print()`, and window `load`.

### [10_Event_Objects](file:///C:/Users/parwa/OneDrive/Documents/JavaScript%20Learning/10_Event_Objects)
- **`01_event_object_and_listeners.js`**: Reading `event.type`, `event.target`, `event.key`, preventing default submit behavior, and attaching/removing listeners with `removeEventListener()`.
- **`practice_set13_dark_mode_toggle/01_dark_mode_toggle.js`**: Interactive Dark Mode / Light Mode page toggle button.
