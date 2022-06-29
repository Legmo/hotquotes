import React from 'react';
import style from './style.module.scss';
import { reduceToUniq } from '../../helpers';
import ListSidebar from '../ListSidebar';
import FiltersActive from '../FiltersActive';
import PropTypes from 'prop-types';

const Sidebar = (props) => {
  let quotesBase = props.quotes.quotes_base;

  //todo: Вынести эту логику в компонент, который будет готовить информацию из базы данных
  const dataReducer = (key) => {
    return quotesBase.map((quote) => quote[key]);
  };
  const listTagsFull = dataReducer('category');
  const listAuthorsFull = dataReducer('author');

  const listTagsReduce = listTagsFull.reduce(
    (flat, current) => flat.concat(current),
    []
  );
  const listAuthorsReduce = listAuthorsFull.reduce(
    (flat, current) => flat.concat(current),
    []
  );

  const listTags = reduceToUniq(listTagsReduce);
  const listAuthors = reduceToUniq(listAuthorsReduce);

  // todo: возможно стоит сделать функцию/компонент для генерация sidebar. Подумать
  return (
    <aside className={style.sidebar}>
      <section className={style.sectionSidebar + ' ' + style.sectionTags}>
        <h2 className={style.titleSidebar}>Категории</h2>
        <ListSidebar
          filter="none"
          listItems={listTags}
          listName="Tags"
          title="Добавить в фильтры"
        />
      </section>
      <section className={style.sectionSidebar + ' ' + style.sectionAuthors}>
        <h2 className={style.titleSidebar}>Авторы</h2>
        <ListSidebar
          filter="none"
          listItems={listAuthors}
          listName="Authors"
          title="Добавить в фильтры"
        />
      </section>
      <div>
        <section className={style.sectionSidebar + ' ' + style.sectionTags}>
          <h2 className={style.titleSidebar}>Активные фильтры</h2>
          <FiltersActive filtersList={''} />
        </section>
      </div>
    </aside>
  );
};

Sidebar.propTypes = {
  quotes:      PropTypes.object,
  quotes_base: PropTypes.array,
};

export default Sidebar;
