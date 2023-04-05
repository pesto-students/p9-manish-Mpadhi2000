let userDetails = {
  name : "mayank padhi",
  age: 23,
  designation: "student",
};

let printDetails = function(state,country) {
  console.log(this.name+" "+state+" "+country);
};

printDetails.call(userDetails,"Delhi","India");

let userDetails2 = {
  name : "chetna padhi",
  age: 18,
  designation: "student",
};

// call method
printDetails.call(userDetails2,"mumbai","india");

// Apply method
printDetails.apply(userDetails2,["mumbai","india"]);

// Bind method
let newfun = printDetails.bind(userDetails2, "mumbai", "India");
newfun();
