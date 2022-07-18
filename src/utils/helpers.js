/* Check array to see if it contains this element */
export let findDoubles = (array, value) => {
  for (let i = 0; i < array.length; i++) {
    if (+array[i] == +value) {
      return true;
    }
  }
  return false;
};

/* Remove duplicate objects from an array */
export let reduceToUniq = (arr) => {
  let arrResult = [];
  let arrId = [];
  for (let i = 0; i < arr.length; i++) {
    if (!findDoubles(arrId, arr[i].id)) {
      arrId.push(arr[i].id);

      arrResult[i] = {
        name: arr[i].name,
        id:   arr[i].id,
      };
    }
  }
  return arrResult;
};

/* Return a random array element */
export let getRandomArrayElement = (array) => {
  return array[Math.floor(Math.random() * array.length)];
};

/* Find array element by */
export let findElementByValue = (array, value) => {
  let resultObject = [];
  array.map((object) => {
    if (Object.values(object).includes(value)) {
      resultObject = object;
    }});
  return resultObject;
};