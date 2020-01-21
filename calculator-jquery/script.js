$(document).ready(function() {
	
	// stores user input to calculate later
	let entry = [""];
	// string to store current input string
    let str;
	// operators arrays for validation
	const operators = ["+", "-", "/", "*", "%"];
	// validate numbers
	const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

	// gets user input
	function getValue(input) {
		// check for duplicate decimal points
		if (input === "." && entry[entry.length - 1] === ".") {
			console.log("error");		
			//check if input is an operator
		} else if (entry.length === 1 && operators.includes(input) === false) {
			entry.push(input);
			// check if last input is an operator
		} else if (operators.includes(entry[entry.length - 1]) === false) {
			entry.push(input);
			//check if input is a number
		} else if (nums.includes(Number(input))) {
			entry.push(input);
		}
		update();
	}

	// updates entry and history with the most recent value
	function update() {
		str = entry.join("");
		$("#history").html(str.substring(0, 20));
	}

	// returns total
	function getTotal() {
		// evaluate the entire entry and return answer
		var answer = eval(entry.join(""));
		// change answer into a string
		var ansStr = String(answer);
		// show the first 10 characters in the answer string
		$("#current").html(ansStr.substring(0, 10));
		$("#history").html(str.substring(0, 20) + "=");
	}

	// when button is clicked, run a function
	$(".btn").click(function(event) {
		//update entry with user input
		let btnClicked = this.innerHTML;
		console.log(btnClicked);
		$("#current").html(btnClicked);	

		// returns everything back to default settings when AC (All Cancel) button is clicked
		if (this.id === "allCancel") {
			entry = [""];
			$("#current").html("0");
			$("#history").html("0");

			// removes last user entry when CE (Cancel Entry) button is clicked
		} else if (this.id === "cancelEntry") {
			$("#current").html(entry[entry.length - 1]);
			entry.pop();
			update();
			if (entry.length === 0 || entry.length === 1) {
				entry = [""];
				$("#current").html("0");
				$("#history").html("0");
			}
			// get total when the equal button is clicked
		} else if (this.id === "total") {
			getTotal();
		} else {
			if (entry[entry.length - 1].indexOf("+", "-", "/", "*", "%", "-1") === -1) {
				getValue(this.id);
			} else {
				getValue(this.id);
			};
		};
	});
});
