enum Role1 {
	ADMIN = "admin",
	READONLY = "readonly",
	USER = "user",
}
enum Role2 {
	ADMIN1,
	READONLY1,
	USER1,
}

const addd = {
	as: Role1.ADMIN,
};

const asd = {
	as: Role2.ADMIN1,
};
console.log(addd);
console.log(asd["as"]);
