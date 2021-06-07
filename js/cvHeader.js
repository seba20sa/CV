/*GETTERS*/
var hideNavBar = document.getElementById('hide_social');
var showNavBar = document.getElementById('show_social');
var hiddenNavBar = document.getElementById('hidden_nav_bar');
/*LISTENERS*/
hideNavBar.addEventListener('click', hideBar);
showNavBar.addEventListener('click', showBar);
/*METHODS*/
function hideBar(e) {
    hiddenNavBar.style.display = 'none';
    showNavBar.style.display = 'inline';
    
    
    e.preventDefault();
}
function showBar(e) {
    hiddenNavBar.style.display = 'flex';
    hiddenNavBar.style.justifyContent = 'space-between';
    hiddenNavBar.style.margin = '0% 2%';
    
    showNavBar.style.display = 'none';
    e.preventDefault();
} 


