// Complete the below questions using this array:
const array = [
    {
      username: "john",
      team: "red",
      score: 5,
      items: ["ball", "book", "pen"]
    },
    {
      username: "becky",
      team: "blue",
      score: 10,
      items: ["tape", "backpack", "pen"]
    },
    {
      username: "susy",
      team: "red",
      score: 55,
      items: ["ball", "eraser", "pen"]
    },
    {
      username: "tyson",
      team: "green",
      score: 1,
      items: ["book", "pen"]
    },
  ];
  
  //Create an array using forEach that has all the usernames with a "!" to each of the usernames
  const arrayUser = [];
  array.forEach(user => arrayUser.push(user.username + '!') );
  console.log('forEach: ', arrayUser)  
  
  //Create an array using map that has all the usernames with a "? to each of the usernames
  const mapArray = array.map(user => user.username + '?' );
  console.log('map: ', mapArray);

  //Filter the array to only include users who are on team: red
  const filterArray = array.filter(user => user.team === 'red');
  console.log(filterArray);
  
  //Find out the total score of all users using reduce
  const reduceArray = array.reduce((acc, num) => {
      return acc + num.score
    }, 0);
  console.log(reduceArray);

  // (1), what is the value of i? index value
  // (2), Make this map function pure:
  const arrayNum = [1, 2, 4, 5, 8, 9];
  const newArray = arrayNum.map((num, i) => {
      console.log(num, i);
    //   alert(num);
      return num * 2;
  })
  
  //BONUS: create a new list with all user information, but add "!" to the end of each items they own.
  const newList = [
      {
          username: 'johnbul',
          team: 'purple',
          score: 40,
          items: ['book!', 'tape!']
      },
      {
          username: 'george',
          team: 'red',
          score: 30,
          items: ['ball', 'blade', 'pen']
      },
      {
          username: 'muri',
          team: 'green',
          score: 29,
          items: ['pen', 'ball']
      }
  ];
