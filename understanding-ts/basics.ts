const add = (num1: number, num2: number, showResult: boolean = false, phrase:string) => {
	const result = num1 + num2;
	const resultPhrase = phrase + result;
	if (showResult) console.log(resultPhrase);

	return resultPhrase;
};

let a: number = 1;
const b: number = 1;

a = 2;
const resultPhrase = "result is: "
console.log(add(a, b, true, resultPhrase));
