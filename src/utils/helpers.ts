/* Return a random array element */
type getRandomArrayElementFuncType = (array:Array<any>) => Array<any>; //todo: fix this 'any'?
export const getRandomArrayElement:getRandomArrayElementFuncType = (array) => {
  return array[Math.floor(Math.random() * array.length)];
};

/* Find array element by */
type findElementByValueFuncType = (array:Array<any>, value:any) => any; //todo: fix this 'any'?
export const findElementByValue:findElementByValueFuncType = (array, value) => {
  let resultObject:any = {}; //todo: fix this 'any'?
  array.map((object) => {
    if (Object.values(object).includes(value)) {
      resultObject = object;
    }});
  return resultObject;
};