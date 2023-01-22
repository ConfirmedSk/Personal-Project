const date = new Date();

const year = date.getFullYear();
const day = date.getDate();
const month = date.getMonth();

function monthGetter(m) {
	const months = [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December",
	];
	return months[m];
}

console.log(day);
console.log(year);
console.log(monthGetter(date.getMonth()));

const node = document.getElementById("time");
node.innerHTML = `${monthGetter(date.getMonth())} ${day}, ${year}`;
document.getElementById("node").appendChild(node);
