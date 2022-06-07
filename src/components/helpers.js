import React, {Component} from 'react';

const Helpers = (props) => {
  /* Сравниваем два значения (только числа?) */
  function compareValues(a, b) {
    if (+(a) == +(b)) {
      return true;
    }
    return false;
  }

  /* Проверяем массив - встречается ли в нём этот элемент */
  function findDoubles(array, v) {
    for (var i = 0; i < array.length; i++) {
      if (compareValues(array[i], v)) {
        return true;
      }
    }
    return false;
  }

  /* Удаляем из массива объекты-дубли */
  function reduceToUniq(arr) {
    var arrResult = [];
    var arrId = [];
    for (var i = 0; i < arr.length; i++) {
      if (!findDoubles(arrId, arr[i].id)) {
        arrId.push(arr[i].id);

        arrResult[i] = {
          name: arr[i].name,
          id: arr[i].id,
        }
      }
    }
    return arrResult;
  }

  return {
    // reduceToUniq(props);
  }
}


export default Helpers;