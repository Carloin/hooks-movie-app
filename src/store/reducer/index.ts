import { type } from "os";
import React from "react";

/*
 * @Author: hft
 * @Date: 2021-10-12 12:03:11
 * @LastEditors: hft
 * @LastEditTime: 2021-10-12 15:28:10
 * @Description: file content
 */
export interface IReducer {
  loading: Boolean;
  movies: number[];
  errorMessage: null;
}
// interface IAction {
//   type: string;
//   payload: any;
//   error: string;
// }
export const initialState: IReducer = {
  loading: true,
  movies: [],
  errorMessage: null,
};
export type MovieState = {
  MovieState: IReducer;
};
export type MovieAction = {
  type: string;
  payload: any;
  error: string;
};
type MoviesReducer = React.Reducer<MovieState, MovieAction>;
export const reducer: MoviesReducer = (state, action) => {
  switch (action.type) {
    case "SEARCH_MOVIES_REQUEST":
      return {
        ...state,
        loading: true,
        errorMessage: null,
      };
    case "SEARCH_MOVIES_SUCCESS":
      return {
        ...state,
        loading: false,
        movies: action.payload,
      };
    case "SEARCH_MOVIES_FAILURE":
      return {
        ...state,
        loading: false,
        errorMessage: action.error,
      };
    default:
      return state;
  }
};
// export default reducer
