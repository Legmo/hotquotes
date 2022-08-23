import React from 'react';

type PropsType = {
  height?: number | undefined
  width?: number | undefined
  color?: string | undefined
}

//todo: make import color value from $color-blue-light-x
function PreloaderImg({height = 48, width = 48, color = '#8ec4fe'}:PropsType) {
  return (
    <svg
      xmlns = 'http://www.w3.org/2000/svg'
      width = {width}
      height = {height}
      version = '1'
      viewBox = '0 0 128 128'
    >
      <g>
        <linearGradient id = 'linear-gradient'>
          <stop offset = '0%' stopColor = '#fff'></stop>
          <stop offset = '100%' stopColor = {color}></stop>
        </linearGradient>
        <path
          fill = 'url(#linear-gradient)'
          fillRule = 'evenodd'
          d = 'M63.85 0A63.85 63.85 0 110 63.85 63.85 63.85 0 0163.85 0zm.65 19.5a44 44 0 11-44 44 44 44 0 0144-44z'
        ></path>
        <animateTransform
          attributeName = 'transform'
          dur = '1560ms'
          from = '0 64 64'
          repeatCount = 'indefinite'
          to = '360 64 64'
          type = 'rotate'
        ></animateTransform>
      </g>
    </svg>
  );
}

export default PreloaderImg;
