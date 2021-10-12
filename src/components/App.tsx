/*
 * @Author: hft
 * @Date: 2021-10-12 10:34:03
 * @LastEditors: hft
 * @LastEditTime: 2021-10-12 15:40:10
 * @Description: file content
 */
import React, { useEffect, useReducer } from 'react';
import './App.css';
import Header from "./Header";
import Search from './Search';
import spinner from "../assets/ajax-loader.gif";
import axios from "axios";
import { initialState, reducer } from '../store/reducer';
import Movie from './Movie';
const MOVIE_API_URL: string = "https://www.omdbapi.com/?s=man&apikey=4a3b711b";

const App = () => {

  const [state, dispatch]: any = useReducer<any>(reducer, initialState);

  useEffect(() => {
    axios.get(MOVIE_API_URL).then((jsonResponse: any) => {
      dispatch({
        type: "SEARCH_MOVIES_SUCCESS",
        payload: jsonResponse.data.Search
      });
    });
  }, []);


  const refreshPage = () => {
    window.location.reload();
  };

  const search = (searchValue: any) => {
    dispatch({
      type: "SEARCH_MOVIES_REQUEST"
    });

    axios(`https://www.omdbapi.com/?s=${searchValue}&apikey=4a3b711b`).then(
      (jsonResponse: any) => {
        if (jsonResponse.data.Response === "True") {
          dispatch({
            type: "SEARCH_MOVIES_SUCCESS",
            payload: jsonResponse.data.Search
          });
        } else {
          dispatch({
            type: "SEARCH_MOVIES_FAILURE",
            error: jsonResponse.data.Error
          });
        }
      }
    );
  };
  const { movies, errorMessage, loading } = state;

  const retrievedMovies =
    loading && !errorMessage ? (
      <img className="spinner" src={spinner} alt="Loading spinner" />
    ) : errorMessage ? (
      <div className="errorMessage">{errorMessage}</div>
    ) : (
      movies.map((movie: any, index: any) => (
        <Movie key={`${index}-${movie.Title}`} movie={movie} />
      ))
    );
  return (
    <div className="App">
      <div className="m-container">
        <Header text="HOOKED-TS" />
        <Search search={search} />
        <p className="App-intro">Sharing a few of our favourite movies</p>
        <div className="movies">{retrievedMovies}</div>
      </div>
    </div>
  );
}

export default App;
