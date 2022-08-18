import axios, { AxiosResponse } from 'axios';
import { isEmpty } from 'lodash';
import { AuthorObjectType, QuoteObjectType, SourceObjectType, TagObjectType } from '../types/types';

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
interface quoteFromServer {
  id : string,
  createdTime : string,
  fields: {
    quoteText : string,
    tagsId: Array<string> | null,
    sourceId: string | null,
    authorsId: string | null,
  }
}
interface tagFromServer {
  id : string,
  createdTime : string,
  fields: {
    title : string,
    quotesId?: Array<string> | null,
  }
}
interface authorFromServer {
  id : string,
  createdTime : string,
  fields: {
    title : string,
    quotesId: Array<string> | null,
    sourceId: Array<string> | null,
  }
}
interface sourceFromServer {
  id : string,
  createdTime : string,
  fields: {
    name : string,
    surname : string | null,
    quotesId: Array<string> | null,
    authorsId: Array<string> | null,
  }
}
export enum ResultCodes {
  Success = 200,
  ErrorBadRequest = 400,
  ErrorUnauthorized = 401,
  ErrorPaymentRequired = 402,
  ErrorForbidden = 403,
  ErrorNotFound = 404,
  ErrorRequestEntityTooLarge = 413,
  ErrorInvalidRequest = 422,
  ErrorInternalServer = 500,
  ErrorBadGateway = 502,
  ErrorServiceUnavailable = 503,
}

const apiKey = process.env.REACT_APP_HOTQOUTES_AIRTABLE_API_KEY; // Insert your api key, for example 'keyABCDEFGHIJKLMN'
const instance = axios.create({
  baseURL: 'https://api.airtable.com/v0/appf6c9WBCs4A4Uq6/',
  headers: {
    'Authorization': `Bearer ${apiKey}`
  }
});

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

const errorMessagesGenerator = (requestType: 'get' | 'getPagination' | 'post', tableName:string) => {
  switch (requestType) {
    case 'get':
      return `GET ${tableName} table request error: `;
    case 'getPagination':
      return `GET ${tableName} table with pagination request error: `;
    case 'post':
      return `POST ${tableName} table request error: `;
    default:
      return [];
  }
};

//todo: типизировать все методы https://youtu.be/sjra9F2ZS1E
export const quotesAPI = {
  _tableName: 'quotes' as string,
  getAll() {
    return instance.get<quoteFromServer[]>(`${this._tableName}`).then(
      (resolve: AxiosResponse) => {
        return tableDataPreparationSwitch(this._tableName, resolve.data.records);
      },
      (error) => {
        console.log(errorMessagesGenerator('get', this._tableName), error);
      }
    );
  },
  set(quoteText:string, authorsId:(string)[], tagsId:(string)[], sourcesId:(string)[]){
    const authorsIdTest = ['recX3chQDyevfulxA'];
    const tagsIdTest = ['recl8gY6wzlflESWg'];
    const sourcesIdTest = ['recxGv4vlUq0lmvJT'];
    const data = {
      'records': [{
        'fields': {
          'quoteText': quoteText,
          'authorsId': authorsIdTest,
          'tagsId':    tagsIdTest,
          'sourceId':  sourcesIdTest
        },
      }],
    };
    return instance.post<quoteFromServer[]>(this._tableName, data)
      .then(
        (resolve: AxiosResponse) => {
          if(resolve.status === ResultCodes.Success) {
            return resolve.data.records[0].id as string;
          }
        },
        (error) => {
          console.log(errorMessagesGenerator('get', this._tableName), error);
        }
      );
  },
  getById(id:string) {
    // todo: check <quoteFromServer> type - is it corrected use?
    return instance.get<quoteFromServer>(`${this._tableName}/${id}`).then(
      (resolve:AxiosResponse) => {
        return tableDataPreparationSwitch(this._tableName, [resolve.data]);
      },
      (error) => {
        console.log(errorMessagesGenerator('get', this._tableName), error);
      }
    );
  },
};
export const tagsAPI = {
  _tableName: 'tags' as string,
  getAll() {
    return instance.get<tagFromServer[]>(`${this._tableName}`).then(
      (resolve:AxiosResponse) => {
        return tableDataPreparationSwitch(this._tableName, resolve.data.records);
      },
      (error) => {
        console.log(errorMessagesGenerator('get', this._tableName), error);
      }
    );
  },
  getByPagination(pageSize = 10, offset: number | string = 0 ) {
    // todo: check <tagFromServer[]> type - is it corrected use?
    return instance.get<tagFromServer[]>(`${this._tableName}?pageSize=${pageSize}&offset=${offset}`).then (
      (resolve:AxiosResponse) => {
        return {
          data:   tableDataPreparationSwitch(this._tableName, resolve.data.records),
          offset: resolve.data.offset
        };
      },
      (error) => {
        console.log(errorMessagesGenerator('getPagination', this._tableName), error);
      }
    );
  },
};
export const authorsAPI = {
  _tableName: 'authors' as string,
  getAll() {
    return instance.get<authorFromServer[]>(`${this._tableName}`).then(
      (resolve:AxiosResponse) => {
        return tableDataPreparationSwitch(this._tableName, resolve.data.records);
      },
      (error) => {
        console.log(errorMessagesGenerator('get', this._tableName), error);
      }
    );
  },
  set(name:string, surname:string){
    return instance.post<quoteFromServer[]>(this._tableName, {
      'records': [{
        'fields': {
          'name':    name,
          'surname': surname,
        },
      }],
    }).then(
      (resolve: AxiosResponse) => {
        console.log('POST resolve', resolve);
      },
      (error) => {
        console.log(errorMessagesGenerator('get', this._tableName), error);
      }
    );
  },
};
export const sourcesAPI = {
  _tableName: 'sources' as string,
  getAll() {
    return instance.get<sourceFromServer[]>(`${this._tableName}`).then(
      (resolve:AxiosResponse) => {
        return tableDataPreparationSwitch(this._tableName, resolve.data.records);
      },
      (error) => {
        console.log(errorMessagesGenerator('get', this._tableName), error);
      }
    );
  },
};
