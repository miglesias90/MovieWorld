//-------------------------------------------
// The movie db constants
//-------------------------------------------
export let mockBeackend : boolean = true;

//-------------------------------------------
// The movie db constants
//-------------------------------------------
export const apiKey = '10c77adc26cfb49a366b96b68491ff77';

export const urlSearch = 'https://api.themoviedb.org/3/search/movie?api_key=' + apiKey + '&query=';
export const urlRating = 'https://api.themoviedb.org/3/movie/top_rated?api_key=' + apiKey + '&language=en-US';
export const urlByGenre = 'https://api.themoviedb.org/3/discover/movie?&api_key=' + apiKey + '&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=';
export const urlPopular = 'https://api.themoviedb.org/3/movie/popular?api_key=' + apiKey + '&language=en-US';
export const urlSoon = 'https://api.themoviedb.org/3/movie/upcoming?api_key=' + apiKey + '&language=en-US';

export const urlGetGenres = 'https://api.themoviedb.org/3/genre/movie/list?api_key=' + apiKey + '&language=en-US';

//-------------------------------------------
// backend constants
//-------------------------------------------
export const beBaseUrl = 'http://localhost:3000/';
export const urlGetFavs = beBaseUrl + 'favorites/get';
export const urlAddFav = beBaseUrl + 'favorite/add';
export const urlRemoveFav = beBaseUrl + 'favorite/remove';

export const urlGetHistory = beBaseUrl + 'history/get';
export const urlAddToHistory = beBaseUrl + 'history/add';