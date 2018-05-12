//Import of third party library
import route from 'riot-route';
//Own imports
import * as pageController from "./page-controller";

//-------------------------------------------
// Public route functions
//-------------------------------------------
export function initRouting(){
	// Define routes
	route('/', function() {
		console.log('Route to home');
		//Render navigation
		resetNavBar();
		$('#searchMenu').addClass('active');

		//Render page
		resetPage();
		pageController.renderSearchView();
	});


	route('/search', function() {
		console.log('Route to search');
		//Render navigation
		resetNavBar();
		$('#searchMenu').addClass('active');

		//Render page
		resetPage();
		pageController.renderSearchView();
	});

	route('/rating', function() {
		console.log('Route to top20 rating');
		//Render navigation
		resetNavBar();
		$('#ratingMenu').addClass('active');
		$('#top20Menu').addClass('active');

		//Render page
		resetPage();
		pageController.renderRatingView();

	});

	route('/genre', function() {
		console.log('Route to top20 genre');
		//Render navigation
		resetNavBar();
		$('#genreMenu').addClass('active');
		$('#top20Menu').addClass('active');

		//Render page
		resetPage();
		pageController.renderGenreView();

	});

	route('/popular', function() {
		console.log('Route to top20 popular');
		//Render navigation
		resetNavBar();
		$('#popularMenu').addClass('active');
		$('#top20Menu').addClass('active');

		//Render page
		resetPage();
		pageController.renderPopularView();

	});

	route('/soon', function() {
		console.log('Route to soon');
		//Render navigation
		resetNavBar();
		$('#soonMenu').addClass('active');

		//Render page
		resetPage();
		pageController.renderSoonView();
	});

	route('/history', function() {
		console.log('Route to history');
		//Render navigation
		resetNavBar();
		$('#historyMenu').addClass('active');

		//Render page
		resetPage();
		pageController.renderHistoryView();
	});

	route('/fav', function() {
		console.log('Route to favorite');
		//Render navigation
		resetNavBar();
		$('#favMenu').addClass('active');

		//Render page
		resetPage();
		pageController.renderFavoritesView();
	});

	//Re-Start and ovserve for route actions
	route.stop();
	route.start(true);
}

export function doRouting(url) {
	route(url);
}


//-------------------------------------------
// Ui utils
//-------------------------------------------
function resetPage() {
	$('#view').html('');
}

function resetNavBar() {
	$('#searchMenu').removeClass('active');
	$('#top20Menu').removeClass('active');
	$('#ratingMenu').removeClass('active');
	$('#genreMenu').removeClass('active');
	$('#popularMenu').removeClass('active');
	$('#soonMenu').removeClass('active');
	$('#historyMenu').removeClass('active');
	$('#favMenu').removeClass('active');
}