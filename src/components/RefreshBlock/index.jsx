import React from 'react';
import style from './style.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSync } from '@fortawesome/free-solid-svg-icons';

const iconSync = <FontAwesomeIcon icon={faSync} size="1x" />;

// todo: реализовать средствами React - без перезагрузки страницы
// todo: move this function to helpers?
function refresh() {
  window.location.reload();
}

const RefreshBlock = () => {
  return (
    <div className={style.refreshBlock}>
      <button
        className={style.buttonIcon}
        alt="Хочу ещё!"
        title="Хочу ещё!"
        onClick={refresh}
      >
        {iconSync}
      </button>
    </div>
  );
};

export default RefreshBlock;
