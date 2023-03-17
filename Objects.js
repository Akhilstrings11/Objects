const prabhasDetails = {
    firstName : "Prabhas",
    lastName : "Raju",
    age : 40,
    height : "6ft",
    occupation : "Actor",
    MarritalStatus : "Unmarried"
}
console.log(prabhasDetails)
console.log("First Name:-",prabhasDetails.firstName)
console.log("Last Name:-",prabhasDetails.lastName)

prabhasDetails.FirstFilm = "Eeswar"
console.log("Added maritial satus",prabhasDetails)
delete prabhasDetails.MarritalStatus
console.log(prabhasDetails)

const carDetsils = {
    carName : "Thar",
    carColour : "Black",
    carPrice : "19 Lakhs",
    carMilage : "15.2 kmpl",
    carCC : ["Petrol:- 1997cc", "Diesel:- 2184cc"],
    carNameAndColour : function(){
        console.log("Car Name is:-" + " " + this.carName + "." + " " + "And colour is:-" + " " + this.carColour)
    }
}
console.log(carDetsils)
console.log("Car Name:-",carDetsils.carName)
console.log("Car Colour:-",carDetsils.carColour)
carDetsils.carNameAndColour()

const akhil = {
    fiirstName : "Akhil",
    lastName : "Strings",
    group : "BCA",
    college : "MVN JS & RVR College",
    rollNo : 20,
    fullName : function() {
        console.log(this)
    }
}
akhil.fullName()
console.log(akhil)


var a = 10;
function printName (){
    console.log("The Name is Akhil")
}
console.log(this)
printName()
