import axios from 'axios';
import { isEmpty } from 'lodash';
import { AuthorObjectType, QuoteObjectType, SourceObjectType, TagObjectType } from '../types/types';

const apiKey = process.env.REACT_APP_HOTQOUTES_AIRTABLE_API_KEY; // Insert your API key, for example 'keyABCDEFGHIJKLMN'
const instance = axios.create({
  baseURL: 'https://api.airtable.com/v0/appf6c9WBCs4A4Uq6/',
  headers: {
    'Authorization': `Bearer ${apiKey}`
  }
});

type quotesFromServerObjectType = {
  id: string,
  createdTime: string,
  fields: {
    quoteText: string,
    tagsId: Array<string>,
    authorsId: Array<string>,
    sourceId?: Array<string>,
  }
}
type authorsFromServerObjectType = {
  id: string,
  createdTime: string,
  fields: {
    name: string,
    surname?: string | null,
    quotesId: Array<string>,
    sourceId?: Array<string>,
  }
}
type tagsFromServerObjectType = {
  id: string,
  createdTime: string,
  fields: {
    title: string,
    quotesId?: Array<string>,
  }
}
type sourcesFromServerObjectType = {
  id: string,
  createdTime: string,
  fields: {
    title: string,
    authorsId: Array<string>,
    quotesId: Array<string>,
  }
}

//Preparing data from server for React & Redux
const quotesObjPreparation = (object:quotesFromServerObjectType) => {
  return {
    id:          object.id,
    quoteText:   object.fields.quoteText,
    tagsId:      (!isEmpty(object.fields.tagsId)) ? [...object.fields.tagsId] : [],
    sourceId:    (!isEmpty(object.fields.sourceId)) ? object.fields.sourceId : null,
    authorsId:   (!isEmpty(object.fields.authorsId)) ? object.fields.authorsId : null,
    createdTime: object.createdTime,
  } as QuoteObjectType;
};
const authorsObjPreparation = (object:authorsFromServerObjectType) => {
  return {
    id:          object.id,
    createdTime: object.createdTime,
    name:        object.fields.name,
    surname:     object.fields.surname ? object.fields.surname : null,
    quotesId:    object.fields.quotesId,
    sourceId:    (!isEmpty(object.fields.sourceId)) ? object.fields.sourceId : null,
  } as AuthorObjectType;
};
const tagsObjPreparation = (object:tagsFromServerObjectType) => {
  return {
    id:          object.id,
    createdTime: object.createdTime,
    title:       object.fields.title,
    quotesId:    (!isEmpty(object.fields.quotesId)) ? object.fields.quotesId : null,
  } as TagObjectType;
};
const sourcesObjPreparation = (object:sourcesFromServerObjectType) => {
  return {
    id:          object.id,
    createdTime: object.createdTime,
    title:       object.fields.title,
    authorsId:   (!isEmpty(object.fields.authorsId)) ? object.fields.authorsId : null,
    quotesId:    object.fields.quotesId,
  } as SourceObjectType;
};

// type test = quotesFromServerObjectType | authorsFromServerObjectType | tagsFromServerObjectType | sourcesFromServerObjectType;
const tableDataPreparationSwitch = (tableName:string, originalArray:any) => { //todo: fix this 'any'!
  let finalArray = [];
  switch (tableName) {
    case 'quotes':
      finalArray = originalArray.map((object:quotesFromServerObjectType) => quotesObjPreparation(object));
      break;
    case 'authors':
      finalArray = originalArray.map((object:authorsFromServerObjectType) => authorsObjPreparation(object));
      break;
    case 'tags':
      finalArray = originalArray.map((object:tagsFromServerObjectType) => tagsObjPreparation(object));
      break;
    case 'sources':
      finalArray = originalArray.map((object:sourcesFromServerObjectType) => sourcesObjPreparation(object));
      break;
    default:
      return [];
  }
  return finalArray;
};

//Data requests
//todo: разобраться с дублированием кода
export const getTable = (tableName = 'quotes' ) => {
  return instance.get<any>(`${tableName}`).then( //todo: типизировать get https://youtu.be/sjra9F2ZS1E
    (resolve) => {
      return tableDataPreparationSwitch(tableName, resolve.data.records);
    },
    (error) => {
      console.log('Get table request error: ', error);
    }
  );
};
// getTable( 'quotes').then((resolve:AxiosResponse<any>) => resolve.data.data.fields.)
export const getTableById = (tableName = 'quotes', id:string) => {
  return instance.get<any>(`${tableName}/${id}`).then( //todo: типизировать get https://youtu.be/sjra9F2ZS1E
    (resolve) => {
      return tableDataPreparationSwitch(tableName, [resolve.data]);
    },
    (error) => {
      console.log('Get table by ID request error: ', error);
    }
  );
};
export const getTableByPagination = (tableName = 'tags', pageSize = 10, offset: number | string = 0 ) => {
 return instance.get<any>(`${tableName}?pageSize=${pageSize}&offset=${offset}`).then ( //todo: типизировать get https://youtu.be/sjra9F2ZS1E
   (resolve) => {
     return {
       data:   tableDataPreparationSwitch(tableName, resolve.data.records),
       offset: resolve.data.offset
     };
   },
   (error) => {
     console.log('Get table with pagination request error: ', error);
   }
 );
};
