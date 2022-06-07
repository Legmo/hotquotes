/* Сравниваем два значения */
export let compareValues = (a, b) => {
  if (+(a) == +(b)) {
    return true;
  }
  return false;
};

/* Проверяем массив - встречается ли в нём этот элемент */
export let findDoubles = (array, v) => {
  for (var i = 0; i < array.length; i++) {
    if (compareValues(array[i], v)) {
      return true;
    }
  }
  return false;
};

/* Удаляем из массива объекты-дубли */
export let reduceToUniq = (arr) => {
  var arrResult = [];
  var arrId = [];
  for (var i = 0; i < arr.length; i++) {
    if (!(findDoubles(arrId, arr[i].id))) {
      arrId.push(arr[i].id);

      arrResult[i] = {
        name: arr[i].name,
        id:   arr[i].id
      };
    }
  }
  return arrResult;
};
