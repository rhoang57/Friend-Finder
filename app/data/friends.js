//You should save your application's data inside of app/data/friends.js as an array of objects. Each of these objects should roughly follow the format below.

// ===============================================================================
// DATA
// Below data will hold all of the survery results from potential friends.
// Initially set dummy friend as Slimer.
// The array you could have been set to an empty array as well.
// ===============================================================================

var friendsArray = [
    {
      name: "Slimer",
      photo: "https://cdn.shopify.com/s/files/1/1452/7530/products/slimer.jpg?v=1505206859",
      scores: [
          5,
          3,
          1,
          3,
          5,
          5,
          5,
          5,
          1,
          3
      ]
    }
  ];
  
  // Export the "dummy" array of Slimer to be default. Below line makes the friendsArray it accessible to other files using require and list friends.js as the required file.
  module.exports = friendsArray;