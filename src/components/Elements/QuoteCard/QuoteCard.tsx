import React, { FC } from 'react';
import style from './style.module.scss';
import TagsListInline from '../ListTagsInline/ListTagsInline';
import { AuthorObjectType, QuoteObjectType } from '../../../types/types';

type PropsType = {
  quote: QuoteObjectType,
  author: AuthorObjectType,
  tags: Array<string>,
  source: string,
};

const QuoteCard:FC<PropsType> = ({quote, author, source, tags}) => {
  return (
    <>
      <figure className = {style.blockquoteContainer}>
        <blockquote data-id = {quote.id} className = {style.blockquote}>
          {quote.quoteText}
        </blockquote>
        <figcaption className = {style.blockquoteFooter}>
          <span className = {style.authorAndSource}>
            <span className = {style.author}>
              {author && author.name && author.surname ? (
                <span>
                  {author.name} {author.surname}
                </span>
              ) : (
                <span></span>
              )}
            </span>{' '}
            <cite className = {style.source}>
              {source && <span>«{source}»</span>}
            </cite>
          </span>
          {tags && <TagsListInline listItems = {tags} />}


        </figcaption>
      </figure>
    </>
  );
};

export default QuoteCard;
