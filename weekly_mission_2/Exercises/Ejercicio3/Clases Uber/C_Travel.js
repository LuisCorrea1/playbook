class C_Travel{
    constructor(startPoint, whereTo){
        this.startPoint = startPoint
        this.whereTo = whereTo
        this.tripTo = "Myself"
        this.selectPayment = "Credit Card"
    }

    get getDestination(){
        return `From ${this.startPoint} to ${this.whereTo}`
    }

    get getTripData(){
        return `Payment with ${this.selectPayment}`
    }
}

const NewTrip = new C_Travel("Current Location", "The Coffee Bar")
console.log(NewTrip.getDestination)
console.log(NewTrip.getTripData)