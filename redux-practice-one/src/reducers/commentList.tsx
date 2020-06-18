import { ACTION } from '../constants/index';
import { Comment, CommentListAction } from '../buildTypes';

export const commentList = (
  state: Comment[] = [],
  action: CommentListAction,
) => {
  switch (action.type) {
    case ACTION.FETCH_DATA_COMMENT:
      return action.commentList;
    default:
      return state;
  }
};
