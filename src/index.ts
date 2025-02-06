class User{

private _courseCount=1

    email:string                                    //the type should be declared before the use as we are telling that this can be used in futures
    name:string
    city:string=""
    constructor(email:string, name:string){
        this.name=name
        this.email=email

    }

    get getAppleEmail():string{
    return`apple${this.email}`}
    
    get courseCount():number
    {
    return this._courseCount}

    set courseCount(courseNum: number){
    if (courseNum <= 1){
        throw new Error("Course count should be more than 1")
    }
    this._courseCount = courseNum
   }
}
const gunit=new User("gunit.com", "gunit")
gunit.city="harayana"


