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

    private _countCourse=1

    readonly city:string="harayana"  

    constructor(
        public email:string,
        public name: string,
        // private userId:string

    ){
    
    }
    private deletToken(){
        console.log("deletToken")
    }
    get getAppleEmail():string{
        return `apple${this.email}`
    }

    get courseCount():number{
        return this._countCourse
    }

    set courseCount (courseNum){          //there is not type       // in setter ther is nothuing in input type
        if(courseNum <= 1){
            throw new Error ("Course count should be more than 1")
        }
        this._countCourse=courseNum
 
    }

}

const gunit= new User ("gunit.com", "gunit")
// gunit.city="harayana"

// gunit.deletToken()
// as this is not allowed as it is in priavte prop so it works only in the class of deletToken