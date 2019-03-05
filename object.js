let person = {Firtstname:'Kalvis',
Lastname: 'Vitte', 
DateOfBirth: '15,02,1995', 
Gender: 'Male', 
TripPlaces: ['Latvia'],
fullName: function() {
            return this.Firtstname + " " + this.Lastname + " " + this.DateOfBirth;
          },
    changeName: function(name){
        this.Firtstname=name;
    },
    addTrips: function(trip){
        this.TripPlaces.push(trip)
    },
  
};
console.log(person.fullName());
person.changeName('Walter');
console.log(person.fullName());
person.addTrips('German');
console.log(person.TripPlaces);

// tas pats tikai ar constructor

class Construct{
    constructor(Firtstname,Lastname,DateOfBirth,Gender,TripPlaces){
        this.Firtstname = Firtstname;
        this.Lastname = Lastname;
        this.DateOfBirth = DateOfBirth; 
        this.Gender = Gender; 
        this.TripPlaces = TripPlaces || [];
    }

    get name(){
        return this.Firtstname;
    }
 


}
let person3 = new Construct('KALVIS');
console.log(person3.name);
// extend
class Female extends Construct{
    constructor(nameg){
        super(nameg);
        this.Gender='femele';
    }
    sayName() {
        console.log('Sup! My name is ', this.Firtstname + '.');
        super.sayHistory();
      }
}
let girl = new Female('Elizabeth', 'Teilor', '02,02,2000');
console.log(girl.sayName)