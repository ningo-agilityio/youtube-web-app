import { ToggleAction } from '../buildTypes/buildTypes';
import { TOGGLE_FORM } from '../constants/constants';

export const toggleForm = (state: boolean = false, action: ToggleAction) => {
  switch (action.type) {
    case TOGGLE_FORM:
      return !state;
    default:
      return state;
  }
};
