let fName = prompt("Enter First Name");

alert("Welcome, " + fName);

const myPi = 3.1415926;

let myFavNum = parseFloat(
    prompt("Input your favorite number (this will be the radius):")
  );

let myArea = myPi * (myFavNum ** 2);

alert(
    fName 
    + ", using the radius "
    + myFavNum
    + ", the area of the circle is: "
    + myArea.toFixed(2)
);