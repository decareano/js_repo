
var allUserData = {
	username: 'marcelo'
} ;
debugger
function logStuff(userData) {
    if (typeof userData === 'string')
{


}
else if(typeof userData === 'object')
{

    for (var item in userData) {
        console.log(item + ":" + userData[item]);
    }
}

}

function getInput(options, callback) {
    allUserData.push(options);
    callback (options);
}

getInput(allUserData, logStuff);








