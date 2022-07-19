const SET_TAGS = 'SET_TAGS';
const SET_TAGS_BY_PAGINATION = 'SET_TAGS_BY_PAGINATION';
const CHANGE_PAGE = 'CHANGE_PAGE';
const ADD_NEW_TAG = 'ADD_NEW_TAG';

let initialState = {
  tags:             [],
  newTagName:       '',
  tagsByPagination: { 
    tags:       [],
    offset:     0,
    activePage: 1,
    pageSize:   10,
  },
};

const tagsReducer = (state = initialState, action) => {
  let newElement = {
    title: state.newTagName,
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
    default:
      return state;
  }
};

//ActionCreator's
export const setTagsAC = (tagsArray) => ({
  type:      SET_TAGS,
  tagsArray: tagsArray,
});

export const setTagsByPaginationAC = (tagsArray, offset) => ({
  type:      SET_TAGS_BY_PAGINATION,
  offset:    offset,
  tagsArray: tagsArray,
});

export const changePageAC = (activePage) => ({
  type:       CHANGE_PAGE,
  activePage: activePage,
});

export const addNewTagTextAC = (tagName) => ({
  type:       ADD_NEW_TAG,
  newTagName: tagName,
});

export default tagsReducer;
