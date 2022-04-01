import { NameSpace } from '../../const';
import { Movie } from '../../types/movie';
import { State } from '../../types/state';


export const getFilmFull = (state: State): Movie => state[NameSpace.filmFullData].filmFull;
export const getFilmFullLoadedDataStatus = (state: State): boolean => state[NameSpace.filmFullData].isDataLoaded;
