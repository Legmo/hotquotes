import React from 'react';
import style from './style.module.scss';
import PropTypes from 'prop-types';

const ListFull = (props) => {
  const Items = props.listItems.map((props) => {
    /*    <li key = {props.id} className = {style.listItem} title = {props.title}>
     {props.name}
     </li>*/
    return (
      <li key = {props} className = {style.listItem}>
        {props}
      </li>
    );
  }
);
  const listClassName = 'list' + props.listName;

  return (
    <ul className = {style.listFull + ' ' + style[listClassName]}>{Items}</ul>
  );
};

ListFull.propTypes = {
  listItems: PropTypes.array,
  id:        PropTypes.number,
  title:     PropTypes.string,
  name:      PropTypes.string,
  listName:  PropTypes.string,
};

export default ListFull;
