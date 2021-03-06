'use strict';

const DEFAULT = {
  id: 'inbox',
  name: 'inbox',
  type: null,
  data: null,
  rightButton: null,
  onFavoriteHandler: null
};

export default function appStateReducers(state = DEFAULT, action) {
  switch (action.type) {
    case 'APP_STATE_PUSH':
      return Object.assign({}, state, {
        id: action.id,
        name: action.name,
        type: 'push',
        data: action.data,
        rightButton: action.rightButton,
        onFavoriteHandler: action.onFavoriteHandler
      });

    case 'APP_STATE_POP':
      return Object.assign({}, state, {
        id: action.id,
        type: 'pop',
        data: null,
        rightButton: null,
        onFavoriteHandler: null
      });

    default:
      return state;
  }
};
