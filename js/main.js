// User Input

/* alert("hello World"); */

// confirm()

/* let myBool = confirm("Ok === True\nCancel === False");
console.log(myBool);
 */

// prompt()

let name = prompt("Please enter your name");
if (name) {
  console.log(name.length);
  console.log(name.trim().length);
  console.log(name.trim());
  console.log(name ?? "You didn't enter your name");
} else {
  console.log("You didn't enter your name");
}
