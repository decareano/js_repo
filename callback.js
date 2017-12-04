var clientData = {
    id: 094545,
    fullName: "not set",
    setUserName: function (firstName, lastName) {
        this.fullName = firstName + " " + lastName;
    }
}

function getUserInput(firstName, lastName, callback) {
    callback.apply(callback, [firstName, lastName]);
}

getUserInput("marcelo", "gobelli1", clientData.setUserName, clientData);

console.log(clientData.fullName);
console.log(global.fullName);


function varTest() {
  var x = 1;
  if (false) {
    var x = 2;  // same variable!
    console.log(x);  // 2
  }
  console.log(x);  // 2
}

varTest();

function letTest() {
  let x = 1;
  if (false) {
    let x = 2;  // different variable
    console.log(x);  // 2
  }
  console.log(x);  // 1
}

letTest();
