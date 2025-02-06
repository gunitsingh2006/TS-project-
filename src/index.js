"use strict";
// class User {
//     public email:string
//     private name:string
//     readonly city:string="harayana"      //In TypeScript, a constructor is a special method of a class that is automatically called when an instance of the class is created. It is used to initialize the object's properties and perform any setup required for the object.
//     constructor(email:string, name:string ,){
//         this.email=email;
//         this.name=name
//     }
// }
class User {
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this._countCourse = 1;
        this.city = "harayana";
    }
    deletToken() {
        console.log("deletToken");
    }
    get getAppleEmail() {
        return `apple${this.email}`;
    }
    get courseCount() {
        return this._countCourse;
    }
    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("Course count should be more than 1");
        }
        this._countCourse = courseNum;
    }
}
const gunit = new User("gunit.com", "gunit");
// gunit.city="harayana"
// gunit.deletToken()
// as this is not allowed as it is in priavte prop so it works only in the class of deletToken
