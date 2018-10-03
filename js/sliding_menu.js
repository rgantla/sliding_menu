var booksCheck = false;

var moviesMusicGamesCheck = false;
var moviesCheck = false;
var musicCheck = false;
var gamesCheck = false;

var electronicsCheck = false;
var cellPhonesCheck = false;
var cellPhoneBrandsCheck = false;
var headPhonesCheck = false;
var headPhoneBrandsCheck = false;
var wirelessBudsBrandsCheck = false;
var wirelessSpeakersCheck = false;
var wirelessSpeakerBrandsCheck = false;

function showClose() {
  document.getElementById('dt-close-nav').style.display = 'inline';
};

function hideClose() {
  document.getElementById('dt-close-nav').style.display = 'none';
};

function uncheckboxes() {
    document.getElementById('booksAndAudible').checked = false;
    booksCheck = false;

    document.getElementById('movies').checked = false;
    moviesCheck = false;
    document.getElementById('music').checked = false;
    musicCheck = false;
    document.getElementById('games').checked = false;
    gamesCheck = false;
    document.getElementById('moviesMusicGames').checked = false;
    moviesMusicGamesCheck = false;
    
    document.getElementById('cellPhoneBrands').checked = false;
    cellPhoneBrandsCheck = false;
    document.getElementById('cellPhones').checked = false;
    cellPhonesCheck = false;
    document.getElementById('headPhoneBrands').checked = false;
    headPhoneBrandsCheck = false;
    document.getElementById('wirelessBudsBrands').checked = false;
    wirelessBudsBrandsCheck = false;
    document.getElementById('headPhones').checked = false;
    headPhonesCheck = false;
    document.getElementById('wirelessSpeakerBrands').checked = false;
    wirelessSpeakerBrandsCheck = false;
    document.getElementById('wirelessSpeakers').checked = false;
    wirelessSpeakersCheck = false;
    document.getElementById('electronics').checked = false;
    electronicsCheck = false;
    hideClose();
}