const myBtn = document.getElementById('btn');
myBtn.onclick = function () {

  const name = prompt('Enter your Name.');
  document.getElementById('name').innerText = name;


};


const tweet1 = {
  text: "I am learning JS today MEST",
  likes: 10,
  shares: 5,
  retweet: 2,
}
const tweet2 = {
  text: "I am learning Arrays today at MEST",
  likes: 4,
  shares: 1,
  retweet: 3,
}
const tweets = [];
tweets.push(tweet1);
tweets.push(tweet2);
tweets.length;
tweets[1];


// date
const today = new Date();
today.toLocaleDateString();


// IF ELSE
if (today.getHours() >= 18) {
  console.log("class has ended")
} else {
  console.log("class is in session")
}

//FOR LOOPS
for (let i = 0; i <= 10; i++) {
  console.log("notify friends", i)
}



// / IF ELSE
if (today.getHours() >= 18) {
  console.log("class has ended")
} else {
  console.log("class is in session")
}

//FOR LOOPS
for (let i = 0; i <= 10; i++) {
  console.log("notify friends", i)
}

// FUNCTIONS
// Defining functions

function logIn(username, password) {
  if (username == "shawly" && password == "shockdesystem") {
    return "user is log in"

  }
  else if (username != 'shawly') {
    return "invalid username"
  }
  else if (password != 'shockdesystem') {
    return "invalid password"
  }
  else {
    return "username or password is invalid"
  }
};


// invoking the function

logIn('shawly', 'shockdesystem');

// BASIC ARITHMETIC
// addition
// built -in-functions
Math.round(37 / 24);
Math.floor(37 / 24);
Math.ceil(37 / 24);
Math.random();
Math.max(23, 300, 55, 3, 45, 123)
Math.min(23, 300, 55, 3, 45, 123)

// how to generate a random code/number using Math.radom() function
Math.ceil(Math.random() * 1000000);

// handling user inputs
// using the Number()
1290 + Number('300');


// using the array map method
const users = [
  { firstname: 'Freda', lastname: "Astanga" },
  { firstname: 'orlando', lastname: "shawly" },
  { firstname: 'Ray', lastname: "Kutina" },
  { firstname: 'Mickey', lastname: "Delmwine" },
  { firstname: 'Presy', lastname: "Lamin" },

]
users.map(fullname);

// map and return squres of number
// function to square numbers
function square(number) {
  return number ** 2;
}
const numbers = [0, 1, 2, 3, 4, 5,]
numbers.map(square);
// filter even numbers
function even(number) {
  return number % 2 === 0;
}
numbers.filter(even)





// write a function that takes a user with name and dateOfBirth and returns true if their birthday is today else false


const userBirthday = {
  name: 'Orlando',
  dateOfBirth: "1990-06-12",
}
function isBirthday(userBirthday) {
  const today = new Date();
  const birthday = new Date(userBirthday.dateOfBirth)
  if (today.getMonth() === birthday.getMonth() && today.getDate() === birthday.getDate()) {
    return true;
  }
  else {
    return false;
  }
}
isBirthday(userBirthday);

// wirte a function to take in a user with name and dateofbirth and returns a birthday message with their name else return 'its not your birthday'
function birthDayMessage(userBirthday) {
  if (isBirthday(userBirthday)) {
    return `Yeah!! happy birthday, ${userBirthday.name}.`;
  } else {
    return `Yo! it's not your birthday today.`
  }

}
birthDayMessage(userBirthday);




