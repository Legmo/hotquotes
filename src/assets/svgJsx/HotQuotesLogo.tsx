import React from 'react';

type PropsType = {
  height?: number | undefined
  width?: number | undefined
}

function HotQuotesLogo({height = 18, width = 18}:PropsType) {

  return (
    <svg
      xmlns = 'http://www.w3.org/2000/svg'
      width = {width}
      height = {height}
      x = '0'
      y = '0'
      enableBackground = 'new 0 0 46 44.3'
      version = '1.1'
      viewBox = '0 0 46 44.3'
      xmlSpace = 'preserve'
    >
      <path
        fill = '#FFF'
        stroke = '#0079FE'
        strokeMiterlimit = '10'
        strokeWidth = '1.859'
        d = 'M45 20c0 10.5-9.8 19-22 19-2.1 0-4.1-.2-6-.7 0 0-3.8 4.7-10 4.7 3-4.3 3-7.7 3-7.7-5.5-3.5-9-9-9-15.3C1 9.5 10.8 1 23 1s22 8.5 22 19z'
      ></path>
      <path
        fill = '#FE0036'
        d = 'M14.6 13h6v7c-.2 4.6-2.6 7-6 8.5v-3.3c1.5-.9 2.8-2.2 3-5.1h-3V13zM25.7 13h6v7c-.2 4.6-2.6 7-6 8.5v-3.3c1.5-.9 2.8-2.2 3-5.1h-3V13z'
      ></path>
    </svg>
  );
}

export default HotQuotesLogo;