# To Kebab

A simple npm package for converting strings, objects, and arrays to kebab-case.

## Installation

You can install this package using npm or yarn:

```bash
npm install your-package-name
# or
yarn add your-package-name
```

## Usage

`stringToKebab(string)`

Converts a string to kebab-case.

```javascript
const { stringToKebab } = require("your-package-name");

const kebabCaseString = stringToKebab("ThisIsAString");
console.log(kebabCaseString); // Output: 'this-is-a-string'
```

`objectToKebab(obj)`

Converts the keys of an object to kebab-case.

```javascript
const { objectToKebab } = require("your-package-name");

const inputObject = {
  camelCaseKey: "value1",
  snake_case_key: "value2",
};

const kebabCaseObject = objectToKebab(inputObject);
console.log(kebabCaseObject);
// Output: { 'camel-case-key': 'value1', 'snake-case-key': 'value2' }
```

`arrayToKebab(arr)`

Converts an array of strings to kebab-case.

```javascript
const { arrayToKebab } = require("your-package-name");

const inputArray = ["ThisIsAString", "AnotherString"];
const kebabCaseArray = arrayToKebab(inputArray);
console.log(kebabCaseArray); // Output: [ 'this-is-a-string', 'another-string' ]
```

## Contributing

Contributions are welcome! If you have any suggestions, bug reports, or feature requests, please open an issue on the GitHub repository.

## License

This package is licensed under the MIT License.
