import * as axios from 'axios';
import PropTypes from 'prop-types';

const apiKey = process.env.REACT_APP_HOTQOUTES_AIRTABLE_API_KEY; // Insert your API key, for example 'keyABCDEFGHIJKLMN'
const instance = axios.create({
  baseURL: 'https://api.airtable.com/v0/appf6c9WBCs4A4Uq6/',
  headers: {
    'Authorization': `Bearer ${apiKey}`
  }
});

//Preparing data from server for React & Redux
const quotesObjPreparation = (object) => {
  return {
    quoteText:   object.fields.quoteText,
    createdTime: object.createdTime,
    id:          object.id,
    authorsId:   object.fields.authorsId ? object.fields.authorsId : null,
    sourceId:    object.fields.sourceId ? object.fields.sourceId : null,
    tagsId:      object.fields.tagsId ? [...object.fields.tagsId] : []
  };
};
const authorsObjPreparation = (object) => {
  return {
    name:        object.fields.name ? object.fields.name : null,
    surname:     object.fields.surname ? object.fields.surname : null,
    createdTime: object.createdTime,
    id:          object.id,
    quotes:      object.fields.quotes ? object.fields.quotes : []
  };
};
const tagsObjPreparation = (object) => {
  return {
    title:       object.fields.title ? object.fields.title : null,
    createdTime: object.createdTime,
    id:          object.id,
  };
};
const tagsByPaginationObjPreparation = (object) => {
  return {
    title:       object.fields.title ? object.fields.title : null,
    createdTime: object.createdTime,
    id:          object.id,
  };
};
const sourcesObjPreparation = (object) => {
  return {
    title:       object.fields.title ? object.fields.title : null,
    createdTime: object.createdTime,
    id:          object.id,
  };
};

//Data requests
export const getTableByPagination = (tableName = 'tags', pageSize = 10, offset = 0 ) => {
 return instance.get(`${tableName}?pageSize=${pageSize}&offset=${offset}`).then (
   (resolve) => {
     const originalArray = resolve.data.records;
     let result = {
       data:   [],
       offset: resolve.data.offset
     };
     switch (tableName) {
       case 'tags':
         result.data = originalArray.map(object => {
           return tagsByPaginationObjPreparation(object);
         });
         break;
       default:
         return [];
     }
     return result;
   },
   (error) => {
     console.log('Get table with pagination request error: ', error);
   }
 );
};

export const getTable = (tableName = 'quotes' ) => {
  return instance.get(`${tableName}`).then(
    (resolve) => {
      const originalArray = resolve.data.records;
      let finalArray = [];
      switch (tableName) {
        case 'quotes':
          finalArray = originalArray.map(object => {
            return quotesObjPreparation(object);
          });
          break;
        case 'authors':
          finalArray = originalArray.map( (object) => {
            return authorsObjPreparation(object);
          });
          break;
        case 'tags':
          finalArray = originalArray.map(object => {
            return tagsObjPreparation(object);
          });
          break;
        case 'sources':
          finalArray = originalArray.map(object => {
            return sourcesObjPreparation(object);
          });
          break;
        default:
          return [];
      }
      return finalArray;
    },
    (error) => {
      console.log('Get table request error: ', error);
    }
);
};

//todo: разобраться с дублированием кода
export const getTableById = (tableName = 'quotes', id) => {
  return instance.get(`${tableName}/${id}`).then(
    (resolve) => {
      let finalArray = [];
      switch (tableName) {
        case 'quotes':
          finalArray = [
            {
              quoteText:   resolve.data.fields.quoteText,
              createdTime: resolve.data.createdTime,
              id:          resolve.data.id,
              authorsId:   resolve.data.fields.authorsId ? resolve.data.fields.authorsId : null,
              sourceId:    resolve.data.fields.sourceId ? resolve.data.fields.sourceId : null,
              tagsId:      resolve.data.fields.tagsId ? [...resolve.data.fields.tagsId] : []
            }
          ];
          break;
        default:
          return resolve.data;
      }
      return finalArray;
    },
    (error) => {
      console.log('Get table by ID request error: ', error);
    }
  );
};

getTable.propTypes = {
  records: PropTypes.array,
};