//-------------------------------------------
// Page templates
//-------------------------------------------
export const searchPageHtml : string = [
    '<!--Titel container-->',
    '<div id="jumbotron" class="jumbotron">',
    '<h1>Movie World</h1>',
    '</div>',
    '<div id="content" class="col-sm-16 text-left">',
    '</div>'
].join("\n");

export const ratingPageHtml : string = [
    '<!--Titel container-->',
    '<div id="jumbotron" class="jumbotron">',
    '<h1>Top 20 - Rating</h1>',
    '</div>',
    '<div id="content" class="col-sm-16 text-left">',
    '</div>'
].join("\n");

export const genrePageHtml : string = [
    '<!--Titel container-->',
    '<div id="jumbotron" class="jumbotron">',
    '<h1 id="title">Top 20 rated by genre</h1>',
    '</div>',
    '<div id="content" class="col-sm-16 text-left">',
    '</div>'
].join("\n");

export const popularPageHtml : string = [
    '<!--Titel container-->',
    '<div id="jumbotron" class="jumbotron">',
    '<h1>Top 20 - Popular</h1>',
    '</div>',
    '<div id="content" class="col-sm-16 text-left">',
    '</div>'
].join("\n");

export const soonPageHtml : string = [
    '<!--Titel container-->',
    '<div id="jumbotron" class="jumbotron">',
    '<h1>Coming soonr</h1>',
    '</div>',
    '<div id="content" class="col-sm-16 text-left">',
    '</div>'
].join("\n");

export const favPageHtml : string = [
    '<!--Titel container-->',
    '<div id="jumbotron" class="jumbotron">',
    '<h1>Favorites</h1>',
    '</div>',
    '<div id="content" class="col-sm-16 text-left">',
    '</div>'
].join("\n");

export const historyPageHtml : string = [
    '<!--Titel container-->',
    '<div id="jumbotron" class="jumbotron">',
    '<h1>Search history</h1>',
    '</div>',
    '<div id="content" class="col-sm-16 text-left">',
    '</div>'
].join("\n");


//-------------------------------------------
// Component templates
//-------------------------------------------
export const movieSearchInputHtml : string = [
    '<!--Search input-->',
    '<form>',
    '<input id="searchInput" class="form-control input-lg" type="text" placeholder="Search your movie">',
    '<button id="searchBtn" class="btn btn-sm btn-primary">Search</button>',
    '</form>'
].join("\n");

export const genreFilterHtml : string = [
    '<!--Genre filter-->',
    '<div id="genreFilter" class="dropdown">',
    '<button id="searchBtn" class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Select genre',
    '<span class="caret"></span>',
    '</button>',
    '</div>'
].join("\n");

export const searchHistoryFilter : string = [
    '<!--Filter-->',
    '<input class="form-control" id="filterInput" type="text" placeholder="Filter..">'
].join("\n");
