import axios, { AxiosError, AxiosResponse } from 'axios';
import { isEmpty } from 'lodash';
import { AuthorObjectType, QuoteObjectType, SourceObjectType, TagObjectType } from '../types/types';
import { APIKEY } from '../config/const';

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

const instance = axios.create({
  baseURL: 'https://api.airtable.com/v0/appf6c9WBCs4A4Uq6/',
  headers: {
    'Authorization': `Bearer ${APIKEY}`
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

const showError = (requestType: 'get'| 'getPagination' | 'post', tableName:string, error:string) => {
  let errorMessage;
  switch (requestType) {
    case 'get':
      errorMessage = `GET ${tableName} table request error: `;
      break;
    case 'getPagination':
      errorMessage = `GET ${tableName} table with pagination request error: `;
      break;
    case 'post':
      errorMessage = `POST ${tableName} table request error: `;
      break;
    default:
      errorMessage = 'Request error';
  }
  // todo: we need to show this error via modal window too. Use something like «react-modal», «reactjs-popup» or Material UI Modal
  console.log(errorMessage, error);
};

// todo: типизировать все методы https://youtu.be/sjra9F2ZS1E
export const quotesAPI = {
  _tableName: 'quotes' as string,
  async getAll() {
    try {
      const resolve: AxiosResponse = await instance.get(this._tableName);
      return resolve.data.records.map((object:quotesFromServerObjectType) => quotesObjPreparation(object));
    }
    catch(err) {
      const error = err as Error | AxiosError;
      showError('get', this._tableName, error.message);
    }
  },
  async getById(id:string) {
    // todo: check <quoteFromServer> type - is it corrected use?
    try {
      const resolve: AxiosResponse = await instance.get(`${this._tableName}/${id}`);
      return [quotesObjPreparation(resolve.data)];
    }
    catch(err) {
      const error = err as Error | AxiosError;
      showError('get', this._tableName, error.message);
    }
  },
  async set(quoteText:string, authorsId:string[], tagsId:string[], sourcesId:string[]){
    try {
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
      const resolve: AxiosResponse = await instance.post(this._tableName, data);
      if(resolve.status === ResultCodes.Success) {
        return resolve.data.records[0].id as string;
      }
    }
    catch(err) {
      const error = err as Error | AxiosError;
      showError('get', this._tableName, error.message);
    }
  },
};
export const tagsAPI = {
  _tableName: 'tags' as string,
  async getAll() {
    try {
      const resolve:AxiosResponse = await instance.get(`${this._tableName}`);
      return resolve.data.records.map((object:tagsFromServerObjectType) => tagsObjPreparation(object));
    }
    catch(err) {
      const error = err as Error | AxiosError;
      showError('get', this._tableName, error.message);
    }
  },
  async getByPagination(pageSize = 10, offset: number | string = 0 ) {
    // todo: check <tagFromServer[]> type - is it corrected use?
    try {
      const resolve:AxiosResponse = await instance.get(`${this._tableName}?pageSize=${pageSize}&offset=${offset}`);
      return {
        data:   resolve.data.records.map((object:tagsFromServerObjectType) => tagsObjPreparation(object)),
        offset: resolve.data.offset
      };
    }
    catch(err) {
      const error = err as Error | AxiosError;
      showError('getPagination', this._tableName, error.message);
    }
  },
};
export const authorsAPI = {
  _tableName: 'authors' as string,
  async getAll() {
    try {
      const resolve: AxiosResponse = await instance.get(this._tableName);
      return resolve.data.records.map((object:authorsFromServerObjectType) => authorsObjPreparation(object));
    }
    catch(err) {
      const error = err as Error | AxiosError;
      showError('get', this._tableName, error.message);
    }
  },
  async set(name:string, surname:string){
    try {
      const data = {
        'records': [{
          'fields': {
            'name':    name,
            'surname': surname,
          },
        }],
      };
      const resolve: AxiosResponse = await instance.post(this._tableName, data);
      // console.log('POST resolve', resolve);
    }
    catch(err) {
      const error = err as Error | AxiosError;
      showError('post', this._tableName, error.message);
    }
  },
};
export const sourcesAPI = {
  _tableName: 'sources' as string,
  async getAll() {
    try {
      const resolve: AxiosResponse = await instance.get(this._tableName);
      return resolve.data.records.map((object:sourcesFromServerObjectType) => sourcesObjPreparation(object));
    }
    catch(err) {
      const error = err as Error | AxiosError;
      showError('get', this._tableName, error.message);
    }
  },
};
