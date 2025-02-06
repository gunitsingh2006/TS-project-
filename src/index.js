"use strict";
class User {
    constructor(email, name) {
        this._courseCount = 1;
        this.city = "";
        this.name = name;
        this.email = email;
    }
    get getAppleEmail() {
        return `apple${this.email}`;
    }
    get courseCount() {
        return this._courseCount;
    }
    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("Course count should be more than 1");
        }
        this._courseCount = courseNum;
    }
}
const gunit = new User("gunit.com", "gunit");
gunit.city = "harayana";
