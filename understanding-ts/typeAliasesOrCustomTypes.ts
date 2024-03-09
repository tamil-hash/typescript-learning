//type aliases or custom types used when we have same data set in diffrent places

// Type aliases can be used to "create" your own types. You're not limited to storing union types though - you can also provide an alias to a (possibly complex) object type.

// For example:
type User = { name: string; age: number };
const u1: User = { name: "Max", age: 30 };

type combinable = number | string;
const combineValues2 = (num1: combinable, num2: combinable, resultConversion: "as-number" | "as-text") => {
	let result: string | number;
	if (typeof num1 === "number" && typeof num2 === "number") {
		result = num1 + num2;
	} else {
		result = num1.toString() + num2.toString();
	}

	if (resultConversion === "as-number") return +result;
	else if (resultConversion === "as-text") return result.toString();
};

console.log(combineValues2(1, 2, "as-number"));
console.log(combineValues2("1", "2", "as-text"));
