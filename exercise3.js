var question = prompt("do u wanna print ur name?");  
var answer = prompt("whats ur name?");
 
var y = "hello my name is ";
var z = y + answer;
var x = "!";
 
console.log(z);
 
while (question == "yes") {
 
var again = prompt("do u wanna print ur name again?");
 
    if (again == "yes") {
    console.log(z += x);
    }
}
 