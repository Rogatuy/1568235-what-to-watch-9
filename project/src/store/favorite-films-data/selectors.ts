import { NameSpace } from '../../const';
import { Movies } from '../../types/movie';
import { State } from '../../types/state';


export const getFavoriteFilmsList = (state: State): Movies => state[NameSpace.myList].myList;

