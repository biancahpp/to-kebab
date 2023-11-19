function stringToKebab(string) {
  let stringInKebab = "";

  for (let i = 0; i < string.length; i++) {
    const letter = string[i];
    const uppercaseLetter = letter.toUpperCase();

    if (letter === uppercaseLetter) {
      const lowercaseLetter = letter.toLowerCase();
      i === 0
        ? (stringInKebab += lowercaseLetter)
        : (stringInKebab += `-${lowercaseLetter}`);
    } else {
      stringInKebab += letter;
    }
  }

  return stringInKebab;
}

function objectToKebab(obj) {
  const result = {};
  for (const key in obj) {
    const keyInKebab = stringToKebab(key);
    result[keyInKebab] = obj[key];
  }
  return result;
}

function arrayToKebab(arr) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    const indexInKebab = stringToKebab(arr[index]);
    result.push(indexInKebab);
  }
  return result;
}

module.exports = { stringToKebab, objectToKebab, arrayToKebab };
