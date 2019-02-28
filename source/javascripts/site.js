// Main menu toggle


// selectors
const MENU = document.querySelectorAll(".menu-margin > li:not(:last-child) > a");

// const  LIST= document.querySelectorAll(".menu-margin > li:not(:last-child) > a");

const  LIST= document.querySelectorAll(".menu-margin > li:not(:last-child)");


const HAMBURGER = document.querySelector(".hamburger");

const CLICKBURGER = document.querySelector(".click-hamburger");

const DROPDOWN = document.querySelector("#levels ul");

const LEVELS = document.querySelector("#levels");

// When the page is loaded, the hide class is added to each menu item. The default (when javascript is not working) will be that the menu is visible.


LIST.forEach((item) => {
    item.classList.add("hide");
});



// Adds and removes the hide class from menu items so they are not visible when the hamburger menu is clicked.

function toggleHide(){
	LIST.forEach((item) => {
    	item.classList.toggle("hide");
	});
}


// Adds the active class to the hamburger menu causing it to change into a cross
function cross(){
	HAMBURGER.classList.toggle("active");
}


CLICKBURGER.addEventListener("click", toggleHide, false);
CLICKBURGER.addEventListener("click", cross, false);

CLICKBURGER.addEventListener("keypress", toggleHide, false);
CLICKBURGER.addEventListener("keypress", cross, false);











// highlight the menu item of the current page
let page = document.querySelector("content");



MENU.forEach( function(item) {
	if (item.innerHTML == page.classList.value){
		item.classList.add("highlight");
	}
})







// custom number slider
// let slider = document.getElementById("numberRange");

// let output = document.getElementById("numbers");

// output.innerHTML = slider.value;

// slider.oninput = function(){
// 	output.innerHTML = this.value;
// }


// custom digit slider
// let slider2 = document.getElementById("digitRange");

// let output2 = document.getElementById("digits");

// output2.innerHTML = slider2.value;

// slider2.oninput = function(){
// 	output2.innerHTML = this.value;
// }



// modal


let button = document.querySelector(".press-button button");
let modal = document.querySelector('#id01');
let modalCross = document.querySelector(".modal-x");



// open the modal when a button is clicked or enter pressed
function showModal(){
	console.log("showModal called");
	document.getElementById('id01').style.display='block';
	console.log("showModal complete");
}




button.addEventListener("click", showModal, false);
// button.addEventListener("keypress", showModal, false);



// close modal by clicking or pressing enter on the x
function closeModal(){
	console.log("closeModal called");
	document.getElementById('id01').style.display='none';
	console.log("done");
	
}

modalCross.addEventListener("click", closeModal, false);
// modalCross.addEventListener("keypress", closeModal, false);

console.log("hi");