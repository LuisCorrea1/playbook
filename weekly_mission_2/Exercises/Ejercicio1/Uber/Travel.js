const Travel = {
    startPoint: "Current Location",
    whereTo: "The Coffe Bar",
    tripTo: "Myself",
    selectPayment: "Credit Card",

    getDestination: function(){
        return `From ${this.startPoint} to ${this.whereTo}`
    },

    getTripData: function(){
        return `Payment with ${this.selectPayment}`
    }
}

console.log(Travel.getDestination())
console.log(Travel.getTripData())