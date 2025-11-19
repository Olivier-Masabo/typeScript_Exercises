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
