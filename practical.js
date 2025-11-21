//creating interface that refactor the function
function introduceUser(user) {
    return "Hello, my name is ".concat(user.name, ", I am ").concat(user.age, " years old, and my email is ").concat(user.email);
}
console.log(introduceUser({ name: " Alice",
    age: 28,
    email: "alice@example.com" }));
//creating function that accepts an enum
var Status;
(function (Status) {
    Status["Active"] = "Active";
    Status["Inactive"] = "Inactive";
    Status["Pending"] = "Pending";
})(Status || (Status = {}));
function getStatusMessage(status) {
    return "The current status is: ".concat(status);
}
console.log(getStatusMessage(Status.Pending));
// creating generic that accept an array ,return 1st element
function getFirstElement(arr) {
    return arr[0];
}
console.log(getFirstElement([1, 2, 3]));
console.log(getFirstElement(["a", "b", "c"]));
console.log(getFirstElement([{ id: 1 }, { id: 2 }]));
function describeManagerEmployee(me) {
    return "".concat(me.name, " ID: ").concat(me.employeeId, ") manages a team of ").concat(me.teamSize, " people;");
}
console.log(describeManagerEmployee({ name: "Bob", employeeId: 123, teamSize: 5 }));
function applyOperation(a, b, operation) {
    return operation(a, b);
}
var add = function (c, d) { return c + d; };
var multiply = function (c, d) { return c * d; };
console.log(applyOperation(10, 5, add));
var Responses;
(function (Responses) {
    Responses[Responses["success"] = 200] = "success";
    Responses[Responses["Notfound"] = 404] = "Notfound";
    Responses[Responses["servererror"] = 500] = "servererror";
})(Responses || (Responses = {}));
function returnResponse(values) {
    if (values === Responses.success) {
        return "request has be done successfuly: ".concat(values);
    }
    else if (values === Responses.Notfound) {
        return "request not found: ".concat(values);
    }
    else {
        return "server error : ".concat(values);
    }
}
console.log(returnResponse(Responses.success));
// Create a function that accepts a value of type string | number | boolean 
// and uses type guards to return different messages based on the actual type.
function processValue(value) {
    if (typeof value === "string") {
        return "String value: ".concat(value.toUpperCase());
    }
    else if (typeof value === "number") {
        return "String value: ".concat(value * 2);
    }
    else {
        return "String value: ".concat(!value);
    }
}
console.log(processValue(true));
var config = {
    apiUrl: "https://api.example.com",
    timeout: 5000
};
console.log(config);
//Create a class BankAccount with private property balance (number),
//  constructor that initializes balance, and methods deposit() and withdraw() 
// that modify the balance
var BankAccount = /** @class */ (function () {
    function BankAccount(initialbalance) {
        if (initialbalance === void 0) { initialbalance = 1000; }
        this.balance = initialbalance;
    }
    BankAccount.prototype.deposit = function (amount) {
        this.balance = this.balance + amount;
        return "you deposited ".concat(amount, " and your new balance is: ").concat(this.balance);
    };
    BankAccount.prototype.withdraw = function (amount) {
        if (amount <= this.balance) {
            this.balance = this.balance - amount;
            console.log("you withdrawn ".concat(amount, " and your new balance is: ").concat(this.balance));
            return true;
        }
        else {
            console.log("your balance is not enough to proceed this action");
            return false;
        }
    };
    return BankAccount;
}());
var account = new BankAccount();
console.log(account.withdraw(200));
console.log(account.withdraw(2000));
function formatUserTuple(user) {
    var name = user[0], age = user[1], active = user[2];
    return "".concat(name, " is ").concat(age, " years old and is ").concat(active ? "active" : "inactive");
}
console.log(formatUserTuple(["mufasa", 20, false]));
function printCarModel(car) {
    var _a, _b;
    console.log((_a = car.model) === null || _a === void 0 ? void 0 : _a.toUpperCase());
    console.log((_b = car.price) === null || _b === void 0 ? void 0 : _b.toFixed(2));
}
printCarModel({ brand: "Toyota", price: 3000 });
//Solve all the typing issues in the code without changing the implementation
var Counter = /** @class */ (function () {
    function Counter() {
    }
    //   constructor(count:number){
    //     this.count =count;
    //   }
    Counter.increment = function () {
        this.count++;
    };
    Counter.getCount = function () {
        return this.count;
    };
    Counter.count = 0;
    return Counter;
}());
Counter.increment();
console.log(Counter.getCount());
//The following JavaScript code has several type-related issues. Refactor it to work properly in 
// TypeScript by adding appropriate type annotations and fixing type mismatches.
function calculateTotal(items) {
    var total = 0;
    for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
        var item = items_1[_i];
        total += item.price;
    }
    return total.toFixed(2);
}
function applyDiscount(amount, discount) {
    var discountedAmount = amount - (amount * discount);
    return discountedAmount;
}
var products = [
    { name: "Laptop", price: 999 },
    { name: "Mouse", price: 25 },
    { name: "Keyboard", price: 79 }
];
var total = Number(calculateTotal(products));
var discounted = applyDiscount(total, 0.1);
console.log(total);
console.log(discounted);
