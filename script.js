function firstWord(s) {
  // your code here
	for (let char of s) {
		if (char===" ") {
			var first=slice(0,indexOf(char));
			return first;
		}
	}
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
