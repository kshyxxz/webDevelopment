const btn = document.querySelectorAll("button");

let i = 0;
let arr = Array(9).fill(0); // 0 for free, 1 for occupied
let person1 = Array(9).fill(0);
let person2 = Array(9).fill(0);

function onClick(passed) {
	if (arr[passed] == 0) {
		let returnedId = passed;
		console.log(returnedId);
		select = document.getElementById(returnedId);
		if (i % 2 == 0) {
			select.innerText = "⭘";
			person1[returnedId] = 1;
		} else {
			select.innerText = "✕";
			person2[returnedId] = 1;
		}
		i++;
		arr[passed] = 1;
	} else {
		alert("This box has already been occupied.");
	}

	function test() {
		if (
			(person1[0] && person1[1] && person1[2]) ||
			(person1[3] && person1[4] && person1[5]) ||
			(person1[6] && person1[7] && person1[8]) ||
			(person1[0] && person1[3] && person1[6]) ||
			(person1[1] && person1[4] && person1[7]) ||
			(person1[2] && person1[5] && person1[8]) ||
			(person1[0] && person1[4] && person1[8]) ||
			(person1[2] && person1[4] && person1[6])
		) {
			return 1;
		} else if (
			(person2[0] && person2[1] && person2[2]) ||
			(person2[3] && person2[4] && person2[5]) ||
			(person2[6] && person2[7] && person2[8]) ||
			(person2[0] && person2[3] && person2[6]) ||
			(person2[1] && person2[4] && person2[7]) ||
			(person2[2] && person2[5] && person2[8]) ||
			(person2[0] && person2[4] && person2[8]) ||
			(person2[2] && person2[4] && person2[6])
		) {
			return 2;
		}
	}

	function full() {
		if (
			arr[0] != "" &&
			arr[1] != "" &&
			arr[2] != "" &&
			arr[3] != "" &&
			arr[4] != "" &&
			arr[5] != "" &&
			arr[6] != "" &&
			arr[7] != "" &&
			arr[8] != ""
		) {
			return 3;
		}
	}

	if (test() == 1) {
		setTimeout(() => alert("⭘ has won."), 100);
		setTimeout(() => resetFun(), 101);
	} else if (test() == 2) {
		setTimeout(() => alert("✕ has won."), 100);
		setTimeout(() => resetFun(), 101);
	}

	if (full() == 3 && test() != 1 && test() != 2) {
		setTimeout(() => alert("No one won."), 100);
		setTimeout(() => resetFun(), 101);
	}
}

for (let j = 0; j < 9; j++) {
	btn[j].addEventListener("click", () => {
		onClick(j);
	});
}

const reset = document.getElementById("reset");
const index = document.querySelectorAll("button");
const resetFun = () => {
	arr = Array(9).fill(0);
	person1 = Array(9).fill(0);
	person2 = Array(9).fill(0);
	for (let k = 0; k < 9; k++) {
		index[k].innerText = "";
	}
};
reset.addEventListener("click", resetFun);
