var Person = require("./modules/Person");
var $ = require("jquery");

let john = new Person("John Doe", "blue");
john.greet();
let jane = new Person("Jane Smith", "green");
jane.greet();
