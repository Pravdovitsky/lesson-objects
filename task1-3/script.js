const city1 = {
    name: 'ГородN',
    population: 1e7,
    getName() {
        return this.name;
    }
};

const city2 = {
    name: 'ГородМ',
    population: 1e6,
    getName() {
        return this.name;
    }
};

alert(city1.getName());
alert(city2.getName());
