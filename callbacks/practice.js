/* 
  Once you complete a problem, refresh ./SpecRunner.html in your browser and check to see if the problem's test(s) are passing.
  Passed tests will be indicated by a green circle.
  Failed tests will be indicated by a red X.

  You can refresh the page at any time to re-run all the tests.

  In this repo your job is to write functions to make each function call work properly.

  Here's an example of code that will be given to you:

  sayHi('Hi Katie', function(thingToSay){
    alert(thingToSay);
  });

  It would be your job to create the sayHi function:

  var sayHi = function(str, cb){
    cb(str);
  }
*/

////////// PROBLEM 1 //////////

/*
  Write a function called first that takes in two parameters, an array and a callback function.
  Then invoke the callback function, passing in the first element in the array as it's argument.
*/

function first(arr1, cb1) {
  cb1(arr1[0]);
}

// Do not edit the code below.
var names = ["Tyler", "Cahlan", "Ryan", "Colt", "Tyler", "Blaine", "Cahlan"];

first(names, function (firstName) {
  console.log("The first name in names is " + firstName);
  return firstName;
});
// Do not edit the code above.

////////// PROBLEM 2 //////////

/*
  Write a function called last that takes in an array and a callback function. 
  Then invoke the callback, passing in the last element in the array as the argument.
*/

function last(arr1, cb1) {
  cb1(arr1[arr1.length - 1]);
}

// Do not edit the code below.
last(names, function (lastName) {
  console.log("The last name in names is " + lastName);
  return lastName;
});
// Do not edit the code above.

////////// PROBLEM 3 //////////

/*
  Write a function called multiply that takes in three parameters: two numbers and a callback function.  
  Invoke the callback, passing in the product of the two numbers multiplied as the argument. 
*/

function multiply(num1, num2, cb1) {
  cb1(num1 * num2);
}

// Do not edit the code below.
multiply(4, 3, function (answer) {
  console.log("The answer is " + answer); //should console.log 12
});
// Do not edit the code above.

////////// PROBLEM 4 //////////

/*
  Write a function called contains that takes in three parameters: an array, a name and a callback.  
  Check if the name exists in the array. 
  If it does, invoke the callback with true as the argument. 
  If the name does not exist, invoke the callback with false as the argument.
*/

function contains(arr,name,cb){
  if (arr.includes(name)){
    cb(true)
  }
  else {cb(false)}
}

// Do not edit the code below.
contains(names, "Colt", function (result) {
  if (result === true) {
    console.log("Colt is in the array");
  } else {
    console.log("Colt is not in the array");
  }
});
// Do not edit the code above.

////////// PROBLEM 5 //////////

/*
  Write a function called uniq that takes in an array and a callback function.
  Remove any duplicate values from the array, and invoke the callback with the modified array as an argument.
*/

// function uniq(arr1,cb1){
//   let set = new Set(arr1)//Set=is a class. it only has unique values
// //FIT Why do I need this line?
//   let newArr = [...set]//...= Spread operator. Copies everything from one array and adds it to another
// //FIT
//   cb1(newArr)
// }

function uniq(arr1, cb1) {
  if (arr1.length === 0 || arr1.length === 1) {
    return arr1;
  }
  if (!cb1) {
    return arr1;
  }
  for (let u = 0; u < arr1.length; u++) {
    for (let w = u + 1; w < arr1.length; w++) {
      if (arr1[u] === arr1[w]) {
        arr1.splice(w, 1); //splice function starts at the index of an array (u), and deletes the number of items entered (1).
      }
    }
  }
  cb1(arr1);
}
/////

// Do not edit the code below.
uniq(names, function (uniqArr) {
  console.log(
    "The new names array with all the duplicate items removed is ",
    uniqArr
  );
});
// Do not edit the code above.

////////// PROBLEM 6 //////////

/* 
  Write a function called each that takes in an array of names and a callback function. 
  For each name in the array, invoke the callback and pass in the name and the name's index as arguments.
*/

function each(nameArr,cb1){
  for (let l = 0; l < nameArr.length; l++){
    cb1(nameArr[l],l)
  }
}

// Do not edit the code below.
each(names, function (item, indice) {
  console.log("The item in the " + indice + " position is " + item);
});
// Do not edit the code above.

////////// PROBLEM 7 //////////

/*
  Write a function called getUserById that takes in three parameters: an array of objects (users), an id and a callback, and searches for the user with a matching id.
  When the correct user object is found, invoke the callback with the user object as an argument.
*/

// function getUserById(arrUsers,id,cb1){
//   let found = arrUsers.find(element.id === id)
//   console.log (found)
// }

function getUserById(arrUsers,id,cb1){
  let correctUser;
  for (let i = 0; i < arrUsers.length; i++){
    if (arrUsers[i].id === id){
      correctUser = arrUsers[i]
    }
  }
  cb1(correctUser)
}

// Do not edit the code below.
var users = [
  {
    id: "12d",
    email: "tyler@gmail.com",
    name: "Tyler",
    address: "167 East 500 North",
  },
  {
    id: "15a",
    email: "cahlan@gmail.com",
    name: "Cahlan",
    address: "135 East 320 North",
  },
  {
    id: "16t",
    email: "ryan@gmail.com",
    name: "Ryan",
    address: "192 East 32 North",
  },
];

getUserById(users, "16t", function (user) {
  console.log(
    "The user with the id 16t has the email of " +
      user.email +
      " the name of " +
      user.name +
      " and the address of " +
      user.address
  );
});
// Do not edit the code above.
