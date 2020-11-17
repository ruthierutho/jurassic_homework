const Park = function (name, ticketPrice) {
    this.name = name;
    this.ticketPrice = ticketPrice;
    this.dinosaurs = [];
}

Park.prototype.addDinosaur = function(dinosaur) {
    this.dinosaurs.push(dinosaur);

}

Park.prototype.removeDinosaur = function(dinosaur) {
    const indexOfDinosaur = this.dinosaurs.indexOf(dinosaur);
    this.dinosaurs.splice(indexOfDinosaur, 1);
};

Park.prototype.dinosaurMostVisitors = function() {
    let most= 0;
    for( const dinosaur of this.dinosaurs) {
        if (dinosaur.guestsAttractedPerDay >= most) {
            most = dinosaur.guestsAttractedPerDay;
            return most;
        }
    }
};

Park.prototype.dinosaurOfSpecies = function(species) {
    const speciesList = [];
    for (const dinosaur of this.dinosaurs) {
        if (dinosaur.species === species) {   
            speciesList.push(dinosaur);
        }
    }
    return speciesList;
};

Park.prototype.totalDayVisitors = function() {
    let dayVisitors = 0;
    for ( const dinosaur of this.dinosaurs) {
        dayVisitors += dinosaur.guestsAttractedPerDay;
    }
    return dayVisitors;
};

Park.prototype.totalYearVisitors = function() {
    let yearVisitors = 0;
    yearVisitors = this.totalDayVisitors() * 365;
    return yearVisitors;
};

Park.prototype.totalYearRevenue = function(park) {
    let yearRevenue = 0;
    yearRevenue = this.totalYearVisitors() * park.ticketPrice;
    return yearRevenue;
}


module.exports = Park;



