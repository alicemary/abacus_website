

// Main menu toggle

// selectors
const MENU = document.querySelectorAll(".menu-margin > li:not(:last-child) > a");


const  LIST= document.querySelectorAll(".menu-margin > li:not(:last-child)");


const HAMBURGER = document.querySelector(".hamburger");

const CLICKBURGER = document.querySelector(".click-hamburger");

const DROPDOWN = document.querySelector("#levels ul");

const LEVELS = document.querySelector("#levels");

let practiceQuestions = [[1, 23456, 23456, 23456, 23456, 23456, 23456], [2, 23456, 23456, 23456, 23456, 23456, 23456], [3, 23456, 23456, 23456, 23456, 23456, 23456], [4, 23456, 23456, 23456, 23456, 23456, 23456], [5, 23456, 23456, 23456, 23456, 23456, 23456], [6, 23456, 23456, 23456, 23456, 23456, 23456], [7, 23456, 23456, 23456, 23456, 23456, 23456], [8, 23456, 23456, 23456, 23456, 23456, 23456], [9, 23456, 23456, 23456, 23456, 23456, 23456], [10, 23456, 23456, 23456, 23456, 23456, 23456], [11, 23456, 23456, 23456, 23456, 23456, 23456], [12, 23456, 23456, 23456, 23456, 23456, 23456], [13, 23456, 23456, 23456, 23456, 23456, 23456], [14, 23456, 23456, 23456, 23456, 23456, 23456], [15, 23456, 23456, 23456, 23456, 23456, 23456], [16, 23456, 23456, 23456, 23456, 23456, 23456], [17, 23456, 23456, 23456, 23456, 23456, 23456], [18, 23456, 23456, 23456, 23456, 23456, 23456], [19, 23456, 23456, 23456, 23456, 23456, 23456], [20, 23456, 23456, 23456, 23456, 23456, 23456]];

let exteriorTable = document.querySelectorAll(".exterior-table");

let slider2 = document.getElementById("digitRange");

let output2 = document.getElementById("digits");



let exterior = document.querySelectorAll(".exterior-table")

let page = document.querySelector("content");

let slider = document.getElementById("numberRange");

let output = document.getElementById("numbers");

let beginner = document.querySelectorAll(".beginner");

let intermediate = document.querySelectorAll(".intermediate");

let advanced = document.querySelectorAll(".advanced");



let button = document.querySelectorAll(".press-button button");
let modal = document.querySelector('#id01');
let modalCross = document.querySelector(".modal-x");

// checkboxes
const DIRECT = document.querySelector('#direct');
const PULLBREAK = document.querySelector('#pull-break');
const CARRYBORROW = document.querySelector('#carry-borrow');


let metaTextBox = document.querySelector('.intro section');

let printPage = document.querySelector("#print");
		
// Main Menu

//Hide the main menu when the page loads. 
// When the page is loaded, the hide class is added to each menu item so that the default (when javascript is not working) will be that the menu is visible.

LIST.forEach((item) => {
    item.classList.add("hide");
});


//Toggle the main menu visibility
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


// Main menu event listeners

// mouse clicks
CLICKBURGER.addEventListener("click", toggleHide, false);
CLICKBURGER.addEventListener("click", cross, false);

// key presses
CLICKBURGER.addEventListener("keypress", toggleHide, false);
CLICKBURGER.addEventListener("keypress", cross, false);

















// modal






// open the modal when a button is clicked or enter pressed
function showModal(){

	document.getElementById('id01').style.display='block';


	// document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;




}



// make footer stick to the bottom of the page when there is not much content.

// console.log(document.querySelector(".entire-content").clientHeight);

// document.querySelector(".entire-content").style.height = document.querySelector("body").clientHeight.toString() + "px";
// 	console.log(document.querySelector(".modal").clientHeight);



button.forEach((item) => {
	item.addEventListener("click", showModal, false);
});


// button.addEventListener("keypress", showModal, false);



// close modal by clicking or pressing enter on the x and clear the question tables
function closeModal(){
	document.getElementById('id01').style.display='none';

	let allTables = document.querySelectorAll("table");
	for (let item of allTables){
		item.remove();
	};

	document.querySelector(".intro section h2").remove();
	document.querySelector(".intro section p").remove();

	// title.remove();
	// info.remove();
	
}

modalCross.addEventListener("click", closeModal, false);
// modalCross.addEventListener("keypress", closeModal, false);









let addText = function(title, info){
	// console.log("add text function");
	// console.log(title + info);
	let newHeader = document.createElement("h2");
	let newInfo = document.createElement("p");

	newHeader.innerHTML = title;
	newInfo.innerHTML = info;

	metaTextBox.appendChild(newHeader);	
	metaTextBox.appendChild(newInfo);

};

let tableClass = function(digitsPerNumber){
	console.log("tableClass function");
	let table = document.querySelectorAll("table");
	if (digitsPerNumber > 5){
		table.forEach( function(item) {
			item.classList.add("big-table");
		});	
	} else{
		table.forEach( function(item) {
			item.classList.remove("big-table");
		});
	}
};



// Put an array of Questions into tables in the HTML
// New table elements filled with questions are added to the exteriorTable
let addTable = function(arrayOfQuestions, title, info, digitsPerNumber){
	// console.log("add table function");
	// console.log(title, info);
	addText(title, info);
	
	for (let question of arrayOfQuestions){
			let newTable =  document.createElement("table");
			let i = 0;
			for (let number of question){
				let newTr = document.createElement("tr");
				
				if (number == question[0]){
					let newTh = document.createElement("th");
					newTh.innerHTML = number.toString();
					newTr.appendChild(newTh);
				} else{
					let newTd = document.createElement("td");
					newTd.innerHTML = number.toString();
							
					if (i == (question.length - 1)){
						newTd.innerHTML = "<span>" + number.toString() + "</span>";
						i = 0;
					} else{
						newTd.innerHTML = number.toString();
					};
					newTr.appendChild(newTd);
				};
				newTable.appendChild(newTr);
				i++
			};
			exteriorTable[0].appendChild(newTable);
	}
	tableClass(digitsPerNumber);

};



// array number. Given a maximum digit value and the number of digits needed, an array of numbers is produced.
let numberArray = function(digitsPerQuestion, max){
	// console.log("number array function");
	list = []
	for (let x = 0; x < digitsPerQuestion; x++){
		let num = randomNumber(max, true);
		list.push(num);
	};
	return list;
};
// console.log(numberArray(3, 9));
// console.log(numberArray(2, 9));



// Random number generator
// asign a negative sign to a number at random.
let randomSign = function(num){
	// console.log("random sign function");
	sign = Math.round(Math.random());
		if (sign == 0){
			return num;
		} else{
			return -num;
		};
};



// adds question numbers
// takes an array of questions and adds question numbers
let questionNumber = function(questions){
	// console.log("questionNumber function");
	labeledQuestions = questions;
	for(let x = 0; x < questions.length; x++){
		labeledQuestions[x].unshift("(" + (x + 1).toString() + ")");
	};	
	return labeledQuestions;
};



// generates a random number
// The random number can include zero or not. 
let randomNumber = function(max, noZero){
	// console.log("random number function");
	if (noZero){
		return Math.ceil(Math.random() * max);
	}else{
		return Math.floor(Math.random() * (max + 1));
	};
};



// Multi digit number
// Produces a random positive multidigit number (not an array).
let multiDigit = function(numberOfDigits, maxDigitValue){
	// console.log("multi digit number");
	let multiNum = 0;
	let multiplier = 1;
	
	for (let x = 0; x < numberOfDigits; x++){
		multiNum += (randomNumber(maxDigitValue, true) * multiplier);
		multiplier *= 10;
	};

	return multiNum;
};







// direct up to 5 
// Output an array of numbers that add and subtract staying between 4 and 0. The one parameter is the number of items in the array.
// runningTotal, digitsPerQuestion
let randomFour = function(runningTotal, digitsPerQuestion){
	// console.log("random four function");
	// console.log("running total " + runningTotal);
	let num = [];
	let sign = randomSign(1);

	for (let y = 0; y < digitsPerQuestion; y++){	
		let randomSet = [];
		if (sign == 1){			
			for (let b = 4; b >= runningTotal[y]; b--){
				let digit = b - runningTotal[y];
				randomSet.push(digit);
			}; 
		}else{		
			for (let b = 0; b <= runningTotal[y]; b++){
				let digit = (runningTotal[y] - b) * sign;
				randomSet.push(digit);
			};
		};
		let newDigit = randomSet[randomNumber(randomSet.length - 1, false)];
		num.push(newDigit);
	};

	return num;
};



// direct up to 9
// Output an array of numbers that add and subtract staying between 9 and 0. The one parameter is the number of items in the array.
// It doesn't allow for break or pull 5
let directNine = function(questionLength){
	
	let originalQuestion = directFour(questionLength);

	let newQuestion = [];
	let sign = 5;
	let numberCount = 0;
	
	
	for (let i = 0; i < questionLength; i++){
		// let isFive = Math.round(Math.random());
		let isFive = Math.random();

		if (isFive <= 0.4 ){
			newQuestion.push(sign);
			sign *= -1;
		} else{
			newQuestion.push(originalQuestion[numberCount]);
			numberCount++;
		};
	}
	
	return newQuestion;	
};








// numberOfQuestions, lengthOfQuestion, numberOfDigits
	// beginner[0].addEventListener("click", function(){addTable( levelButtons(directFour, 40, 3, 1))}, false);

// takes the values from the custom generator and produces an array of questions
let submitButton = function(lengthOfQuestion, numberOfDigits, numberOfQuestions){
	// console.log("this is the submitButton function with " + numberOfQuestions + " questions and " + numberOfDigits + " digits.");

	let arrayOfQuestions = [];
	

	for (let i = 0; i < numberOfQuestions; i++){

		let question = [];
		let runningTotal = 0;

		for (let x = 0; x < lengthOfQuestion; x++){

			let row = [];
			
			for (let y = 0; y < numberOfDigits; y++){
				num = randomNumber(9, true);
				row.push(num);
			};
			question.push(row.join(""));
		};
		
		question.unshift("(" + (i + 1) + ")");
		arrayOfQuestions.push(question);


		// for (let x = 0; x < numberOfDigits; x++){
		// 	runningTotals[x] += completeQuestion[x];
		// };
		// console.log("complete Question " + completeQuestion);
		
		

		// arrayOfQuestions.push(completeQuestion);
	};

	return arrayOfQuestions;
};


// determines the number of questions to produce.
let questionLength = function(numbersPerQuestion, digitsPerNumber){
	// console.log("questionLength function");
	
	// if (numbersPerQuestion < 6){
	// 	// return 30;
	// 	return 40;
	// } else if(numbersPerQuestion < 11){
	// 	return 20;
	// }else {
	// 	return 10;
	// };
	console.log(numbersPerQuestion);
	console.log(digitsPerNumber);

	if (numbersPerQuestion <= 3 && digitsPerNumber <= 5){
		return 40;
	} else if(numbersPerQuestion <= 3 && digitsPerNumber >= 6){
		return 20;
	} else if(numbersPerQuestion <= 5 && digitsPerNumber <= 5){
		return 30;
	} else if (numbersPerQuestion <= 5 && digitsPerNumber >= 6){
		return 15;
	} else if (numbersPerQuestion <= 10 && digitsPerNumber <= 5){
		return 20;
	} else if (numbersPerQuestion <= 10 && digitsPerNumber >= 6){
		return 10;
	} else if (numbersPerQuestion > 10 && digitsPerNumber <= 5){
		return 10;
	} else{
		return 5;
	};
};	





// array to number
// takes an array of either positive or negative integers and combines their digits to make one number.

let arrayToNum = function(num){
	// console.log("array to number function");
	newNum = 0;
	multiplier = 1;

	for (let x = (num.length - 1); x >= 0; x--){
		newNum += num[x] * multiplier;
		multiplier *= 10;
	};	
	return newNum;
};

// console.log(arrayToNum([-0, -5]));


// number tester for custom generator
// Takes a number as an array and returns true or false depending if it satisfies certain conditions
let numberTest = function(runningTotal, digitsPerQuestion, number, maxValue){
	// console.log("number test function");
	let multiplier = 1;
	let max = 0;

	for (let z = 1; z <= digitsPerQuestion; z++){
		max += maxValue * multiplier;
		multiplier *= 10;
	}

	if (arrayToNum(number) == 0){
		return false;	
	} else if (arrayToNum(runningTotal) + arrayToNum(number) < 0){
		return false;
	} else if (arrayToNum(runningTotal) + arrayToNum(number) > max){
		return false;
	}
	else{
		return true;
	};

};



// Random number for Carry and borrow
// generates a new number array that allows carry and borrow
let randomCarryBorrow = function(runningTotal, digitsPerQuestion){
	// console.log("random carry borrow function");

	let num = [];
	let sign = randomSign(1);

	for (let y = 0; y < digitsPerQuestion; y++){
		if (sign == 1){
			let digit = randomNumber(9, false);	
			num.push(digit);
		} else{
			let digit = -randomNumber(9, false);
			num.push(digit);
		};
	};

	return num;
};



// Random number for Pull Break
// generates a new number array that prevents borrow and carry
let randomPullBreak = function(runningTotal, digitsPerQuestion){
	// console.log("random pull break function for pullbreak");			
	let num = [];		
	let sign = randomSign(1);

	for (let y = 0; y < digitsPerQuestion; y++){	
		if (sign == 1){
			let digit = randomNumber(9 - runningTotal[y], false);
			num.push(digit);
		} else{
			let digit = -randomNumber(runningTotal[y], false);
			num.push(digit);
		};
	};

	return num;
};



// Random Number for Direct 
// produces a random number array that prevents pull 5 and break 5
let randomDirect = function(runningTotal, digitsPerQuestion){
	// console.log("random direct function");
	let num = [];		
	let sign = randomSign(1);

	for (let y = 0; y < digitsPerQuestion; y++){	
		let randomSet = [];
			if (sign == 1){
				if (runningTotal[y] <= 4){
					for (let b = 4; b >= runningTotal[y]; b--){
						let digit = b - runningTotal[y];
						randomSet.push(digit);
					};
					for (let b = 5; b <= (9 - runningTotal[y]); b++){	
						let digit = b;
						randomSet.push(digit);
					};
				} else{
					for (let b = 4; b >= ((runningTotal[y]) - 5); b--){			
						let digit = (b - (runningTotal[y] - 5));
						randomSet.push(digit);
					};
				};
			}else{
				if (runningTotal[y] <= 4){
					for (let b = 0; b <= runningTotal[y]; b++){
						let digit = (runningTotal[y] - b) * sign;
						randomSet.push(digit);
					};
				} else{
					for (let b = 5; b <= runningTotal[y]; b++){
						let digit = -b;
						randomSet.push(digit);
					};
					for (let b = 0; b <= (runningTotal[y]) - 5; b++){
						let digit =  -((runningTotal[y] - 5) - b);
						randomSet.push(digit);
					};
				};
			};
		let newDigit = randomSet[randomNumber(randomSet.length - 1, false)];
		num.push(newDigit);
	};

	return num;
};





let buildTable = function(numbersPerQuestion, digitsPerQuestion, numberOfQuestions, functionName, maxValue){
	// console.log("build table function");
	let allQuestions = [];

	// create a list of questions
	for (let a = 0; a < numberOfQuestions; a++){
		let question = [numberArray(digitsPerQuestion, maxValue)];

		// keeps track of the sum for each digit position.
		let runningTotal = [].concat(question[0]);
		
		// creates a question
		for (let x = 0; x < numbersPerQuestion - 1; x++){
			// produces a random number that prevents carry and borrow
					
			let answer = [];
			// let answer = newNew(runningTotal, digitsPerQuestion)
			do{
			answer = functionName(runningTotal, digitsPerQuestion)
			} while (numberTest(runningTotal, digitsPerQuestion, answer, maxValue) == false);	
				question.push(answer);
			
			for (let y = 0; y < digitsPerQuestion; y++){
				runningTotal[y] += answer[y];
			};
		};
		let finalQuestion = [];

		// Changes the array of numbers into one number
		for (let q of question){
			finalQuestion.push(arrayToNum(q));
		};

		allQuestions.push(finalQuestion);
	};

	// Add labels to each question
	let labeledQuestions = questionNumber(allQuestions);
	return labeledQuestions;
};








let directNums = function(numbersPerQuestion, digitsPerQuestion, numberOfQuestions){
	// console.log("this is the direct function");

	allQuestions = [];

	// create a list of questions
	for (let a = 0; a < numberOfQuestions; a++){
		console.log("question " + (a));
		console.log("digits per question " + digitsPerQuestion);
		question = numberArray(digitsPerQuestion, 9);

		// keeps track of the sum for each digit position.
		runningTotal = [].concat(question[0]);
		
		// creates a question
		for (let x = 0; x < numbersPerQuestion - 1; x++){
						
			let newNumber = randomDirect(runningTotal, digitsPerQuestion);
			console.log(newNumber);
			question.push(newNumber);
			console.log("question");
			console.log(question);
		};

		finalQuestion = [];
		console.log(finalQuestion);

		// Changes the array of numbers into one number
		for (let q of question){
			finalQuestion.push(arrayToNum(q));
		};

		allQuestions.push(finalQuestion);
	};

	// Add labels to each question
	labeledQuestions = questionNumber(allQuestions);
	return labeledQuestions;

};

// console.log(directNums(2, 2, 2));



// main function for making the table
// When the event listener is triggered, this function orchestrates the making of table
let levelButtons = function(functionName, numbersPerQuestion, digitsPerQuestion){
	// console.log("level buttons function");
	
	let questionList = buildTable(numbersPerQuestion, digitsPerQuestion, questionLength(numbersPerQuestion, digitsPerQuestion), functionName);

	return questionList;
};




// takes in the input data from the custom generator and outputs an array of questions
let customButton = function(numbersPerQuestion, digitsPerQuestion, direct, pullbreak, carryBorrow){
	// console.log("custom Button function");
	
	let functionName = function(){};
	if (carryBorrow){
		functionName = randomCarryBorrow;
	}else if(pullbreak){
		functionName = randomPullBreak;
	}else{
		functionName = randomDirect;		
	};
	
	let questionList = buildTable(numbersPerQuestion, digitsPerQuestion, questionLength(numbersPerQuestion, digitsPerQuestion), functionName, 9);

	return questionList;
};



// Levels
// This manages the buttons on levels pages (beginner, intermediate and advanced).
if (page.classList.value == "levels"){

	if (page.id == "beginner-page"){
		// There are six buttons, each is assigned a question length, number of digits,
		// a function to be used, a maximum digit value and the number of questions to be gnenerated.
		let lengths = [3, 6, 6, 3, 6, 6];
		let digits = [1, 2, 3, 1, 2, 3];
		let functions = [randomFour, randomFour, randomFour, randomDirect, randomDirect, randomDirect];
		let maxValues = [4, 4, 4, 9, 9, 9];		
		let questions = [];

		// Question length is used to determine the number of questions to generate 
		for (let i = 0; i < lengths.length; i++){
			questions.push(questionLength(lengths[i], digits[i]));
		};

		// Each button has an event listener assigned and the values for that button are used to generate
		// a table of questions and add them to the html.
		for (let level = 0; level < beginner.length; level++){
			let title = "Beginner Level " + (level + 1);
			let plural = " digits";
			let upTo = "up to ";
			if (digits[level] == 1){
				plural = " digit";
				upTo = "";
			};
		
			let info = 'These questions target Direct movements up to a maximum sum of ' + maxValues[level] + ' on the abacus. Every question has ' + lengths[level]
			+ ' numbers with ' + upTo + digits[level] + ' ' + plural + ' each.';
		
			// console.log(beginnerTitle);
			// console.log(beginnerMeta);
			beginner[level].addEventListener("click", function(){addTable( buildTable(lengths[level], digits[level], questions[level], functions[level], maxValues[level]), title, info)}, false);
			beginner[level].addEventListener("keypress", function(){addTable( buildTable(lengths[level], digits[level], questions[level], functions[level], maxValues[level]), title, info)}, false);
		};


	} else if (page.id == "intermediate-page"){
		// There are six buttons, each is assigned a question length, number of digits
		// and the number of questions to be generated.
		let lengths = [3, 8, 3, 8, 3, 8];
		let digits = [1, 1, 2, 2, 3, 3];
		let questions = [];

		// the length of each question is used to determine the number of questions to generate 
		for (let i = 0; i < lengths.length; i++){
			questions.push(questionLength(lengths[i], digits[i]));
		};

		// Each button has an event listener assigned and the values for that button are used to generate
		// a table of questions and add them to the html.
		for (let level = 0; level < intermediate.length; level++){
			let title = "Intermediate Level " + (level + 1);

			let plural = " digits";
			let upTo = "up to ";
			if (digits[level] == 1){
				plural = " digit";
				upTo = "";
			};
		
			let info = 'These questions target the Pull-5 and Break-5 movements on the abacus. Every question has ' + lengths[level]
			+ ' numbers with ' + upTo + digits[level] + plural + ' each.';

			intermediate[level].addEventListener("click", function(){addTable( buildTable(lengths[level], digits[level], questions[level], randomPullBreak, 9), title, info)}, false);
			intermediate[level].addEventListener("keypress", function(){addTable( buildTable(lengths[level], digits[level], questions[level], randomPullBreak, 9), title, info)}, false);
		};


	} else{
		// advanced

		// There are six buttons, each is assigned a question length, number of digits
		// and the number of questions to be generated.
		let lengths = [2, 4, 8, 2, 4, 8];
		let digits = [2, 2, 2, 3, 3, 3];
		let questions = [];

		// the length of each question is used to determine the number of questions to generate 
		for (let i = 0; i < lengths.length; i++){
			questions.push(questionLength(lengths[i], digits[i]));
		};
		
		// Each button has an event listener assigned and the values for that button are used to generate
		// a table of questions and add them to the html.
		for (let level = 0; level < advanced.length; level++){
			let title = "Advanced Level " + (level + 1);
		
			let info = 'These questions target the Carry and Borrow movements on the abacus. Every question has ' + lengths[level]
			+ ' numbers with at most ' + digits[level] + ' digits each.';

			advanced[level].addEventListener("click", function(){addTable( buildTable(lengths[level], digits[level], questions[level], randomCarryBorrow, 9), title, info)}, false);
			advanced[level].addEventListener("keypress", function(){addTable( buildTable(lengths[level], digits[level], questions[level], randomCarryBorrow, 9), title, info)}, false);
		};
	};

	printPage.addEventListener("click",	function(){window.print()}, false);
	printPage.addEventListener("keypress",	function(){window.print()}, false);


};




// Custom Generator
if (page.classList.value == "custom"){

	// Display the number slider value
	// input the value of the number slider into the HTML so it is displayed on the webpage 
	// let number = "";
	output.innerHTML = slider.value;
	slider.oninput = function(){
		
		output.innerHTML = this.value;
		// number = this.value;
		
	}



	// Display the digit slider value
	// input the value of the digit slider into the HTML so it is displayed on the webpage 
	let digit = 0;
	output2.innerHTML = slider2.value;
	slider2.oninput = function(){
		output2.innerHTML = this.value;
		digit = this.value;

		// If there are lots of digits
		if (output2.innerHTML > 5){
			console.log("lots of digits");
			// Change the display when numbers have lots of digits
			// Add the big-table class to each table
			// table.forEach( function(item) {
			// 	item.classList.add("big-table");
			// });


			exterior.forEach( function(item){
				item.classList.add("big-exterior");
			});
		};

		// If there are only a few digits
		if (output2.innerHTML <= 5){
			console.log("less than 6 digits");
			// table.forEach( function(item) {
			// 	item.classList.remove("big-table");
			// });

			exterior.forEach( function(item){
				item.classList.remove("big-exterior");
			});
			
		};

	}

	// let info = function(){
	// 	console.log("info function working");
	// 	let number = slider.value;
	// 	let digit = slider2.value;

	// 	if (DIRECT.checked){
	// 		let functionName = '"Direct-9"'
	// 	}else if(PULLBREAK.checked){
	// 		let functionName = '"Pull-5/Break-5"';
	// 	}else{
	// 		let functionName = '"Carry/Borrow"';
	// 	};
	// 	console.log("working");
	// 	return "These questions target the " + functionName + "movement on the abacus. Each question has " + number + " numbers with up to " + digit + " digit/s each.";

	// };

	let info = function(){
		// console.log("info function working");
		let number = slider.value;
		let digit = slider2.value;
		// console.log(slider.value, slider2.value);
		let functionName = "";
		if (DIRECT.checked){
			functionName = 'Direct-9 movement'
		}else if(PULLBREAK.checked){
			functionName = 'Pull-5 and Break-5 movements';
		}else{
			functionName = 'Carry and Borrow movements';
		};
		let plural = "digits";
		let upTo = "up to ";
		if (digit == 1){
			plural = "digit";
			upTo = "";
		}
		return "These questions target the " + functionName + " on the abacus. Each question has " + number + " numbers with " + upTo + " " + digit + " " + plural + " each.";

	};

	let title = "Custom Generator";
// "These questions target the " + functionName + "movement on the abacus. Each question has " + number + " numbers with up to " + digit + " digit/s each."

		// Custom Generator
	// console.log("custom");
	// button[0].addEventListener("click", function(){addTable(submitButton(slider.value, slider2.value, 20))}, false);
	// button[0].addEventListener("click", function(){addTable(anyQuestion(slider.value, slider2.value, 20))}, false);
	button[0].addEventListener("click", function(){
		addTable(customButton(slider.value, slider2.value, DIRECT.checked, PULLBREAK.checked, CARRYBORROW.checked), title, info(), slider2.value);
		printPage = document.querySelector("#print");
	}, false);


	printPage.addEventListener("click",	function(){window.print()}, false);
	printPage.addEventListener("keypress",	function(){window.print()}, false);
	// if (slider2.value > 5){
	// 	table.forEach( function(item) {
	// 			item.classList.add("big-table");
	// 		});
	// } else {
	// 	table.forEach( function(item) {
	// 			item.classList.remove("big-table");
	// 		});
	// };

};


console.log("hi");