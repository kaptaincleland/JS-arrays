var guests = ["mawudeku","persie","gideon","nii","sammy"];
var name = prompt("What is your name");

guests.includes(name);

guests.push("nesta");

guests.pop("nesta");
if (guests.includes(name)) {
    
   alert("You are welcome");
} else {
    alert("Sorry I did not see your name list.");
}
//console.log(guests.length);
//console.log(guests[0]);
