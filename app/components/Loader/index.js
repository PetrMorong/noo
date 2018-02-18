import React from 'react';
import { Wrap } from './styles';

export default function Loader() {
  return (
    <Wrap>
      <div className="material_block">
        <svg
          className="spinner"
          width="40px"
          height="40px"
          viewBox="0 0 66 66"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            className="circle"
            fill="none"
            strokeWidth="4"
            strokeLinecap="round"
            cx="33"
            cy="33"
            r="30"
          >
          </circle>
        </svg>
      </div>
    </Wrap>
  );
}
