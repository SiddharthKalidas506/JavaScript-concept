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

let printTrainDetails=getTrainDetails.bind(trainDetails,"rahul","varma");
console.log(printTrainDetails());