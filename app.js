console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
function plus(number){
    return (plusNumber) => {
        return plusNumber + number;
    }
};
let plus15 = plus(15);
console.log (plus15(10));

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

let users = [
    {
      name: "Frodo",
      age: 50,
      score: 85,
      isActive: false,
    },
    {
      name: "Sam",
      age: 38,
      score: 94,
      isActive: true,
    },
    {
      name: "Merry",
      age: 36,
      score: 82,
      isActive: true,
    },
    {
      name: "Pippin",
      age: 26,
      score: 77,
      isActive: false,
    },
  ];

  let userName = users.forEach (userArrayElement => {
    console.log(userArrayElement.name);
  })

  


  // Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");

let userMap = users.map((element, index, array)=>{
    return {
        name: element.name,
        score: element.score,
    };
});

// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");

activeUser = users.filter(function(user){
      return user.isActive;
});
console.log(activeUser);

// Exercise 5 Section
console.log("EXERCISE 5:\n==========\n")

users.sor ((a,b) => {
    console.log(a.score, b.score);
    if(a.score>b.score){
        return 1;
    }else if (a.score<b.score){
        return -1;
    }else {
        return 0;
    }
})

// Exercise 6 Section
console.log("EXERCISE 6:\n==========\n")

const scoreSum = users.reduce((preValue, currValue, index, array) => {
    console.log ("preValue:", preValue);
    console.log ("currValue:", currValue);
    return preValue.score + currValue.score;
});

let avg = scoreSum/users.length;

console.log(scoreSum, avg);