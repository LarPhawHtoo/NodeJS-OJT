//bind() method
let car2 = {
    speed: 5,
    start: function() {
        console.log('Start with ' + this.speed + ' km/h');
    }
};
let aircraft = {
    speed: 10,
    fly: function() {
        console.log('Flying');
    }
};
let taxiing = car2.start.bind(aircraft);
taxiing();