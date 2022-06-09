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
    <div className={style.refreshBlock}>
      <button
        className="btn d-block mx-auto"
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
