const SET_TAGS = 'SET_TAGS';
const SET_TAGS_IS_FETCHING         = 'SET_TAGS_IS_FETCHING';
const SET_TAGS_BY_PAGINATION = 'SET_TAGS_BY_PAGINATION';
const CHANGE_PAGE = 'CHANGE_PAGE';
const ADD_NEW_TAG = 'ADD_NEW_TAG';

type TagObjectType = {
  createdTime: string | null,
  id: string | null,
  title: string
}

type TagsByPaginationObjectType = {
  tags: Array<TagObjectType>,
  offset: number,
  activePage: number,
  pageSize: number,
};

const initialState = {
  tags:             [] as Array<TagObjectType>,
  newTagName:       '' as string | null,
  isFetching:       false,
  tagsByPagination: { 
    tags:       [],
    offset:     0,
    activePage: 1,
    pageSize:   10,
  } as TagsByPaginationObjectType,
};

export type InitialStateType = typeof initialState;

const tagsReducer = (state = initialState, action:any):InitialStateType => {
  const newElement = {
    createdTime: null,
    id:          null,
    title:       state.newTagName as string,
  };

  switch (action.type) {
    case SET_TAGS:
      return {
        ...state,
        tags: [
          ...action.tagsArray
        ],
        newTagName: ''
      };
    case SET_TAGS_BY_PAGINATION:
      return {
        ...state,
        tagsByPagination: {
          ...state.tagsByPagination,
          tags: [
            ...action.tagsArray
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
    case ADD_NEW_TAG:
      newElement.title = action.newTagName;
      return {
        ...state,
        tags: [
          ...state.tags,
          newElement
        ]
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

//ActionCreator's
type SetTagsActionType = {
  type: typeof SET_TAGS,
  tagsArray: Array<TagObjectType>,
};
export const setTags = (tagsArray:Array<TagObjectType>):SetTagsActionType => ({
  type:      SET_TAGS,
  tagsArray: tagsArray,
});

type SetTagsByPaginationActionType = {
  type: string,
  offset: number,
  tagsArray: Array<object>,
}
export const setTagsByPagination = (tagsArray:Array<object>, offset:number):SetTagsByPaginationActionType => ({
  type:      SET_TAGS_BY_PAGINATION,
  offset:    offset,
  tagsArray: tagsArray,
});

type ChangePageActionType = {
  type: string,
  activePage: number,
}
export const changePage = (activePage:any):ChangePageActionType => ({
  type:       CHANGE_PAGE,
  activePage: activePage,
});

type AddNewTagTextActionType = {
  type: string,
  newTagName: string,
}
export const addNewTagText = (tagName:string):AddNewTagTextActionType => ({
  type:       ADD_NEW_TAG,
  newTagName: tagName,
});

type SetTagsIsFetchingActionType = {
  type: string,
  isFetching: boolean
}
export const setTagsIsFetching = (isFetching:boolean):SetTagsIsFetchingActionType => ({
  type: SET_TAGS_IS_FETCHING,
  isFetching
});

export default tagsReducer;
