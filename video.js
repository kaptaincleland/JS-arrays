var guests = ["mawudeku","persie","gideon","nii","sammy"];
var name = prompt("what's your name.");

guests.includes(name);
guests.push("nesta");
if (guests.includes(name)){
alert("You are Welcome. ;)");
} else {
    alert("Sorry, I don't see your name in the List.");
}

//console.log(guests.length);
//console.log(guests[0]);