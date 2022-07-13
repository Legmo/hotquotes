import React from 'react';
import style from './style.module.scss';
import ListSidebar from '../Element_ListSidebar';
import PropTypes from 'prop-types';

const FiltersActive = (props) => {
  //todo: Здесь будут отображаться выбранные категории и авторы с возможностью удаления + счётчик подходящих цитат

  //todo: Пока единственные возможные фильтры - Автор и категория (нет фильтров по пользователям и т.д.), логику можно изменить. При клике по ссылке-фильтру (под цитатой или в боковой колонке): 1) у соответствующего раздела (Авторы/Категории) сборку от заголовка появляется/увеличивается счётчик; 2) название активного фильтра меняет цвет + насыщенность; 3) эта строка поднимается вверх списка (если их там уже несколько - выстраиваются по порядку); 4) если активных фильтров в списке стало больше Х - в списке появляется горизонтальная прокрутка; 5) при клике по строке активного фильтра он удаляется, а внизу появляется кнопка "вернуть фильтр Х"
  return props.filtersList ? (
    <ListSidebar
      filter = 'none'
      listItems = {props.filtersList}
      listName = 'FiltersActive'
      title = 'Удалить фильтр'
    />
  ) : (
    <p className = {style.filtersInfo}>Ни один фильтр не выбран.</p>
  );
};

FiltersActive.propTypes = {
  filtersList: PropTypes.string,
};

export default FiltersActive;
