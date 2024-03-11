//used never type because its never going to return anything.
function throwError(message: string, errorCode: number): never {
	throw { message, errorCode };
	//the same with the below infinite while loop which is never going to return anything
	// while(true) {}
}

throwError("some error occured", 500);
