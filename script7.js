/*jshint esversion: 8 */
const numberOfFilms = prompt("Сколько фильмов вы посмотрели? ");



const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false

};



const lastFilm1 = prompt("Один из просмотренных фильмов? ");
const lastFilm2 = prompt("Один из просмотренных фильмов? ");
const rate1 = prompt("На сколько оцените его? ");
const rate2 = prompt("На сколько оцените его? ");


personalMovieDB.movies[lastFilm1] = rate1;
personalMovieDB.movies[lastFilm2] = rate2;

console.log(personalMovieDB);