1.

class movie {
    constructor(title, studio, rating) {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }

    Mname() {
        return "you are going to watch" + " " + this.title + " " + "movie";

    }
    Mstud() {
        return "produced by" + " " + this.studio + " " + "Company";

    }
    Mrate() {
        return "with the" + " " + this.rating;

    }


}

var c1 = new movie("Casino Royale", "Eon Productions", "PG-13");
console.log(c1.Mname());
console.log(c1.Mstud());
console.log(c1.Mrate());


2.


class circle {
    constructor(radius, color) {
        this.radius = radius;
        this.color = color;
    }
    getarea() {
        return Math.PI * Math.pow(this.radius, 2) + " " + this.color;
    }
    getcolor() {

        return this.color;
    }

    getcircumference() {
        return 2 * Math.PI * this.radius;
    }

    getcirk() {
        return 2 * Math.PI * this.radius * this.radius;
    }
};

let c1 = new circle(4, "red");
console.log(c1.getarea());
console.log(c1.getcolor());
console.log(c1.getcirk());
console.log(c1.getcircumference());

3.
class person {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age ;
        this.gender = gender;
    }

    Pname() {
        return "the name of person is" + " " + this.name;

    }
    Page(){
        return "AGE" + " " + this.age;

    }
    Pgen(){
        return "GENDER" + " " + this.gender ;

    }
    
    
}

var c1 = new person("Dhinakaran", "23", "male");
console.log(c1.Pname());
console.log(c1.Page());
console.log(c1.Pgen());


4.

let baseFee = 55
let cities = ["chrompet", "annanagar", "Koyambedu" ]
let uberRates = [5, 10, 15]

let customerName = "dhinakaaran" 
let customerCity = "chrompet" 
console.log("Hello", customerName+ ", welcome to the Uber ")
function getRate(customerCity) {
  function uberRate(customerCity, index) {
    let finalRate = (uberRates[index]) * baseFee
    return finalRate
  }
  console.log(customerCity, "rate is:", uberRate(customerCity, cities.indexOf(customerCity)))
}
getRate(customerCity)