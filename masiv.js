let cars = ["Saab", "Volvo", "BMW","Saab", "Volvo", "BMW"]
         let x = cars.shift()
         let x1 = cars.slice(1)
         console.log(cars)
         console.log(x)
         console.log(x1)
         let x3=cars.slice(0,cars.length-1)
         let x4=cars.splice(2,0,"Opel","honda")
         console.log(x4)
        console.log(cars.sort().reverse())
        for (i = 0; i < cars.length; i++)
        console.log((i+1) + ": " + cars[i])
        cars.forEach((el,index) => console.log('Masīva',index, 'elements: ',el))
        if (cars instanceof Array) {
            console.log('value is Array!')
          } else{
            console.log('value is no Array!')
          }
          if (cars="Volvo") {
            console.log('value is Array!')
          } else{
            console.log('value is no Array!')
          }
         let indexVolvo=cars.indexOf("Volvo")
         let indexVolvo2=cars.lastIndexOf("Volvo")
          let cars2 = ["VW","Ford","Alfa"]
          var c = cars.concat(cars2)
          console.log(c)

          let person = {Firtstname, Lastname, DateOfBirth, Gender, TripPlaces}
          console.log(function a() {
            return this.Firtstname + " " + this.Lastname + " " + this.DateOfBirth;
          })
