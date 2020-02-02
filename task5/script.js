const getObj = function () {
    return this
};

const city1 = {
    name: 'ГородN',
    population: 1e7,
    getCity: getObj
};

console.log(city1.getCity());
