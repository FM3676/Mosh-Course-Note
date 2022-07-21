const numbers = [1, 2, 3, 4, 1, 1];

function except(array, excluded) {
    return array.filter(value => !excluded.includes(value));
}

const output = except(numbers, [1, 2]);
console.log(output);
//[ 3, 4 ]