import { NameSpace } from '../../const';
import { State } from '../../types/state';
import { Movies } from '../../types/movie';

export const getFilmsList = (state: State): Movies => state[NameSpace.filmsData].films;
export const getFilmsLoadedDataStatus = (state: State): boolean => state[NameSpace.filmsData].isDataLoaded;
