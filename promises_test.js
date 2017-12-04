// function readFile(filename, author) {
// 	return new Promise(function (fullfill, reject) {
// 		fs.readFile(filename, author, function (err, res) {
// 			if (err) reject(err);
// 			else fullfill(res);
// 		})
// 	})
// }

//prototype property

function PrintStuff (myDocuments) {
	this.documents = myDocuments;
}

PrintStuff.prototype.print = function  () {
	console.log(this.documents);
}

var newObj = new PrintStuff("I am a node developer");
newObj.print();

//prototype attribute or prototype object...points to the parent for inheritance purposes...
//your prototype is your lineage..ie: newObj prototype is PrintStuff.prototype

// a constructor is a function and you use the new keyword to call constructor

function Account () {

}

var userAccount = new Account();
var myObj = new Object();
console.log(myObj.constructor);
console.log(userAccount.constructor);
