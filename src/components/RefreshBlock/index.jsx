import React from 'react';
import style from './style.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSync } from '@fortawesome/free-solid-svg-icons';

const iconSync = <FontAwesomeIcon icon={faSync} size="1x" />;

//todo: move this function to helpers?
function refresh() {
  window.location.reload();
}

const RefreshBlock = () => {
  return (
    <div className={style.refreshBlock + ' mt-5'}>
      <div className="d-block">
        <button
          className="btn d-block mx-auto"
          alt="Хочу ещё!"
          title="Хочу ещё!"
          onClick={refresh}
        >
          {iconSync}
        </button>
      </div>

      <div className="d-block text-center mt-2">
        {/*<CategoriesList categories={categoryListUniq}/>*/}
        <p className="font-weight-light text-muted mt-2 small">
          Здесь будут отображаться выбранные категории и авторы с возможностью
          удаления + счётчик подходящих цитат
        </p>
      </div>
    </div>
  );
};

export default RefreshBlock;
