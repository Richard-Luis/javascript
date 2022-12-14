const escola = "Cod3r"

console.log(escola.charAt(4));
console.log(escola.charAt(5));

console.log(escola.charCodeAt(3)); //related to unicode table or ask

console.log(escola.indexOf('3')); //do the opposite

console.log(escola.substring(1)); //deleted index 1 

console.log(escola.substring(0, 3)); //counts from index 0 to 3, not including index 3

console.log("Escola ".concat(escola).concat("!"));
console.log(escola.replace(3, "e"));

console.log("Ana, Maria, Pedro".split(","))