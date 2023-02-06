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

const node = document.getElementById("time");
const currentDate = `${monthGetter(date.getMonth())} ${day}, ${year}`;

node.append(currentDate);
