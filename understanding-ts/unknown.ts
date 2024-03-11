let userInput: unknown;

let userName: string = "john";

userInput = 5;

userInput = "Tamil";

//throws error because unknown is not assignable to string type
// userName = userInput;

//wont throw any error here because we're type checking if userInput is string then we are assigning
if (typeof userInput === "string") {
	userName = userInput;
}
