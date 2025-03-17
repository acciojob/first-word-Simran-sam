function firstWord(s) {
  // your code here
	let spacevalue =s.trim().split(" ");
	let first =spacevalue[0];
	return first;
}
// Do not change the code below
const s = prompt("Enter String:");
alert(firstWord(s));
