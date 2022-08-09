function onlyPositive(numbers) {

    let positiveNumber = [];
    for (i = 0; i < numbers.length; i++) {
        let number = numbers[i];

        if (number > 0) {
            positiveNumber.push(number);

        }
        else if (number < 0) {
            break;
        }


    }
    return positiveNumber;
}

const givenNumber = [25, 52, 2, 3, 8, -56, -45, 52, 15, 265];

const result = onlyPositive(givenNumber);

console.log(result);