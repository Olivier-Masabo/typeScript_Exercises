  // Beginner level exercises
 //exercise 1
let myName:string = "Masabo";
let male:boolean = true;
const age:number = 21;

console.log(myName,male,age)

//exercise 2
function addNumbers(a:number,b:number){
    return a + b
}
console.log(addNumbers(10,40));

//exercise 3
type stock= {id:number,name:string,price:number}
const product: stock[] =[
    {id:1,name:"t-shirt",price:5000},
     {id:2,name:"trouser",price:10000},
      {id:3,name:"hoodie",price:15000}
]
console.log(product)

//exercise 4
const userDetails = (userId:number | string) =>{
    if(typeof userId === "string"){
        console.log(`your id is in string form: ${userId} `)
    }
    else{
        console.log(`your id is in number form:${userId}`);

    }
}
userDetails("Uid272")