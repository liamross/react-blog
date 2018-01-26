import React from 'react';
import PropTypes from 'prop-types';

import './ErrorPage.scss';

const propTypes = {
  errorPageMessage: PropTypes.string.isRequired,
  error: PropTypes.objectOf(PropTypes.node),
  useErrorDetails: PropTypes.bool,
  reloadButton: PropTypes.shape({
    title: PropTypes.string,
    onClick: PropTypes.func,
  }),
  backButton: PropTypes.shape({
    title: PropTypes.string,
    onClick: PropTypes.func,
  }),
};

const defaultProps = {
  error: null,
  useErrorDetails: false,
  reloadButton: null,
  backButton: null,
};

function ErrorPage({
  errorPageMessage,
  error,
  useErrorDetails,
  reloadButton,
  backButton,
}) {
  return (
    <div className="ErrorPage">
      <div className="ErrorPage__titleBlock">
        {error && error.status
          ? (
            <div
              className="ErrorPage__titleBlock__errorStatus"
              title={`Error code ${error.status}`}
            >
              {error.status}{'\u00A0\u00A0'}
            </div>
          )
          : ''
        }
        <div className="ErrorPage__titleBlock__errorMessage">
          {errorPageMessage}
        </div>
      </div>
      {useErrorDetails && error && error.statusText
        ? (
          <div className="ErrorPage__moreDetails">
            <div className="ErrorPage__moreDetails__expand">
              More Details
            </div>
            <div className="ErrorPage__moreDetails__statusText">
              {error.statusText}
            </div>
          </div>
        )
        : ''
      }
      {backButton || reloadButton
        ? (
          <div className="ErrorPage__buttons">
            {reloadButton &&
            <button
              tabIndex={0}
              onClick={reloadButton.onClick}
              className={'ErrorPage__buttons__button'
              + ' ErrorPage__buttons__button--primary'}
            >
              {reloadButton.title}
            </button>
            }
            {backButton &&
              <button
                tabIndex={0}
                onClick={backButton.onClick}
                className={'ErrorPage__buttons__button'
                + ' ErrorPage__buttons__button--secondary'}
              >
                {backButton.title}
              </button>
            }
          </div>
        )
        : ''
      }
    </div>
  );
}

ErrorPage.propTypes = propTypes;
ErrorPage.defaultProps = defaultProps;
export { ErrorPage };
