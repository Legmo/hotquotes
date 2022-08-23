import { AppStateType } from './store';

export const getApp = (state:AppStateType) => {
  return state.app;
};
export const getAppIsInitialized = (state:AppStateType) => {
  return state.app.isInitialized;
};

export const getAuthors = (state:AppStateType) => {
  return state.authors;
};
export const getAuthorsAuthors = (state:AppStateType) => {
  return state.authors.authors;
};
export const getAuthorsIsUpdating = (state:AppStateType) => {
  return state.authors.isUpdating;
};

export const getQuotes = (state:AppStateType) => {
  return state.quotes;
};
export const getQuotesIsUpdating = (state:AppStateType) => {
  return state.quotes.isUpdating;
};

export const getSources = (state:AppStateType) => {
  return state.sources;
};
export const getSourcesSources = (state:AppStateType) => {
  return state.sources.sources;
};
export const getSourcesIsUpdating = (state:AppStateType) => {
  return state.sources.isUpdating;
};

export const getTags = (state:AppStateType) => {
  return state.tags;
};
export const getTagsTags = (state:AppStateType) => {
  return state.tags.tags;
};
export const getTagsIsUpdating = (state:AppStateType) => {
  return state.tags.isUpdating;
};
export const getTagsByPaginationTags = (state:AppStateType) => {
  return state.tags.tagsByPagination.tags;
};
export const getTagsByPaginationOffset = (state:AppStateType) => {
  return state.tags.tagsByPagination.offset;
};
export const getTagsByPaginationActivePage = (state:AppStateType) => {
  return state.tags.tagsByPagination.activePage;
};
export const getTagsByPaginationPageSize = (state:AppStateType) => {
  return state.tags.tagsByPagination.pageSize;
};