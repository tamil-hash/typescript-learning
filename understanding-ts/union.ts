const combine = (num1: number | string, num2: number | string) => {
	let result: string | number;
	if (typeof num1 === "number" && typeof num2 === "number") {
		result = num1 + num2;
	} else {
		result = num1.toString() + num2.toString();
	}

	return result;
};

console.log(combine(1, 2));
console.log(combine("1", "2"));
