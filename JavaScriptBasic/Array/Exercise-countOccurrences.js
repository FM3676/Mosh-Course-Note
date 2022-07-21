const numbers = [1, 2, 3, 4, 1];

function countOccurrences(array, searchElement) {
    // let count = 0;
    // for (let element of array)
    //     if (element === searchElement)
    //         count++;
    // return count;

    return array.reduce((accumulator, current) => {
        const ocurrence = (current === searchElement) ? 1 : 0;
        console.log(accumulator, current, searchElement);
        return accumulator + ocurrence;
    }, 0);
}

const count = countOccurrences(numbers, 1);

console.log(count);

/* 
    0 1 1
    1 2 1
    1 3 1
    1 4 1
    1 1 1
    2
 */