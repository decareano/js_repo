// function successCallback(result) {
//   //console.log("It succeeded with " + result);
// }

// function failureCallback(error) {
//   //console.log("It failed with " + error);
// }

var goodBoy = true;

const promise = new Promise((resolve, reject) =>  {

        if (goodBoy) {
            var phone = {
                brand: 'iphone10',
                color: 'gray'
            };
            resolve(phone);
        } else {
            var reason = new Error ('No iphone for you');
            reject(reason);
        }
        //resolve(successCallback);
        //reject(failureCallback);

});

//promise.then(resolve, reject);

var testingPromise = function () {
    console.log('if_goodboy');
    promise
    .then(showOff)
       
    .then(function (resolve) {
        console.log(resolve);
    })
    .catch(function (reject) {
        console.log(reject.message);
    });
    console.log('if_badboy');
};

var showOff = function (phone) {
    return new Promise(
        function (resolve, reject) {
            var message = 'Hey friend, I have a new ' +
                phone.color + ' ' + phone.brand + ' phone';

            resolve(message);
        }
    );
};

testingPromise();
showOff();
