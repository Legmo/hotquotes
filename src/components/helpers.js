const Helpers = () => {
  /* Comparing two values (only numbers?) */
  function compareValues(a, b) {
    if (+a == +b) {
      return true;
    }
    return false;
  }

  /* Check array to see if it contains this element*/
  function findDoubles(array, v) {
    for (var i = 0; i < array.length; i++) {
      if (compareValues(array[i], v)) {
        return true;
      }
    }
    return false;
  }

  /* Removing duplicate objects from an array */
  const reduceToUniq = (arr) => {
    var arrResult = [];
    var arrId = [];
    for (var i = 0; i < arr.length; i++) {
      if (!findDoubles(arrId, arr[i].id)) {
        arrId.push(arr[i].id);

        arrResult[i] = {
          name: arr[i].name,
          id:   arr[i].id
        };
      }
    }
    return arrResult;
  };

  return reduceToUniq();
};

export default Helpers;
