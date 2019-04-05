
// Main Menu Javascript



// Main Menu Selectors
const  LIST= document.querySelectorAll(".menu-margin > li:not(:last-child)");

const HAMBURGER = document.querySelector(".hamburger");

const MENU = document.querySelectorAll(".menu-margin > li:not(:last-child) > a");

const CLICKBURGER = document.querySelector(".click-hamburger");







//Hide the main menu when the page loads. 
// When the page is loaded, the hide class is added to each menu item so that the default (when javascript is not working) will be that the menu is visible.

LIST.forEach((item) => {
    item.classList.add("hide");
});



//Toggle main menu visibility
// Adds and removes the hide class on menu items when the hamburger menu is clicked.

function toggleHide(){
	LIST.forEach((item) => {
    	item.classList.toggle("hide");
	});
}



//Animate the hamburger menu
// Adds the active class to the hamburger menu causing it to change into a cross when clicked
function cross(){
	HAMBURGER.classList.toggle("active");
}



// highlight the active menu item
// The highlight class is added to the menu item of the current page
MENU.forEach( function(item) {
	if (item.innerHTML == page.classList.value){
		item.classList.add("highlight");
	}
})



// Mouse click event listeners
CLICKBURGER.addEventListener("click", toggleHide, false);
CLICKBURGER.addEventListener("click", cross, false);




