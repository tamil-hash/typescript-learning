const add = (a: number, b: number): number => {
	return a + b;
};

/**
 * void returns nothing but basically in js when a function returns nothing it is undefined
 * even if we have a undefined type in ts we cant give like the function returns undefined instead we need to call it as void
 *
 */
const printResult = (result: number): void => {
	console.log("result is" + result);
};

/**
 * here when we explicitly use the return keyword without returning any value we can say like this function returns undefined.
 */
const printResult2 = (result: number): undefined => {
	console.log("result is" + result);

	return;
};

//undefined will be stored in the following variables because the function doesnt have return and used void
const a = printResult(add(1, 2));
const b = printResult(add(15, 15));
const c = printResult(add(3, 4));

//undefined will be stored in the following variables
//because the function eventhough used return but doesnt returned any value and
//the function says undefined will be returned explicitly
const a1 = printResult2(add(1, 2));
const b1 = printResult2(add(15, 15));
const c1 = printResult2(add(3, 4));
