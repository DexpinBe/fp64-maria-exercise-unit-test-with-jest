const fromDollarToYen = (valueInDollar) => {
    let valueInYen = valueInDollar * 153.28;
    return valueInYen;
};

const fromYenToPound = (valueInYen) => {
    let valueInPound = valueInYen * 0.0052;
    return valueInPound
}



const fromEuroToDollar = function(valueInEuro) {

    let valueInDollar = valueInEuro * 1.07;

    return valueInDollar;
}

const sum = (a,b) => {
    return a + b
}

console.log(sum(7,3))

module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound }

