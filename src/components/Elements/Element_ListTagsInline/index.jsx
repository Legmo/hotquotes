import React from 'react';
import style from './style.module.scss';
import PropTypes from 'prop-types';

const TagsListInline = (props) => {
  const listTagsInline = props.listItems.map((props) => (
/*    <li key = {props.id} className = {style.listItem} title = 'Добавить в фильтры'>
      {props.name}
    </li>*/
    <li key = {props} className = {style.listItem} title = 'Добавить в фильтры'>
      {props}
    </li>
  ));

  return <ul className = {style.list}>{listTagsInline}</ul>;
};

TagsListInline.propTypes = {
  listItems: PropTypes.array,
  id:        PropTypes.number,
  name:      PropTypes.string
};

export default TagsListInline;
