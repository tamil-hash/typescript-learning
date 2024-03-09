const main = (a: number, b: number, cb: (num: number) => void) => {
	const result = a + b;
	cb(result);
	return result;
};

//wont throw any error because it gets number as argument and doesnt return anything exactly like in the cb argument
main(2, 3, (result: number) => console.log(result));

//will throw error because the first argument is string
main(2, 3, (result: string) => console.log(result));

//will throw error because the first argument is string
main(2, 3, (result: number) => {
	return `${result}`;
});
