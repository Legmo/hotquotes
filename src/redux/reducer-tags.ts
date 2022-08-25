import { TagObjectType, TagsByPaginationObjectType } from '../types/types';
import { BaseThunkType, InferActionsTypes } from './store';
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
  isUpdating: false as boolean,
};

export type InitialTagsStateType = typeof initialState;

const tagsReducer = (state = initialState, action:ActionsTypes):InitialTagsStateType => {
  switch (action.type) {
    case 'tags/SET_TAGS':
      return {
        ...state,
        tags: [
          ...action.tagsArray,
        ],
      };
    case 'tags/SET_TAGS_BY_PAGINATION':
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
    case 'tags/CHANGE_PAGINATION_PAGE':
      return {
        ...state,
        tagsByPagination: {
          ...state.tagsByPagination,
          activePage: action.activePage,
        },
      };
    case 'tags/IS_UPDATING':
      return {
        ...state,
        isUpdating: action.isUpdating,
      };
    default:
      return state;
  }
};

type ActionsTypes = InferActionsTypes<typeof actionsTags>;

// ActionCreator's
/* See more: https://youtu.be/2yJXFMqEbJs */
export const actionsTags = {
  setTags: (tagsArray:Array<TagObjectType>) => ({
    type:      'tags/SET_TAGS',
    tagsArray: tagsArray,
  } as const),
  setTagsByPagination: (tagsArray:Array<TagObjectType>, offset: number | string) => ({
    type:      'tags/SET_TAGS_BY_PAGINATION',
    offset:    offset,
    tagsArray: tagsArray,
  } as const),
  changePaginationPage: (activePage:number) => ({
    type:       'tags/CHANGE_PAGINATION_PAGE',
    activePage: activePage,
  } as const),
  tagsIsUpdating: (isUpdating:boolean) => ({
    type: 'tags/IS_UPDATING',
    isUpdating
  } as const),
};

// Thunk Creator's
type ThunkType = BaseThunkType<ActionsTypes>;

export const getTagsTC = ():ThunkType => async(dispatch) => {
  const response = await tagsAPI.getAll();
  dispatch(actionsTags.setTags(response));
  dispatch(actionsTags.tagsIsUpdating(false));
};

export const getTagsByPaginationTC = (pageSize:number, offset: number | string):ThunkType => async(dispatch) => {
  const response: void | {data:Array<TagObjectType>, offset: string | number} = await tagsAPI.getByPagination(pageSize, offset);
  if(response) {
    const tagsArray:Array<TagObjectType>  = response.data;
    const offset: number | string = response.offset;
    dispatch(actionsTags.setTagsByPagination(tagsArray, offset));
    dispatch(actionsTags.tagsIsUpdating(false));
  }
  // todo: обработать ошибки
};

export default tagsReducer;
