function countOccurrences(array, searchElement) {
  if (!Array.isArray(array)) throw new Error("Invalid array.");

  return array.reduce((accumulator, current) => {
    const ocurrence = current === searchElement ? 1 : 0;
    console.log(accumulator, current, searchElement);
    return accumulator + ocurrence;
  }, 0);
}

try {
  const numbers = [1, 2, 3, 4, 1];
  const count = countOccurrences(null, 1);
  console.log(count);
} catch (e) {
  console.log(e.message); // Invalid array.
}
