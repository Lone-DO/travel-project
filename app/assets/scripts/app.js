var $ = require("jquery");
import Person from "./modules/Person";

class Adult extends Person {
   payTaxes() {
      console.log(this.name + " now owes $0 in taxes.");
   }
}

alert("l;ksdjfa;sldfkj");

let john = new Person("John Doe", "blue");
john.greet();
let jane = new Adult("Jane Smith", "orange");
jane.greet();
jane.payTaxes();
