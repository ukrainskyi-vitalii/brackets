module.exports = function check(input, config) {
    let basket = [];
    let brackets = Object.fromEntries(config);

    input.split('').forEach((elem) => {
        let last = basket[basket.length - 1];
        (brackets[last] === elem) ? basket.pop(): basket.push(elem)
    });

    return basket.length === 0;
}