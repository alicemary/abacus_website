// Javascript Abacus Question Modal 



// selectors

// Selectors for page elements
let page = document.querySelector("content");



// Selectors for modal elements
let modal = document.querySelector('#id01');
let metaTextBox = document.querySelector('.intro section');
let exteriorTable = document.querySelector(".exterior-table")



// Selectors for Buttons
let button = document.querySelectorAll(".press-button button");
let printPage = document.querySelector("#print");
let modalCross = document.querySelector(".modal-x");

let beginner = document.querySelectorAll(".beginner");
let intermediate = document.querySelectorAll(".intermediate");
let advanced = document.querySelectorAll(".advanced");



// Selectors for the custom generator sliders and checkboxes
const DIRECT = document.querySelector('#direct');
const PULLBREAK = document.querySelector('#pull-break');
const CARRYBORROW = document.querySelector('#carry-borrow');

let slider = document.getElementById("numberRange");
let slider2 = document.getElementById("digitRange");

let numberOutput = document.getElementById("numbers");
let digitOutput = document.getElementById("digits");

let anchors = document.querySelectorAll("a");
let but = document.querySelectorAll("button");	





// open modal
// When a level button or submit button is clicked (or keydown), the modal is displayed.
function showModal(){

	// The modal is displayed
	modal.style.display='block';

	// The viewport is scrolled to the top of the page
	document.documentElement.scrollTop = 0;
}


// assigns tabindex -1 to tabbable elements in the content
function disableTab(){

	for(let a of anchors){
		a.setAttribute("tabindex", "-1");
	};

	for(let b of but){
		b.setAttribute("tabindex", "-1");
	};

	modalCross.setAttribute("tabindex", "0");
	printPage.setAttribute("tabindex", "0");
	
}



// make buttons and links tabbable
function addTab(){
	console.log("add tab");
	for(let a of anchors){
		a.setAttribute("tabindex", "0");
	};

	for(let b of but){
		b.setAttribute("tabindex", "0");
	};
}



// Each button on the page has an event listener which displays the modal when triggered
button.forEach((item) => {
	item.addEventListener("click", showModal, false);
	item.addEventListener("click", disableTab, false);
	modalCross.addEventListener("click", addTab, false);
});







// close modal
// Clicking (or keydown) on the x will close the modal and clear the modal content
function closeModal(){
	modal.style.display='none';

	// remove every table from the modal
	let allTables = document.querySelectorAll("table");

	for (let item of allTables){
		item.remove();
	};

	// remove the title and question information from the modal
	document.querySelector(".intro section h2").remove();
	document.querySelector(".intro section p").remove();
}


if (page.classList.value == "course" || page.classList.value == "custom" ){
// The cross inside the modal has an event listener that hides and clears the modal
modalCross.addEventListener("click", closeModal, false);
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







// array to number
// takes an array of either positive or negative integers and combines their digits to make one number.
let arrayToNum = function(num){
	newNum = 0;
	multiplier = 1;

	for (let x = (num.length - 1); x >= 0; x--){
		newNum += num[x] * multiplier;
		multiplier *= 10;
	};	
	return newNum;
};






// number tester for custom generator
// Takes a number as an array and returns true or false depending if it satisfies certain conditions
let numberTest = function(runningTotal, digitsPerQuestion, number, maxValue){
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






// Random number for Carry and borrow
// generates a new number (as an array) that allows carry and borrow
let randomCarryBorrow = function(runningTotal, digitsPerQuestion){
	let num = [];

	// determine if the number is positive or negative
	let sign = randomSign(1);

	for (let y = 0; y < digitsPerQuestion; y++){
		if (sign == 1){
			// generates a random digit  (0 to 9)
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
// generates a new number (as an array) that prevents borrow and carry
let randomPullBreak = function(runningTotal, digitsPerQuestion){
	let num = [];		
	
	// determine if the number is positive or negative
	let sign = randomSign(1);

	for (let y = 0; y < digitsPerQuestion; y++){	
		if (sign == 1){
			// generates a random digit  (0 to 9)
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
	let num = [];

	// determine if the number is positive or negative	
	let sign = randomSign(1);

	// generates each digit of the number
	for (let y = 0; y < digitsPerQuestion; y++){	
		// an array of possible digits is created
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
		// One of the digits from the random set is selected at random
		let newDigit = randomSet[randomNumber(randomSet.length - 1, false)];
		num.push(newDigit);
	};

	return num;
};







// direct up to 4 
// Outputs a number (as an array) that add and subtract staying between 4 and 0. 
let randomFour = function(runningTotal, digitsPerQuestion){
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







// generates a random number
// The random number can include zero or not. 
let randomNumber = function(max, noZero){
	if (noZero){
		return Math.ceil(Math.random() * max);
	}else{
		return Math.floor(Math.random() * (max + 1));
	};
};







// Produces a single number as an array.
 // Given a maximum digit value and the number of digits needed, a number is created as an array.
let numberArray = function(digitsPerQuestion, max){
	list = []
	for (let x = 0; x < digitsPerQuestion; x++){
		let num = randomNumber(max, true);
		list.push(num);
	};
	return list;
};







// Generates an array of questions for different the levels (beginner, intermediate, advanced) buttons
let buildTable = function(numbersPerQuestion, digitsPerQuestion, numberOfQuestions, functionName, maxValue){
	let allQuestions = [];

	// create questions to add to allQuestions
	for (let a = 0; a < numberOfQuestions; a++){

		// generates the first number of the question
		let question = [numberArray(digitsPerQuestion, maxValue)];

		// keeps track of the sum for each digit position.
		let runningTotal = [].concat(question[0]);
		
		// creates numbers to add to the question
		for (let x = 0; x < numbersPerQuestion - 1; x++){
			let answer = [];

			// The number generated is restricted based on the skill being tested (functionName)
			// This includes randomFour, randomDirect, randomCarryBorrow and randomPullBreak
			do{
			answer = functionName(runningTotal, digitsPerQuestion)

			// The number generated goes through a series of tests before it is pushed to the question
			} while (numberTest(runningTotal, digitsPerQuestion, answer, maxValue) == false);	
				question.push(answer);
			
			// The running total for each digit is updated
			for (let y = 0; y < digitsPerQuestion; y++){
				runningTotal[y] += answer[y];
			};
		};

		let finalQuestion = [];

		// Changes each number from array to a number and pushes it to finalQuestion
		for (let q of question){
			finalQuestion.push(arrayToNum(q));
		};

		// The entire question is pushed to the allQuestions array
		allQuestions.push(finalQuestion);
	};

	// Add labels to each question
	let labeledQuestions = questionNumber(allQuestions);

	return labeledQuestions;
};







// takes in the input data from the custom generator and outputs an array of questions
let customButton = function(numbersPerQuestion, digitsPerQuestion, direct, pullbreak, carryBorrow){
	
	let functionName = function(){};
	
	if (carryBorrow){
		functionName = randomCarryBorrow;
	}else if(pullbreak){
		functionName = randomPullBreak;
	}else{
		functionName = randomDirect;		
	};
	
	let questionList = buildTable(numbersPerQuestion, digitsPerQuestion, questionsPerSheet(numbersPerQuestion, digitsPerQuestion), functionName, 9);

	return questionList;
};







// Adds the big-table class to each table element if there are more than 5 digits per number
let tableClass = function(digitsPerNumber){
	let table = document.querySelectorAll("table");
	
	if (digitsPerNumber > 5){
		table.forEach( function(item) {
			item.classList.add("big-table");
		});	
	};
};







// Adds the title and question information to the modal
let addText = function(title, info){

	let newHeader = document.createElement("h2");
	let newInfo = document.createElement("p");

	newHeader.innerHTML = title;
	newInfo.innerHTML = info;

	metaTextBox.appendChild(newHeader);	
	metaTextBox.appendChild(newInfo);
};







// Add an array of Questions into tables in the HTML
// New table elements filled with questions are added to the exteriorTable
let addTable = function(arrayOfQuestions, title, info, digitsPerNumber){
	// add the title and question information to the modal
	addText(title, info);
	
	// Each question uses a table and each number is placed inside a td element
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
		exteriorTable.appendChild(newTable);
	}
	// add or remove the big-table class according to numbers per question
	tableClass(digitsPerNumber);
};







// Questions per Worksheet
// determines the number of questions to produce.
let questionsPerSheet = function(numbersPerQuestion, digitsPerNumber){

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







// courses
// This manages the buttons on course pages (beginner, intermediate and advanced).
if (page.classList.value == "course"){

	if (page.id == "beginner-page"){
		// There are six buttons, each is assigned a question length, number of digits,
		// a function to be used, a maximum digit value and the number of questions to be gnenerated.
		let lengths = [3, 6, 6, 3, 6, 6];
		let digits = [1, 2, 3, 1, 2, 3];
		let functions = [randomFour, randomFour, randomFour, randomDirect, randomDirect, randomDirect];
		let maxValues = [4, 4, 4, 9, 9, 9];		
		let questions = [];

		// The number of questions generated for the worksheet is calculated using the questionsPerSheet function and pushed to the questions list.
		for (let i = 0; i < lengths.length; i++){
			questions.push(questionsPerSheet(lengths[i], digits[i]));
		};

		// Each beginner button has an event listener assigned to it. It triggers the buildTable function which takes all the parameters for that particular button
		// and generates a table of questions which is added to the html 
		for (let level = 0; level < beginner.length; level++){

			// A title and question information is generated for each button
			let title = "Beginner Level " + (level + 1);
			let plural = " digits";
			let upTo = "up to ";

			if (digits[level] == 1){
				plural = " digit";
				upTo = "";
			};
		
			let info = 'These questions target Direct movements up to a maximum sum of ' + maxValues[level] + ' on the abacus. Every question has ' + lengths[level]
			+ ' numbers with ' + upTo + digits[level] + ' ' + plural + ' each.';
		
			beginner[level].addEventListener("click", function(){addTable( buildTable(lengths[level], digits[level], questions[level], functions[level], maxValues[level]), title, info)}, false);
		};



	} else if (page.id == "intermediate-page"){
		// There are six buttons, each is assigned a question length, number of digits
		// and the number of questions to be generated.
		let lengths = [3, 8, 3, 8, 3, 8];
		let digits = [1, 1, 2, 2, 3, 3];
		let questions = [];

		// The number of questions generated for the worksheet is calculated using the questionsPerSheet function and pushed to the questions list.
		for (let i = 0; i < lengths.length; i++){
			questions.push(questionsPerSheet(lengths[i], digits[i]));
		};

		// Each intermediate button has an event listener assigned to it. It triggers the buildTable function which takes all the parameters for that particular button
		// and generates a table of questions which is added to the html 
		for (let level = 0; level < intermediate.length; level++){
			
			// A title and question information is generated for each button
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
		};



	} else{
		// advanced

		// There are six buttons, each is assigned a question length, number of digits
		// and the number of questions to be generated.
		let lengths = [2, 4, 8, 2, 4, 8];
		let digits = [2, 2, 2, 3, 3, 3];
		let questions = [];

		// The number of questions generated for the worksheet is calculated using the questionsPerSheet function and pushed to the questions list.
		for (let i = 0; i < lengths.length; i++){
			questions.push(questionsPerSheet(lengths[i], digits[i]));
		};
		
		// Each intermediate button has an event listener assigned to it. It triggers the buildTable function which takes all the parameters for that particular button
		// and generates a table of questions which is added to the html 
		for (let level = 0; level < advanced.length; level++){

			// A title and question information is generated for each button
			let title = "Advanced Level " + (level + 1);
			let info = 'These questions target the Carry and Borrow movements on the abacus. Every question has ' + lengths[level]
			+ ' numbers with at most ' + digits[level] + ' digits each.';

			advanced[level].addEventListener("click", function(){addTable( buildTable(lengths[level], digits[level], questions[level], randomCarryBorrow, 9), title, info)}, false);
		};
	};



	// open print window
	// The print button in the modal opens the print window
	printPage.addEventListener("click",	function(){window.print()}, false);
};







// Custom Generator
if (page.classList.value == "custom"){

	// Display the number slider value
	// input the value of the number slider into the HTML so it is displayed on the webpage 
	numberOutput.innerHTML = slider.value;

	slider.oninput = function(){
		numberOutput.innerHTML = this.value;		
	}



	// Display the digit slider value
	// input the value of the digit slider into the HTML so it is displayed on the webpage 
	let digit = 0;
	digitOutput.innerHTML = slider2.value;
	
	slider2.oninput = function(){
		digitOutput.innerHTML = this.value;
		digit = this.value;

		// If there are more than 5 digits, the big-exterior class is added to change the formatting of the table
		if (digitOutput.innerHTML > 5){
			exteriorTable.classList.add("big-exterior");
		};

		// If there are 5 or less digits, the big-exterior class is removed
		if (digitOutput.innerHTML <= 5){
			exteriorTable.classList.remove("big-exterior");
		};
	}



	// generates question information for the question sheet
	let info = function(){
		// console.log("info function");
		let number = slider.value;
		let digit = slider2.value;
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



	// worksheet title
	let title = "Custom Generator";



	// The submit button triggers the addTable function which generates tables of questions and inserts it into the html
	button[0].addEventListener("click", function(){
		addTable(customButton(slider.value, slider2.value, DIRECT.checked, PULLBREAK.checked, CARRYBORROW.checked), title, info(), slider2.value);
		printPage = document.querySelector("#print");
	}, false);



	// open print window
	// The print button in the modal opens the print window
	printPage.addEventListener("click",	function(){window.print()}, false);
};


console.log("hi");