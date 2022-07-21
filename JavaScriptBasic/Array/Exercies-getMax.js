const number = [1, 2, 3, 4];

function getMax(array) {
  if (array.length === 0) return undefined;

  //   let max = array[0];
  //     for (let i = 1; i < array.length; i++)
  //         if (array[i] > max)
  //             max = array[i];

  //   return max;

  return array.reduce((accumulator, current) =>
    current > accumulator ? current : accumulator
  );
}

const max = getMax([1, 2, 2, 1, 30]);

//Regard accumulator as the previousMaxValue.
//current, accumulator
// 2 1
// 2 2
// 1 2
// 30 2

console.log(max);
