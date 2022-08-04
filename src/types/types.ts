export type QuoteObjectType = {
  id: string,
  createdTime: string | null,
  quoteText: string,
  authorsId?: Array<string>,
  sourceId?: Array<string>,
  tagsId?: Array<string>,
}

export type AuthorObjectType = {
  id: string | null,
  createdTime: string | null,
  name: string,
  surname: string,
  quotesId?: Array<string>,
  sourcesId?: Array<string>
}

export type TagObjectType = {
  id: string | null,
  createdTime: string | null,
  title: string,
  quotesId?: Array<string>,
}

export type TagsByPaginationObjectType = {
  tags: Array<TagObjectType>,
  offset: number | string,
  activePage: number,
  pageSize: number,
};

export type SourceObjectType = {
  id: string | null,
  createdTime: string | null,
  title: string,
  quotesId?: Array<string>,
}

//todo: как правильно указать что объект может быть пустым? См. <FiltersActive filtersList = {[]} /> в src/components/Elements/Sidebar/Sidebar.tsx:92
export type SidebarListObjectType = {
  id?: string | null,
  title?: string,
  linkTitle?: string,
}