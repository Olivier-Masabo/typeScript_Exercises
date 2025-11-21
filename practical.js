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
