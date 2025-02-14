const score: Array<number> = [];
const names: Array<string> = [];

function identifyOne(val: boolean | number): boolean | number {
  return val;
}
function identifyTwe(val: any) {
  return val;
}
function identifyThreee<Type>(val: Type): Type {
  return val;
}

// identifyThreee("3")
// identifyThreee("gunit")
// identifyThreee(true)

function identifyFour<g>(val: g): g {
  //we can call them with anything
  return val;
}
interface Bottle {
  bramd: string;
  type: number;
}

interface Database {
  // Define the properties of the Database interface
}
// identifyFour<Bottle>({})      //this syntax is used whem we make our own

function getSearchProducts<T>(products: T[]): T {
  //do some database operation
  const myIndex = 3;
  return products[myIndex];
}
const getMoreSearchProduct = <T>(products: T[]): T => {
  //do some database operation
  const myIndex = 4;
  return products[myIndex];
};

function anotherFn<T, U extends Database>(valOne: T, valTwo: U): object {
  return {
    valOne,
    valTwo,
  };
}

// anotherFn(3,"okoj")      //it adapt automaticlly
// anotherFn(3,77)      //it adapt automaticlly

interface Quiz {
  name: string;
  type: string;
}
interface Course {
  name: string;
  type: string;
  subject: string;
}

class Sellable<T> {
  public cart: T[] = [];
  addToCart(products: T) {
    this.cart.push(products);
  }
}
