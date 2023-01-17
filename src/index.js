module.exports = function reverse (n) {
	let str = '';
	let i = 0;
	let toStr = String(Math.abs(n));
	while (i<toStr.length) {
	  str = toStr[i] + str;
	  i= i + 1;
	}
	return Number(str);
}
