const checkString1 = null;
const check1 = Buffer('');
class MyString extends String {
	constructor () {
	 super(checkString1);
	 this.myValue = MyString;
	}
}

myString = new MyString('Old yeller');
console.log(myString);

var obj1 = {};
console.log(+obj1);
console.log(`${obj1}`);

const firstName = 'jane';
console.log(`hello ${firstName}, how are you today?`);

var obj2 = {
	[Symbol.toPrimitive](string) {
		if (string == 'string') {
			return 'hi';
		}
	}
};

console.log(+obj2);
console.log(`${obj2}`);
console.log(obj2 + '');
