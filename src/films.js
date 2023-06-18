// Exercise 1: Get the array of all directors.
const getAllDirectors = (array) => directors = array.map(movie => movie.director) //.map para recoger en directors un array nuevo con todos los nombres de los directores 

// Exercise 2: Get the films of a certain director
const getMoviesFromDirector = (array, director) => getDirector = array.filter(film => film.director === director)//.filter para filtrar las películas del array, segun el director que se le pase por parámetro

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  const myDirector = getMoviesFromDirector(array, director) //se llama a la funcion anterior para recoger las peliculas del director
  const score = myDirector.reduce((i, film) => i += film.score, 0)//.reduce para recogr solamente el valor "score" desde la posición 0
  const directorMedia = Number(score / myDirector.length).toFixed(2)//Se pasa a número el calculo del score div. por el largo del array que devuelve la primera función, y se fijan solo 2 decimales.
  return Number(directorMedia)
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
  const titles = array.map(movie => movie.title) //.map para recoger en un array todos los titulos de peliculas del array "movies"
  titles.sort() //.sort para ordenarlos por defecto alfabéticamente
  return titles.slice(0, 20) //.slice para devolver el array que se ha ordenado antes con sort, solo de la posicion 0 a la 20
}

// Exercise 5: Order by year, ascending
function orderByYear(array) {
  const sortedFilms = [...array].sort((a, b) => { //[...array] "Spread operator" crea una copia del array que llega por parametro, e interactua con este sin modificar el array principal.
    if (a.year === b.year) {
      return a.title.localeCompare(b.title) //ordena alfabeticamente por titulo si coinciden en el mismo año
    }
    return a.year - b.year //se devuelve por año de forma ascendente
  })
  return sortedFilms //se retorna el array trabajado sin haber modificado el original
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array, genre) {
  const filteredGenres = array.filter(film => film.genre.includes(genre) && film.score) //se filtran las peliculas según si incluyen el genero enviado, y su puntuación
  const totalScores = filteredGenres.reduce((i, film) => (i + film.score || 0), 0) //.reduce para recoger solo la totalidad de los valores de "score" desde posición 0
  const mediaScore = totalScores / filteredGenres.length || 1 //se calcula la media de las puntuaciones
  if (mediaScore === 7) { //si la media es = a 7... 
    return mediaScore //...devuelve 7
  }
  return Number(mediaScore.toFixed(2))//si no, se convierte a número y se deja con solo dos decimales
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(array) {
  const convertedMovies = array.map(movie => { //se utiliza .map para generar un array nuevo con las peliculas convertidas.
    const durationString = movie.duration //se guarda en una variable las duraciones de cada pelicula.
    const hoursMatch = durationString.match(/\d+h/) // se usa el metodo de Strings .match con una regex para buscar un patron de digitos seguidos de una letra "h"
    const minutesMatch = durationString.match(/\d+min/) // se usa el mismo .match, pero en este caso, el patrón seguido de "min"
    const hours = hoursMatch ? Number(hoursMatch[0].replace('h', '')) : 0 // se guarda en variable la coincidencia si es un número, y se utiliza .replace para sustituir la "h" por un '' si no, se asigna valor de 0
    const minutes = minutesMatch ? Number(minutesMatch[0].replace('min', '')) : 0 // se guarda en variable la coincidencia si es un número, y se utiliza .replace para sustituir el "min" por un '' si no, se asigna valor de 0
    const totalMinutes = hours * 60 + minutes //se hace el calculo pertinente para conseguir el total de minutos
    return { ...movie, duration: totalMinutes } // se devuelve un objeto nuevo, con la propiedad "duration" actualizada con el valor "totalMinutes"
  })
  return convertedMovies //se devuelve el array como resultado de la función
}

// Exercise 8: Get the best film of a year
function bestFilmOfYear(array, year) { //se le pasa por parametro a la funcion el array y el año
  const moviesOfYear = array.filter(movie => movie.year === year) //se guarda en una constante con .filter la pelicula que coincida con el año
  moviesOfYear.sort((a, b) => b.score - a.score) //se ordena el array nuevo con .sort de mayor a menos comparando los "score"
  return [moviesOfYear[0]] //se devuelve un array con las peliculas encontradas solo la posicion 0
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
