import * as axios from 'axios';
import PropTypes from 'prop-types';

let basicUrl = 'https://api.airtable.com/v0/appf6c9WBCs4A4Uq6/';
let apiKey = ''; // Insert your API key, for example 'keyABCDEFGHIJKLMN'

//Preparing data from server for React & Redux
const quotesObjPrepare = (object) => {
  return {
    quoteText:   object.fields.quoteText,
    createdTime: object.createdTime,
    id:          object.id,
    authorId:    object.fields.authorId ? object.fields.authorId : null,
    sourceId:    object.fields.sourceId ? object.fields.sourceId : null,
    tagsId:      object.fields.tagsId ? [...object.fields.tagsId] : []
  };
};
const authorsObjPrepare = (object) => {
  return {
    name:        object.fields.name ? object.fields.name : null,
    surname:     object.fields.surname ? object.fields.surname : null,
    createdTime: object.createdTime,
    id:          object.id,
    quotes:      object.fields.quotes ? object.fields.quotes : []
  };
};
const tagsObjPrepare = (object) => {
  return {
    title:       object.fields.title ? object.fields.title : null,
    createdTime: object.createdTime,
    id:          object.id,
  };
};
const sourcesObjPrepare = (object) => {
  return {
    title:       object.fields.title ? object.fields.title : null,
    createdTime: object.createdTime,
    id:          object.id,
  };
};

//Data requests
export let getTable = (tableName = 'quotes' ) => {
  return axios.get(`${basicUrl}${tableName}?api_key=${apiKey}`).then(
    (resolve) => {
      const originalArray = resolve.data.records;
      let finalArray = [];
      switch (tableName) {
        case 'quotes':
          finalArray = originalArray.map(object => {
            return quotesObjPrepare(object);
          });
          break;
        case 'authors':
          finalArray = originalArray.map( (object) => {
            return authorsObjPrepare(object);
          });
          break;
        case 'tags':
          finalArray = originalArray.map(object => {
            return tagsObjPrepare(object);
          });
          break;
        case 'sources':
          finalArray = originalArray.map(object => {
            return sourcesObjPrepare(object);
          });
          break;
        default:
          return [];
      }
      return finalArray;
    },
    (error) => {
      console.log('Data request error: ', error);
    }
);
};

getTable.propTypes = {
  records: PropTypes.array,
};