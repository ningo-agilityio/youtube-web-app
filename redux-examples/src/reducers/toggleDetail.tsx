import { ToggleAction } from '../buildTypes/buildTypes';
import { TOGGLE_DETAIL } from '../constants/constants';

export const toggleDetail = (state: boolean = false, action: ToggleAction) => {
  switch (action.type) {
    case TOGGLE_DETAIL:
      return !state;
    default:
      return state;
  }
};
