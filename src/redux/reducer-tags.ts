import { TagObjectType, TagsByPaginationObjectType } from '../types/types';
import { BaseThunkType, InferActionsTypes } from './redux-store';
import { tagsAPI } from '../api/api';

const initialState = {
  tags:             [] as Array<TagObjectType>,
  newTag:           {} as TagObjectType,
  tagsByPagination: {
    tags:       [],
    offset:     0 as number | string,
    activePage: 1,
    pageSize:   10,
  } as TagsByPaginationObjectType,
  isFetching: false as boolean,
};

export type InitialTagsStateType = typeof initialState;

const tagsReducer = (state = initialState, action:ActionsTypes):InitialTagsStateType => {
  switch (action.type) {
    case 'SET_TAGS':
      return {
        ...state,
        tags: [
          ...action.tagsArray,
        ],
      };
    case 'SET_TAGS_BY_PAGINATION':
      return {
        ...state,
        tagsByPagination: {
          ...state.tagsByPagination,
          tags: [
            ...action.tagsArray,
          ],
          offset: action.offset,
        },
      };
    case 'CHANGE_PAGE':
      return {
        ...state,
        tagsByPagination: {
          ...state.tagsByPagination,
          activePage: action.activePage,
        },
      };
    case 'UPDATE_NEW_TAG_TEXT':
      return {
        ...state,
        newTag: {
          ...state.newTag,
          title: action.newTitleText,
        },
      };
    case 'ADD_TAG':
      return {
        ...state,
        tags: [
          ...state.tags,
          state.newTag,
        ],
        newTag: {
          title:       '',
          createdTime: null,
          id:          null,
        }
      };
    case 'SET_TAGS_IS_FETCHING':
      return {
        ...state,
        isFetching: action.isFetching,
      };
    default:
      return state;
  }
};

type ActionsTypes = InferActionsTypes<typeof actionsTags>;

//ActionCreator's
/* See more: https://youtu.be/2yJXFMqEbJs */
export const actionsTags = {
  setTags: (tagsArray:Array<TagObjectType>) => ({
    type:      'SET_TAGS',
    tagsArray: tagsArray,
  } as const),
  setTagsByPagination: (tagsArray:Array<TagObjectType>, offset: number | string) => ({
    type:      'SET_TAGS_BY_PAGINATION',
    offset:    offset,
    tagsArray: tagsArray,
  } as const),
  changePage: (activePage:number) => ({
    type:       'CHANGE_PAGE',
    activePage: activePage,
  } as const),
  addTag: () => ({
    type: 'ADD_TAG',
  } as const),
  updateNewTagText: (text:string) => ({
    type:         'UPDATE_NEW_TAG_TEXT',
    newTitleText: text,
  } as const),
  setTagsIsFetching: (isFetching:boolean) => ({
    type: 'SET_TAGS_IS_FETCHING',
    isFetching
  } as const),
};


//Thunk Creator's
type ThunkType = BaseThunkType<ActionsTypes>;

export const getTableTagsTC = ():ThunkType => async(dispatch) => {
  //todo: выдавать сообщение, если цитата с данным ID не найдена
  tagsAPI.getAll().then((response) => {
    dispatch(actionsTags.setTags(response));
    dispatch(actionsTags.setTagsIsFetching(false));
  });
};

export const getTableByPaginationTagsTC = (pageSize:number, offset: number | string):ThunkType => async(dispatch) => {
  tagsAPI.getByPagination(pageSize, offset)
    .then((response: void | {data:Array<TagObjectType>, offset: string | number}) => {
        if(response) {
          const tagsArray:Array<TagObjectType>  = response.data;
          const offset: number | string = response.offset;
          dispatch(actionsTags.setTagsByPagination(tagsArray, offset));
          dispatch(actionsTags.setTagsIsFetching(false));
        }
      }
    );
};

export default tagsReducer;
