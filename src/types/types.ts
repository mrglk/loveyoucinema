export enum FilmActionTypes {
  GET_FILM = "GET_FILM",
}

export interface FilmState {
  film: {};
}

export interface getFilmAction {
  type: FilmActionTypes.GET_FILM;
  value: {};
}

export type FilmActon = getFilmAction;
