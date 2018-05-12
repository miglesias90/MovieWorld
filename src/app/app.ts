//Import of third party library
import 'bootstrap';
import 'less';
//Import own css
import '../css/index.less';
//Own imports
import * as router from './routing';


// Define callback for routes
$(document).ready(function () {
    router.initRouting();

    // Register navigation callbacks
    $('#route-search').click(function() {
        router.doRouting('search');

    });
    $('#route-rating').click(function() {
        router.doRouting('rating');

    });
    $('#route-genre').click(function() {
        router.doRouting('genre');

        // genrePageController.renderPage();
    });
    $('#route-popular').click(function() {
        router.doRouting('popular');

    });
    $('#route-soon').click(function() {
        router.doRouting('soon');

    });
    $('#route-history').click(function() {
        router.doRouting('history');


    });
    $('#route-fav').click(function() {
        router.doRouting('fav');

    });

});

