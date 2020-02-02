const city1 = {
    name: 'ГородN',
    population: 1e7,
    exportStr() {
        return `name=${city1.name}\n population=${city1.population}`
    }
};

const city2 = {
    name: 'ГородМ',
    population: 1e6,
    exportStr() {
        return `name=${city2.name}\n population=${city2.population}`
    }
};

alert(city1.exportStr());
alert(city2.exportStr());
