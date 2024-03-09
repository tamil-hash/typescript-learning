//literal types are combined types of union and enum

const combineValues = (num1: number | string, num2: number | string, resultConversion: "as-number" | "as-text") => {
	let result: string | number;
	if (typeof num1 === "number" && typeof num2 === "number") {
		result = num1 + num2;
	} else {
		result = num1.toString() + num2.toString();
	}

	if (resultConversion === "as-number") return +result;
	else if (resultConversion === "as-text") return result.toString();
};

console.log(combineValues(1, 2, "as-number"));
console.log(combineValues("1", "2", "as-text"));
