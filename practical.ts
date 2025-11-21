 //creating interface that refactor the function

 interface User{
    name: string
     age: number, 
     email: string 
    }

function introduceUser(user: User) {
  return `Hello, my name is ${user.name}, I am ${user.age} years old, and my email is ${user.email}`;
}

console.log(introduceUser({name:" Alice",
    age:28,
    email:"alice@example.com"}));

    //creating function that accepts an enum
   enum Status{
    Active = "Active",
    Inactive = "Inactive",
    Pending = "Pending"
}
function getStatusMessage(status: Status):string{ 
   return `The current status is: ${status}`;
}

console.log(getStatusMessage(Status.Pending)); 

// creating generic that accept an array ,return 1st element

function getFirstElement<D>(arr: D[]): D | undefined {
    return arr[0];
}   
console.log(getFirstElement([1, 2, 3])); 
console.log(getFirstElement(["a", "b", "c"]));
console.log(getFirstElement([{ id: 1 }, { id: 2 }])); 

//creating two interface that  intersect other

interface Employee {
    name: string;
    employeeId: number;
}   

interface Manager {
    teamSize: number;
}   

type ManagerEmployee = Employee & Manager;

function describeManagerEmployee(me: ManagerEmployee) {
    return `${me.name} ID: ${me.employeeId}) manages a team of ${me.teamSize} people;`
}
console.log(describeManagerEmployee({ name: "Bob", employeeId: 123, teamSize: 5 }));


//Create a type alias for a function that takes two numbers and returns a number.


type MathOperation = (a: number, b: number) => number;

function applyOperation(a: number, b: number, operation: MathOperation): number {
    return operation(a, b,);
}   
const add: MathOperation = (c,d,) => c + d;
const multiply: MathOperation = (c, d,) => c * d;

console.log(applyOperation(10, 5, add));

enum Responses{
  success =200,
  Notfound =404,
  servererror =500,
}

function returnResponse(values:Responses){
   if(values=== Responses.success){
      return `request has be done successfuly: ${values}`
   }
   else if(values === Responses.Notfound){
    return `request not found: ${values}`
   }else{
    return `server error : ${values}`
   }
}
  
console.log(returnResponse(Responses.success))


// Create a function that accepts a value of type string | number | boolean 
// and uses type guards to return different messages based on the actual type.

function processValue(value: string | number | boolean ):string{
    if(typeof value === "string") {
        return `String value: ${value.toUpperCase()}`
    }else if(typeof value ==="number"){
        return `String value: ${value * 2}`
    }
    else{
         return `String value: ${!value}`
    }
    
}
console.log(processValue(true))

//Create an interface Config with readonly properties for apiUrl (string) and timeout (number). 

interface Config{
    readonly apiUrl:string;
    readonly timeout:number;
}

const config: Config = {
  apiUrl: "https://api.example.com",
  timeout: 5000
};

console.log(config)


//Create a class BankAccount with private property balance (number),
//  constructor that initializes balance, and methods deposit() and withdraw() 
// that modify the balance

class BankAccount{
    private balance:number;
    constructor(initialbalance:number=1000){
        this.balance =initialbalance;
    }
    deposit(amount:number){
        this.balance = this.balance + amount;
        return `you deposited ${amount} and your new balance is: ${this.balance}`
    }

    withdraw(amount:number):boolean{
        if(amount <= this.balance){
            this.balance = this.balance - amount;
            console.log(`you withdrawn ${amount} and your new balance is: ${this.balance}`)
            return true;
        }
        else{
            console.log(`your balance is not enough to proceed this action`)
            return false;
        }
    }
}

const account= new BankAccount()
console.log(account.withdraw(200));
console.log(account.withdraw(2000));

//Create a function that represents a user as a tuple with [name: string, age: number, active: boolean].

type userTuple =[name:string, age: number, active: boolean];

function formatUserTuple(user:userTuple) {
  const [name, age, active] = user;
  return `${name} is ${age} years old and is ${active ? "active" : "inactive"}`;
}
console.log(formatUserTuple(["mufasa",20,false]))

//Debug the following  TypeScript Code Without Changing the Core Implementation

interface Car {
    brand: string;
    model?: string;
    price?: number;
}

function printCarModel(car: Car){
    console.log(car.model?.toUpperCase());
    
    console.log(car.price?.toFixed(2));
}

printCarModel({ brand: "Toyota" , price: 3000});

//Solve all the typing issues in the code without changing the implementation

class Counter {
  static count:number = 0;
//   constructor(count:number){
//     this.count =count;
//   }

  static increment() {
    this.count++;
  }

  static getCount(){
    return this.count; 
  }
}

Counter.increment()
console.log(Counter.getCount())
