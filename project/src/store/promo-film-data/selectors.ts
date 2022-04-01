import { NameSpace } from '../../const';
import { Movie } from '../../types/movie';
import { State } from '../../types/state';


export const getPromoFilmList = (state: State): Movie => state[NameSpace.promoFilmData].promoFilm;
export const getPromoFiilmLoadedDataStatus = (state: State): boolean => state[NameSpace.promoFilmData].isDataLoaded;
