//counter
let counter = 0;

/*
* this is without deboucing 
*/
function getdata() {
    console.log("featching data in every api call", counter++);
}


/*
* this is with deboucing 
*/

function myDebounceFunct(value, time) {
    let timer;
    return function () {
        clearTimeout(timer);
        timer=setTimeout(() => {
            value();
        }, time);

    }
}
const betterfunction = myDebounceFunct(getdata, 300);