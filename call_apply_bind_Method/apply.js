let trainDetails ={
    trainNumer: "4324",
    trainName:"LTT"
}


let trainDetails2 = {
    trainNumer: "4324",
    trainName:"LTT"
}


let getTrainDetails= function(passengersName, passengersSeatNumber){

    console.log(this.trainNumer+" "+this.trainName+" "+passengersName+" "+passengersSeatNumber);

}

getTrainDetails.apply(trainDetails,["sid","D45"]);
getTrainDetails.apply(trainDetails2,["geeta","D46t"]);