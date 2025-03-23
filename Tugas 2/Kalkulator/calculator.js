const calculator = (operator, ...numbers) => {
    if (operator === '+') {
        return numbers.reduce((acc, num) => acc + num, 0);
    } else if (operator === '-') {
        return numbers.reduce((acc, num) => acc - num);
    } else if (operator === '*') {
        return numbers.reduce((acc, num) => acc * num, 1);
    } else if (operator === '/') {
        return numbers.reduce((acc, num) => acc / num);
    } else if (operator === '%') {
        return numbers.reduce((acc, num) => acc % num);
    } else {
        return 'Operator tidak valid';
    }
};

console.log(calculator('+', 10, 5, 15));
console.log(calculator('*', 5, 3, 2));
console.log(calculator('-', 50, 10, 8));
console.log(calculator('/', 150, 5, 2));
console.log(calculator('%', 10, 3)); 
console.log(calculator('^', 2, 3)); 