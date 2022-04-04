import { NameSpace } from '../../const';
import { Movie } from '../../types/movie';
import { State } from '../../types/state';


export const getFilmFull = (state: State): Movie => state[NameSpace.FilmFullData].filmFull;
export const getFilmFullLoadedDataStatus = (state: State): boolean => state[NameSpace.FilmFullData].isDataLoaded;
