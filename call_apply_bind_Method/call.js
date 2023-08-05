
// call

const userDetails =   {
    firstname: "flame ",
    lastName: "beat"
}

//common method 
let getFuntion= function(buildingName,wing){
    console.log(this.firstname, this.lastName+" "+buildingName+" "+wing);
}

getFuntion.call(userDetails,'moonlight','D');


const userDetails2 = {
    firstname:"rita",
    lastName: "vstas"
}

getFuntion.call(userDetails2,'sunlight','A');


















