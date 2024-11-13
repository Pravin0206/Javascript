// This simple type of conversion doesn't give any trouble...

// console.log(2 > 3);
// console.log(2 < 3);
// console.log(2 >= 3);
// console.log(2 <= 3);
// console.log(2 == 2);
// console.log(2 != 3);

// String and numeric comparison :- String datatype is converted to numeric datatype

// console.log(2 > "3");
// console.log("2" < 3);

// Comparison with null :- Comparisons convert null to a number and treat it as 0.

// console.log(null > 0);
// console.log(null < 0);
// console.log(null == 0);
// console.log(null >= 0);
// console.log(null <= 0);

// Comparison with undefined :- Gives false as output when compared.

console.log(undefined > 0);
console.log(undefined < 0);
console.log(undefined == 0);
