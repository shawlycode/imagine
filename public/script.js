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












