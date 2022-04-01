import { AuthorizationStatus } from './const';
export const MINUTE_IN_HOURS = 60;
const MILLISECOND_IN_SECOND = 1000;
const PROCENT = 100;
const FIX_PROCENT = 3;
const STAT_ELEMENT_IN_DATE = 11;
const END_ELEMENT_IN_DATE = 19;


export const isCheckedAuth = (authorizationStatus: AuthorizationStatus): boolean =>
  authorizationStatus === AuthorizationStatus.Unknown;

export const getTime = (runTimeItem: number, currentTimeItem: number) => (new Date(((runTimeItem * MINUTE_IN_HOURS) - currentTimeItem) * MILLISECOND_IN_SECOND).toISOString().substring(END_ELEMENT_IN_DATE, STAT_ELEMENT_IN_DATE).toString());

export const getPercent = (runTimeItem: number, currentTimeItem: number) => ((currentTimeItem * PROCENT) / (runTimeItem * MINUTE_IN_HOURS)).toFixed(FIX_PROCENT);
