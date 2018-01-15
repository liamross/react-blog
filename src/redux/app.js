import { LOCATION_CHANGE } from 'react-router-redux';

/* ACTIONS */

export const SET_NAV = 'app/SET_NAV';
export const TOGGLE_NAV = 'app/TOGGLE_NAV';

export const setNavAction = payload => ({
  type: SET_NAV,
  payload,
});

export const toggleNavAction = () => ({
  type: TOGGLE_NAV,
});

const defaultState = {
  navOpen: false,
};

/* REDUCER */

/**
 * REDUCER: Modifies the state.
 * @param {Object} state - The old state.
 * @param {Object} action - The action to apply to state.
 * @returns {Object} - Returns the new state.
 */
export default (state = defaultState, action) => {
  switch (action.type) {
    case LOCATION_CHANGE:
      return {
        ...state,
        navOpen: false,
      };
    case SET_NAV:
      return {
        ...state,
        navOpen: action.payload,
      };
    case TOGGLE_NAV:
      return {
        ...state,
        navOpen: !state.navOpen,
      };
    default:
      return state;
  }
};
