import { TagObjectType, TagsByPaginationObjectType } from '../types/types';

const SET_TAGS = 'SET_TAGS';
const SET_TAGS_IS_FETCHING         = 'SET_TAGS_IS_FETCHING';
const SET_TAGS_BY_PAGINATION = 'SET_TAGS_BY_PAGINATION';
const CHANGE_PAGE = 'CHANGE_PAGE';
const ADD_TAG = 'ADD_TAG';
const UPDATE_NEW_TAG_TEXT = 'UPDATE_NEW_TAG_TEXT';

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
    case SET_TAGS:
      return {
        ...state,
        tags: [
          ...action.tagsArray,
        ],
      };
    case SET_TAGS_BY_PAGINATION:
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
    case CHANGE_PAGE:
      return {
        ...state,
        tagsByPagination: {
          ...state.tagsByPagination,
          activePage: action.activePage,
        },
      };
    case UPDATE_NEW_TAG_TEXT:
      return {
        ...state,
        newTag: {
          ...state.newTag,
          title: action.newTitleText,
        },
      };
    case ADD_TAG:
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
    case SET_TAGS_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching,
      };
    default:
      return state;
  }
};

type ActionsTypes =
  SetTagsActionType |
  SetTagsByPaginationActionType |
  ChangePageActionType |
  AddNewTagActionType |
  UpdateNewTagTextActionType |
  SetTagsIsFetchingActionType;

//ActionCreator's

/*
todo: https://youtu.be/2yJXFMqEbJs

type ActionsTypes = any;
export const actions = {
  setTags: (tagsArray:Array<TagObjectType>) => ({
    type:      SET_TAGS,
    tagsArray: tagsArray,
  }),
  setTagsByPagination: (tagsArray:Array<TagObjectType>, offset: number | string) => ({
    type:      SET_TAGS_BY_PAGINATION,
    offset:    offset,
    tagsArray: tagsArray,
  }),
  changePage: (activePage:number) => ({
    type:       CHANGE_PAGE,
    activePage: activePage,
  }),
  addTag: ()=> ({
    type: ADD_TAG,
  }),
  updateNewTagText: (text:string) => ({
    type:         UPDATE_NEW_TAG_TEXT,
    newTitleText: text,
  }),
  setTagsIsFetching: (isFetching:boolean) => ({
    type: SET_TAGS_IS_FETCHING,
    isFetching
  }),
};
*/


type SetTagsActionType = {
  type: typeof SET_TAGS,
  tagsArray: Array<TagObjectType>,
};
export const setTags = (tagsArray:Array<TagObjectType>):SetTagsActionType => ({
  type:      SET_TAGS,
  tagsArray: tagsArray,
});

type SetTagsByPaginationActionType = {
  type: typeof SET_TAGS_BY_PAGINATION,
  offset: number | string,
  tagsArray: Array<TagObjectType>,
}
export const setTagsByPagination = (tagsArray:Array<TagObjectType>, offset: number | string):SetTagsByPaginationActionType => ({
  type:      SET_TAGS_BY_PAGINATION,
  offset:    offset,
  tagsArray: tagsArray,
});

type ChangePageActionType = {
  type: typeof CHANGE_PAGE,
  activePage: number,
}
export const changePage = (activePage:number):ChangePageActionType => ({
  type:       CHANGE_PAGE,
  activePage: activePage,
});

type AddNewTagActionType = {
  type: typeof ADD_TAG,
}
export const addTag = ():AddNewTagActionType => ({
  type: ADD_TAG,
});

type UpdateNewTagTextActionType = {
  type: typeof UPDATE_NEW_TAG_TEXT,
  newTitleText: string,
};
export const updateNewTagText = (text:string):UpdateNewTagTextActionType => ({
  type:         UPDATE_NEW_TAG_TEXT,
  newTitleText: text,
});

type SetTagsIsFetchingActionType = {
  type: typeof SET_TAGS_IS_FETCHING,
  isFetching: boolean
}
export const setTagsIsFetching = (isFetching:boolean):SetTagsIsFetchingActionType => ({
  type: SET_TAGS_IS_FETCHING,
  isFetching
});

export default tagsReducer;
