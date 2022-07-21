const courses = [
  { id: 1, name: "Node.js" },
  { id: 2, name: "JavaScript" },
];

courses.sort((a, b) => {
  //a < b => -1
  //a > b => 1
  //a === b => 0
  const nameA = a.name.toLowerCase();
  const nameB = b.name.toLowerCase();

  if (nameA < nameB) return -1;
  if (nameA > nameB) return 1;
  return 0;
});

console.log(courses);

//[ { id: 2, name: 'JavaScript' }, { id: 1, name: 'Node.js' } ]
// J < N --> return -1 --> J is on the first