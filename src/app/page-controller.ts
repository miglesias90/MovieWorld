//Import of third party library
import get = Reflect.get;
//Own imports
import {DefaultMovieModel} from "./model/movie/movie-model";
import {DefaultHistoryModel} from "./model/history/history-model";

import {Genre} from "./model/genre/Genre";
import {Movie} from "./model/movie/Movie";
import {SearchHistory} from "./model/history/SearchHistory";

import * as templates from './view/templates';
import * as constants from './constants';
import {mockBeackend} from "./constants";

//-------------------------------------------
// Globals
//-------------------------------------------
const movieModel = new DefaultMovieModel();
const historyModel = new DefaultHistoryModel();

//Mock Backend Data
const favoriteList : Movie [] = [];
const historyList : SearchHistory [] = [];

//-------------------------------------------
// Model change event
//-------------------------------------------
$(movieModel).on('modelchange', () => {
    //Reset result list
    $('#content').html('');
    //Display result
    renderMovieList();
});

$(historyModel).on('modelchange', () => {
    //Reset result list
    $('#content').html('');
    //Display result
    renderHistoryList();
});

//-------------------------------------------
// Page rendering
//-------------------------------------------
export function renderSearchView() {
    //Load  page template
    $('#view').append(templates.searchPageHtml);

    //Render search input
    renderMovieSearchInput();
}

export function renderRatingView() {
    //Load and generate page template
    $('#view').append(templates.ratingPageHtml);

    //Get Movies
    getMovies(constants.urlRating);
}

export function renderGenreView() {
    //Load  page template
    $('#view').append(templates.genrePageHtml);

    //Render genre filter
    renderGenreFilter();
}

export function renderPopularView() {
    //Load and generate page template
    $('#view').append(templates.popularPageHtml);

    //Get Movies
    getMovies(constants.urlPopular);

}

export function renderSoonView() {
    //Load and generate page template
    $('#view').append(templates.popularPageHtml);

    //Get Movies
    getMovies(constants.urlSoon);
}

export function renderFavoritesView() {
    $('#view').append(templates.ratingPageHtml);

    getFavoriteMovies();
}

export function renderHistoryView() {
    //Load  page template
    $('#view').append(templates.historyPageHtml);

    //Render Filter
    renderHistoryFilter();

    //Get Search History
    getHistory();
}


//-------------------------------------------
//Components rendering
//-------------------------------------------
function renderMovieSearchInput() {
    //Load and generate input and button template
    $('#jumbotron').append(templates.movieSearchInputHtml);

    //Define search action
    $('#searchBtn').on( 'click' , () => {
        doSearch();
    } );
}

function renderGenreFilter() {

    //Load filter template
    $('#jumbotron').append(templates.genreFilterHtml);

    //Get genres and render DropDown
    var ul = $('<ul>').appendTo('#genreFilter').addClass('dropdown-menu').attr('id', 'dropdown-menu');
    $.get(constants.urlGetGenres, (data) => {
        const genres = data.genres;

        for (const genre of genres) {
            var li = $('<li>').appendTo(ul);

            $('<a>').appendTo(li).text(genre.name)
                .on( 'click' , () => {
                    //Change jumbotron title
                    $('#title').text('Top 20 rated - ' + genre.name);
                    //Search movies
                    doSearchByFilter(genre);
                } );
        }
    });
}

function renderHistoryFilter() {
    //Load and generate input and button template
    $('#jumbotron').append(templates.searchHistoryFilter);

    $('#filterInput').on( 'keyup' , () => {
        filterHistory();
    } );
}

function renderMovieList() {
    //Generate container for results
    var panelGroup = $('<div>').appendTo('#content')
        .attr('id', 'panel-group')
        .addClass('panel-group');


    var counter = 1;
    //Generate eache movie record
    for (const movie of movieModel.movieList) {
        //Generate panel for movie
        var panel = $('<div>').appendTo(panelGroup)
            .addClass('panel panel-default');

        //Generate panel header
        var panelHeader = $('<div>').appendTo(panel)
            .addClass('panel-heading');

        var h4 = $('<h4>').appendTo(panelHeader)
            .addClass('panel-title');

        //Generate title
        $('<a>').appendTo(h4)
            .attr('data-toggle', 'collapse')
            .attr('data-parent', '#panel-group')
            .attr('title', 'Click for details')
            .attr('href', '#collapse_' + counter)
            .text(movie.title);

        //Generate favorite button
        var favBtn = $('<a>').appendTo(h4)
            .attr('id','btn'+movie.id)
            .addClass('pull-right');

        var span = $('<span>').appendTo(favBtn);

        if (!isMovieFavorite(movie.id)) {
            favBtn.text('Add to Favorite').on( 'click' , () => {
                addMovieToFavorite(movie.id);
                //Reset result list
                $('#content').html('');
                //Display result
                renderMovieList();
            } );
        } else {
            favBtn.text('Remove from Favorite').on( 'click' , () => {
                removeMovieFromFavorite(movie.id);
                //Reset result list
                $('#content').html('');
                //Display result
                renderMovieList();

            } );
        }

        //Generate movie details - panel body
        var panelCollapse = $('<div>').appendTo(panel)
            .attr('id', 'collapse_' + counter)
            .addClass('panel-collapse collapse');

        //If ist first entry add class to be collapsed
        if(counter == 1 ) {
            panelCollapse.addClass('in')
        }

        var panelBody = $('<div>').appendTo(panelCollapse)
            .addClass('panel-body');

        //Display details of movie
        $('<img>').appendTo(panelBody).attr('src', 'http://image.tmdb.org/t/p/w185/'+movie.poster_path);

        $('<p>').appendTo(panelBody).text('Release date: ' + movie.release_date);
        $('<p>').appendTo(panelBody).text('Votes: : ' + movie.vote_count);
        $('<p>').appendTo(panelBody).text('Rating: ' + movie.vote_average);
        $('<p>').appendTo(panelBody).text(movie.overview);

        counter++;
    }
}

function renderHistoryList() {
    //Check if has history
    if(historyModel.historyList.length > 0) {
        //Generate container for results
        var table = $('<table>').appendTo('#content')
            .addClass('table table-bordered table-striped');

        var thead = $('<thead>').appendTo(table);

        var tr = $('<tr>').appendTo(thead);

        var th1 = $('<th>').appendTo(tr)
            .text("Search Input");
        var th2 = $('<th>').appendTo(tr)
            .text("Results");

        var tbody = $('<tbody>').appendTo(table);


        //Render search history entries
        for (const history of historyModel.historyList) {
            var trBody = $('<tr>').appendTo(tbody);

            var td1 = $('<td>').appendTo(trBody)
                .text(history.searchStr);
            var td2 = $('<td>').appendTo(trBody)
                .text(history.searchResults);
        }
    } else {
        //Generate no history display
        var table = $('<h3>').appendTo('#content')
            .text('No results');
    }


}


//-------------------------------------------
//Component actions
//-------------------------------------------
function doSearch() {
    const searchStr = $( '#searchInput' ).val();
    if (searchStr != '') {
        //Get Movies by string
        getMovies(constants.urlSearch + searchStr);
    }
}

function doSearchByFilter(genre : Genre) {
    //Get Movies by genre
    getMovies(constants.urlByGenre + genre.id);
}

function filterHistory() {
    //TODO implement
}


//-------------------------------------------
//Data access movie db
//-------------------------------------------
function getMovies(url : string) {
    movieModel.resetMovieList();

    $.get(url, (data) => {

        const movies = data.results;

        for (const movie of movies) {
            movieModel.addMovie(movie);
        }

        //if is a manuel search save in history
        const searchStr = $( '#searchInput' ).val();
        if (!(typeof searchStr === 'undefined')) {
            addToHistory(searchStr.toString(), data.total_results);
        }
    });
}


//-------------------------------------------
//data access backend
//-------------------------------------------
function getFavoriteMovies() {
    movieModel.resetMovieList();


    if(mockBeackend) {
        //Mock
        for (const movie of favoriteList) {
            movieModel.addMovie(movie);
        }
    } else {
        //Backend access
        $.get(constants.urlGetFavs, (data) => {
            const favoriteMovies = data;
            for (const movie of favoriteMovies) {
                movieModel.addMovie(movie.movie);
            }
        });
    }

}

function isMovieFavorite(id : any){
    if(mockBeackend) {
        //Mock
        for (const movie of favoriteList) {
            if (movie.id == id) {
                return true;
            }
        }
    } else {
        //Backend access
        $.get(constants.urlGetFavs, (data) => {
            const favoriteMovies = data;
            for (const movie of favoriteMovies) {
                if (movie.id == id) {
                    return true;
                }
            }
        });

    }

}

function addMovieToFavorite(id : any) {

    //Check if movie already exists
    if(isMovieFavorite(id)) {
        console.log('Add Favorite: Movie arlready is Favorite');
    } else {
        //Mock
        if(mockBeackend) {
            var movie = movieModel.getMovie(id);

            favoriteList.push(movie);
        } else {
            //Backend access

            var movie = movieModel.getMovie(id)

            $.post(constants.urlAddFav, (movie));
        }
    }
}

function removeMovieFromFavorite(id : any) {
    if(mockBeackend) {
        //Mock
        for (const movie of favoriteList) {
            if (movie.id == id) {
                var index = favoriteList.indexOf(movie);
                if (index != -1) {
                    console.log("splice");
                    movieModel.movieList.splice(index, 1);
                }

            }
        }
    } else {
        //Backend access
        var movie = movieModel.getMovie(id);
        $.post(constants.urlRemoveFav, (movie), (response)=> {
            if(response == 'success') {
                renderFavoritesView();
            }
        });
    }

}

function getHistory() {
    historyModel.resetHistoryList();

    //Mock
    if(mockBeackend) {
        for (const searchHistory of historyList) {
            historyModel.addHistoryEntry(searchHistory)
        }
    } else {
        //Backend
        $.get(constants.urlGetHistory, (data) => {
            const searchHistory = data;

            for (const searchEntry of searchHistory) {
                historyModel.addHistoryEntry(searchEntry);
            }
        });


    }

}

function addToHistory(searchStr : string, searchResults : number) {
    if(mockBeackend) {
        //Mock
        historyList.push(new SearchHistory(searchStr, searchResults));
    } else {
        //Backend
        $.post(constants.urlAddToHistory, (new SearchHistory(searchStr, searchResults)));
    }
}



