/*
 * @Author: hft
 * @Date: 2021-10-12 11:32:08
 * @LastEditors: hft
 * @LastEditTime: 2021-10-12 11:37:18
 * @Description: file content
 */
import React from "react";
interface IMovie {
    Title: string
    Poster: string
    Year: string

}
interface MovieInfo {
    movie: IMovie
}
const DEFAULT_PLACEHOLDER_IMAGE: string =
    "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg";
const Movie = ({ movie }: MovieInfo) => {
    const poster =
        movie.Poster === "N/A" ? DEFAULT_PLACEHOLDER_IMAGE : movie.Poster;
    return (
        <div className="movie">
      <h2>{movie.Title}</h2>
      <div>
        <img
          width="200"
          alt={`The movie titled: ${movie.Title}`}
          src={poster}
        />
      </div>
      <p>({movie.Year})</p>
    </div>
    )
}
export default Movie