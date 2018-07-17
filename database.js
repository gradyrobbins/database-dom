const HomeInventoryDatabase = {};

// Define the arrays (a.k.a. tables) in the database to store each type of items
HomeInventoryDatabase.furniture = []
HomeInventoryDatabase.crafts = []
HomeInventoryDatabase.electronics = []


// The ink well is a craft data item
const vintageInkwell = {
  name: "Vintage Ink Well",
  location: "Writing desk",
  description: "I enjoy this inkwell because it belonged to my grandfather and holds enough ink to survive weeks of writing."
}

// The writing desk is a furniture data item
const writingDesk = {
  name: "Shaker Writing Desk",
  location: "Bedroom",
  description: "This antique desk is special because I found and purchased it with my wife at an Ohio Amish auction."
}

//Your task is to define at least 10 data items to represent things that you have in your home.

//1
const sectionalSofa = {
  name: "Sectional Sofak",
  location: "Living Room",
  description: "This sectional sofa is great for sitting down and watching TV."
}

//2
const shellLamp = {
  name: "SeaShell Lamp",
  location: "Foyer table",
  description: "This lamp is special because it reminds me of the beach, and was given to me by my mother."
}

//3
const foyerTable = {
  name: "Table at the foyer",
  location: "Foyer",
  description: "This table by the front door keeps our dog's leash and other misc items."
}

//4
const bedsideTable = {
  name: "Bedside table",
  location: "Bedroom",
  description: "This table is special because it has a lot of sentimental items inside; pictures and letters for example."
}

//5
const blueVase = {
  name: "Blue Vase",
  location: "Storage Unit",
  description: "This blue vase is special because it was hand made by a friend i had when i lived in Hawaii."
}

//6
const nashvillePuzzlePoster= {
  name: "Nashville puzzle poster",
  location: "Living room wall",
  description: "This poster is special because my girlfriend and I assembled it together."
}

//7
const dotTheLadyBug = {
  name: "Dot, the lady bug",
  location: "Bedroom",
  description: "Dot is a special beanie baby stuffed animal; i gave it to my girlfriend as a gift, because i know she loves ladybugs."
}

//8
const television = {
  name: "TV",
  location: "TV Room",
  description: "This TV is special because we it lets us watch Steve Harvey on family feud."
}

//9
const gratitudeJars = {
  name: "Gratitude Jars",
  location: "at the end of the Hi-Bar in the kitchen",
  description: "Special because it gives us a place to write down and record our many blessings."
}

//10
const fridge = {
  name: "fridge",
  location: "Kitchen",
  description: "This is where we keep our groceries."
}

HomeInventoryDatabase.crafts.push(vintageInkwell)
HomeInventoryDatabase.crafts.push(shellLamp)
HomeInventoryDatabase.crafts.push(blueVase)
HomeInventoryDatabase.crafts.push(nashvillePuzzlePoster)
HomeInventoryDatabase.crafts.push(dotTheLadyBug)
HomeInventoryDatabase.crafts.push(gratitudeJars)
HomeInventoryDatabase.furniture.push(writingDesk)
HomeInventoryDatabase.furniture.push(sectionalSofa)
HomeInventoryDatabase.furniture.push(foyerTable)
HomeInventoryDatabase.furniture.push(bedsideTable)
HomeInventoryDatabase.furniture.push(fridge)
HomeInventoryDatabase.electronics.push(television)



//basically just copy/paste code from the instructions
const saveDatabase = function (databaseObject, localStorageKey) {
  /*
      Convert the Object into a string.
  */
  const stringifiedDatabase = JSON.stringify(databaseObject)

  /*
      Create a key in local storage, and store the string
      version of your inventory database as the value
  */
  localStorage.setItem(localStorageKey, stringifiedDatabase)
}


const loadDatabase = function (localStorageKey) {
  // Get the string version of the database
  const databaseString = localStorage.getItem(localStorageKey)

  // Use JSON.parse() to convert the string back into an object
  return JSON.parse(databaseString)
}

saveDatabase(HomeInventoryDatabase, "HomeInventory")


console.log("Hello World line 136");



// iterate over every data set in the database and 

for (let i = 0; i < HomeInventoryDatabase.crafts.length; i++ ) {
    console.log(HomeInventoryDatabase.crafts[i]);
}
for (let i = 0; i < HomeInventoryDatabase.furniture.length; i++ ) {
    console.log(HomeInventoryDatabase.furniture[i]);
}
for (let i = 0; i < HomeInventoryDatabase.electronics.length; i++ ) {
    console.log(HomeInventoryDatabase.electronics[i]);
}

//  ... create a <section> component

document.body.onload = addElement;

function addElement () { 
  // create a new div element 
  var newSection = document.createElement("section"); 
  // and give it some content 
  var newContent = document.createTextNode("Hi there and greetings!"); 
  // add the text node to the newly created div
  newSection.appendChild(newContent);  



  // add the newly created element and its content into the DOM 
  var currentDiv = document.getElementById("myStuff"); 
  document.body.insertBefore(newSection, currentDiv); 
}


//more copy+paste from W3C schools about creating <p> and appending text:
var para1 = document.createElement("P");                        // Create a <p> element
var t = document.createTextNode("Name:");                       // Create a text node
para1.appendChild(t);                                           // Append the text to <p>
document.getElementById("myStuff").appendChild(para1);          // Append <p> to <div> with id="myStuff"

var para2 = document.createElement("P");                        // Create a <p> element
var t2 = document.createTextNode("location:");                       // Create a text node
para2.appendChild(t2);                                           // Append the text to <p>
document.getElementById("myStuff").appendChild(para2);          // Append <p> to <div> with id="myStuff"

var para3 = document.createElement("P");                        // Create a <p> element
var t3 = document.createTextNode("description:");                       // Create a text node
para3.appendChild(t3);                                           // Append the text to <p>
document.getElementById("myStuff").appendChild(para3);          // Append <p> to <div> with id="myStuff"

