/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';

import './LoadingIcon.scss';

const propTypes = {
  className: PropTypes.string,
};

const defaultProps = {
  className: '',
};

function LoadingIcon({ className }) {
  return (
    <svg className={`LoadingIcon ${className}`} viewBox="0 0 71 56">
      <defs>
        <clipPath id="cut-off-top">
          <rect x="0" y="56" width="71" height="56">
            <animate
              attributeName="y"
              // Go from 0 (not clipped) to 70 (beyond fully clipped) and back
              // again. This is set beyond the distance needed to clip to
              // 'pause' when the cup is empty, as a way to match the SVG
              // animation's inherent 'pause' when the cup is full.
              values="0;70;0"
              dur="2s"
              repeatCount="indefinite"
            />
          </rect>
        </clipPath>
      </defs>

      {/* Coffee (animated) */}
      <path className="LoadingIcon__darkFill" clipPath="url(#cut-off-top)" d="M12.23,10.86c.07,1.18.16,2.36.27,3.52A13.77,13.77,0,0,1,22,18.44l0,19.51a13.87,13.87,0,0,1-3.08,2.32,44.35,44.35,0,0,0,7.52,12.08H52.9c7.59-8.32,13-23.58,14.15-41.5Z" />

      {/* Handle */}
      <path className="LoadingIcon__stroke LoadingIcon__lightFill" d="M19.33,20.61a10.75,10.75,0,1,0,0,15.18Z" />

      {/* Cup Color Fill */}
      <path className="LoadingIcon__lightFill" d="M8.93,1.17a121.32,121.32,0,0,0,.74,13.43,13.89,13.89,0,0,1,2.49-.22l.35,0h0C12.18,11,12,7.46,12,3.86H67.28c0,20.91-5.81,39.11-14.37,48.5H26.38a44.36,44.36,0,0,1-7.52-12.08h0l0,0a13.45,13.45,0,0,1-2.42,1.08A49.58,49.58,0,0,0,24.9,55.06H54.38c9.52-10.43,16-30.65,16-53.89Z" />

      {/* Cup Outline */}
      <g>
        <path className="LoadingIcon__stroke LoadingIcon__noFill" d="M22,18.44q-.46-.46-1-.88Q21.49,18,22,18.44Z" />
        <path className="LoadingIcon__stroke LoadingIcon__noFill" d="M20.84,38.93a13.88,13.88,0,0,0,1.09-1A13.85,13.85,0,0,1,20.84,38.93Z" />
        <path className="LoadingIcon__stroke LoadingIcon__noFill" d="M17.07,15.29c-.23-.09-.46-.18-.69-.26C16.61,15.11,16.84,15.2,17.07,15.29Z" />
        <path className="LoadingIcon__stroke LoadingIcon__noFill" d="M18.3,15.83c-.22-.11-.45-.23-.68-.33C17.86,15.6,18.08,15.72,18.3,15.83Z" />
        <path className="LoadingIcon__stroke LoadingIcon__noFill" d="M19.49,16.49c-.22-.14-.44-.28-.67-.41C19,16.21,19.27,16.35,19.49,16.49Z" />
        <path className="LoadingIcon__stroke LoadingIcon__noFill" d="M8.93,1.17a121.32,121.32,0,0,0,.74,13.43,13.89,13.89,0,0,1,2.49-.22c.31,0,.61,0,.92,0l-.57,0C12.18,11,12,7.46,12,3.86H67.28c0,20.91-5.81,39.11-14.37,48.5H26.38a44.36,44.36,0,0,1-7.52-12.08l.39-.24a13.74,13.74,0,0,1-2.83,1.29A49.58,49.58,0,0,0,24.9,55.06H54.38c9.52-10.43,16-30.65,16-53.89Z" />
        <path className="LoadingIcon__stroke LoadingIcon__noFill" d="M20.64,17.29c-.23-.18-.46-.36-.7-.52C20.18,16.93,20.41,17.12,20.64,17.29Z" />
        <path className="LoadingIcon__stroke LoadingIcon__noFill" d="M19.49,39.9a13.87,13.87,0,0,0,1.15-.8A13.84,13.84,0,0,1,19.49,39.9Z" />
        <path className="LoadingIcon__stroke LoadingIcon__noFill" d="M15.78,14.87c-.24-.06-.47-.13-.71-.18C15.31,14.74,15.55,14.8,15.78,14.87Z" />
        <path className="LoadingIcon__stroke LoadingIcon__noFill" d="M14.45,14.58l-.73-.11Z" />
        <path className="LoadingIcon__stroke LoadingIcon__noFill" d="M20.63,39.09l.21-.17Z" />
        <path className="LoadingIcon__stroke LoadingIcon__noFill" d="M19.24,40l.24-.15Z" />
        <path className="LoadingIcon__stroke LoadingIcon__noFill" d="M21,17.56l-.35-.27Z" />
        <path className="LoadingIcon__stroke LoadingIcon__noFill" d="M15.07,14.68l-.62-.11Z" />
        <path className="LoadingIcon__stroke LoadingIcon__noFill" d="M13.72,14.46l-.65,0Z" />
        <path className="LoadingIcon__stroke LoadingIcon__noFill" d="M16.38,15l-.59-.16Z" />
        <path className="LoadingIcon__stroke LoadingIcon__noFill" d="M18.82,16.08l-.51-.25Z" />
        <path className="LoadingIcon__stroke LoadingIcon__noFill" d="M19.94,16.77l-.45-.28Z" />
        <path className="LoadingIcon__stroke LoadingIcon__noFill" d="M17.63,15.5l-.56-.21Z" />
        <path className="LoadingIcon__stroke LoadingIcon__noFill" d="M26.38,52.36H52.9C61.47,43,67.28,24.77,67.28,3.86H12c0,3.6.17,7.11.5,10.51l.57,0,.65,0,.73.11.62.11c.24.05.47.12.71.18l.59.16c.24.08.46.17.69.26l.56.21c.23.1.45.22.68.33l.51.25c.23.13.45.27.67.41l.45.28c.24.16.47.35.7.52l.35.27q.5.42,1,.88l0,19.51a13.88,13.88,0,0,1-1.09,1l-.21.17a13.87,13.87,0,0,1-1.15.8l-.24.15-.39.24A44.36,44.36,0,0,0,26.38,52.36Z" />
      </g>
    </svg>
  );
}

LoadingIcon.propTypes = propTypes;
LoadingIcon.defaultProps = defaultProps;
export { LoadingIcon };
