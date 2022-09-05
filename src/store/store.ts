import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import {
  FilmActionTypes,
  FilmActon,
  FilmState,
  getFilmAction,
} from "../types/types";

const preloadedState: FilmState = {
  film: {},
};

export const getFilm = (film: getFilmAction) => {
  return {
    type: FilmActionTypes.GET_FILM,
    value: film,
  };
};

const reducer = (state = preloadedState, action: FilmActon): FilmState => {
  const { type, value } = action;

  switch (type) {
    case FilmActionTypes.GET_FILM:
      return { film: value };
    default:
      return state;
  }
};

export const fetchFilm = async () => {
  let data = {
    action: "load",
    cat: 1,
  };

  let response = await fetch("https://loveyoucinema.com/script.php", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then((res) => res);

  if (!response.ok) {
    console.log("Ошибка");
  }
  const content = await response.json();

  return (dispatch: any) => {
    console.log(1);
    dispatch(getFilm(content));
  };
};

export const rootReducer = combineReducers({
  reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof reducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
