

const MENU = document.querySelectorAll(".menu-margin a:not(:last-child)");

const HAMBURGER = document.querySelector(".hamburger");
MENU.forEach((item) => {
    console.log(item.classList.add("hide"));
});

const bars = HAMBURGER.querySelectorAll(".bar");

// When the hamburger is clicked, the hide class is added to the menu anchors
function toggleHide(){
	MENU.forEach((item) => {
    	item.classList.toggle("hide");
	});
}

// When the mouse goes over the hamburger, the bars change color
function highlight(){
	bars.forEach((item) => {
    	item.classList.toggle("highlight");
	});
}


HAMBURGER.addEventListener("click", toggleHide, false);

HAMBURGER.addEventListener("mouseover", highlight, false);

HAMBURGER.addEventListener("mouseout", highlight, false);

console.log("hi");