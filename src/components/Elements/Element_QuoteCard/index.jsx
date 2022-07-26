import React from 'react';
import PropTypes from 'prop-types';
import style from './style.module.scss';
import TagsListInline from '../../Elements/Element_ListTagsInline';
import ButtonCopyToClipboard from '../Element_ButtonCopyToClipboard';

const FormAddQuote = (props) => {
  const quote = props.quote;
  const author = props.author;
  const quoteSource = props.quoteSource;
  const tags = props.tags;

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
              {quoteSource && <span>«{quoteSource}»</span>}
            </cite>
          </span>
          {tags && <TagsListInline listItems = {tags} />}


        </figcaption>
      </figure>
    </>
  );
};

FormAddQuote.propTypes = {
  quote:       PropTypes.object,
  author:      PropTypes.object,
  tags:        PropTypes.array,
  source:      PropTypes.string,
  quoteSource: PropTypes.string,
};

export default FormAddQuote;
