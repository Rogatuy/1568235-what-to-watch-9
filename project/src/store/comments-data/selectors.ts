import { NameSpace } from '../../const';
import { State } from '../../types/state';
import { Comments } from '../../types/comments';

export const getCommentsList = (state: State): Comments => state[NameSpace.commentsData].comments;
export const getCommentsLoadedDataStatus = (state: State): boolean => state[NameSpace.commentsData].isDataLoaded;
