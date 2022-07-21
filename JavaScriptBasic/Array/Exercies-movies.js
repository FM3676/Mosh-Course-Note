const movies = [
  { title: "a", year: 2018, rating: 4.5 },
  { title: "b", year: 2018, rating: 4.7 },
  { title: "c", year: 2018, rating: 3 },
  { title: "d", year: 2017, rating: 4.5 },
];

// All the movies in 2018 with rating >4
// Sort them by their rating
// Descending order
// Pick their title

const titles = movies
  .filter(value => value.year === 2018 && value.rating >= 4)
  .sort((a, b) => a.rating - b.rating) //a = 4.5, b = 4.0 ==> a - b = 0.5 ==> return 1 ==> a at first
  .reverse()
  .map(m => m.title);

console.log(titles);
//[ 'b', 'a' ]