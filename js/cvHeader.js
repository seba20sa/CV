/*GETTERS*/
var hideNavBar = document.getElementById('hide_social');
var showNavBar = document.getElementById('show_social');
var hiddenNavBar = document.getElementById('hidden_nav_bar');




/*LISTENERS*/
hideNavBar.addEventListener('click', hideBar);
showNavBar.addEventListener('click', showBar);






/*METHODS*/
function hideBar(e) {
    hiddenNavBar.style.display= 'none';
    showNavBar.style.display= 'block';
    
    
    e.preventDefault();
}
function showBar(e) {
    hiddenNavBar.style.display= 'flex';
    showNavBar.style.display= 'none';
    e.preventDefault();
} 

