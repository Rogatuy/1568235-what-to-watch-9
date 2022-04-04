import { NameSpace } from '../../const';
import { Movies } from '../../types/movie';
import { State } from '../../types/state';


export const getSumilarFilmsList = (state: State): Movies => state[NameSpace.SimilarFilmsData].similarFilms;
export const getSimilarLoadedDataStatus = (state: State): boolean => state[NameSpace.SimilarFilmsData].isDataLoaded;
