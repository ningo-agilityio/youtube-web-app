import { ToggleAction } from 'buildTypes';
import { ACTION } from 'constants/index';

export const toggleForm = (state: boolean = false, action: ToggleAction) => {
  switch (action.type) {
    case ACTION.TOGGLE_FORM:
      return !state;
    default:
      return state;
  }
};
