const adder = (a: number, b: number): number => {
	return a + b;
};

const printer = (result: number): void => {
	console.log("result is" + result);
};

let add2: (a: number, b: number) => number = adder;

console.log(add2(2, 2));

/**
 * shows error because we have provided a type function which accepts 2 arguments and returns number
 * but in this case where the printer accepts only one argument and doesnt return anything
 */
add2 = printer;
