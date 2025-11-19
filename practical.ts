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