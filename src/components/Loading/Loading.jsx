import React from 'react';
import PropTypes from 'prop-types';
import Delay from 'react-delay';

import { LoadingIcon } from './LoadingIcon/LoadingIcon';

import './Loading.scss';

const propTypes = {
  message: PropTypes.string,
  wait: PropTypes.number,
};

const defaultProps = {
  message: '',
  wait: 500,
};

function Loading({ message, wait }) {
  return (
    <div className="Loading">
      <Delay wait={wait}>
        <div className={`Loading__icon${wait ? ' Loading__fadeIn' : ''}`}>
          <LoadingIcon />
        </div>
        <div className={`Loading__text${wait ? ' Loading__fadeIn' : ''}`}>
          {message}
        </div>
      </Delay>
    </div>
  );
}

Loading.propTypes = propTypes;
Loading.defaultProps = defaultProps;
export { Loading };
