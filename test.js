var clientData = {
	id: 12345,
	fullName: "not set",
	setUserName: function(firstName, lastName) {
		this.fullName = firstName + " " + lastName;
		console.log(fullName);
	}

}





function getUserInput(firstName, lastName, callback) {
	callback(firstName, lastName);
	console.log('inside', firstName);



}

getUserInput("barack", "obama");
console.log(clientData.fullName);
console.log(fullName);