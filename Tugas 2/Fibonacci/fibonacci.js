const fibonacci = (n) => {
    let fib = [3, 5];
    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib.slice(0, n);
};

console.log(fibonacci(10));