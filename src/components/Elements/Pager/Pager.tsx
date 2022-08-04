import React, { FC } from 'react';
import style from './style.module.scss';

type PropsType = {
  pageSize: number,
  activePage: number,
  changePage: (activePage:number) => void,
};
const Pager:FC<PropsType> = (props) => {

  const totalTagsCount = 26; //todo: получать totalTagsCount каким-то образом с сервера! Видимо делать обычный запрос без пагинации и высчитывать. Обычный запрос выдаёт не более 100 за раз, учесть
  const pagesCount = Math.ceil(totalTagsCount / props.pageSize);
  const pagesNumbersArray:Array<number> = [];
  for(let i = 1; i <= pagesCount; i++) {
    pagesNumbersArray.push(i);
  }

  //todo: разобраться с работой offset при листании назад
  //todo: настроить перелистывание при клике на произвольный номер страницы, а не только +1/-1

  return (
    <ul className = {style.pagerList}>
      {/*todo: сделать семантическую вёрстку. Подумать какие тэги семантически правильны для пейджера.*/}
      <li className = {style.pagerElement}>
        <input
          type = 'button'
          className = {style.pagerButton}
          onClick = {()=> props.changePage(
            (props.activePage > 1)
              ? props.activePage - 1
              : props.activePage
          )}
          value = '<'
        />
      </li>
      {pagesNumbersArray.map(number => {
        {/*todo: key fix*/}
        return <li
          key = {number}
          className = {style.pagerElement + ' ' + ((props.activePage === number) && style.selected)}
        >
          {number}
        </li>;
      })
      }
      <li className = {style.pagerElement}>
        <input
          type = 'button'
          className = {style.pagerButton}
          onClick = {()=> props.changePage(
            (props.activePage < pagesCount)
              ? props.activePage + 1
              : props.activePage
          )}
          value = '>'
        />
      </li>
    </ul>
  );
};

export default Pager;
