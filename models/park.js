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
}

Park.prototype.dinosaurMostVisitors = function() {
    let most= 0;
    for( const dinosaur of this.dinosaurs) {
        if (dinosaur.guestsAttractedPerDay >= most) {
            most = dinosaur.guestsAttractedPerDay;
            return most;
        }
    }
}

Park.prototype.dinosaurOfSpecies = function(species) {
    let speciesList= [];
    for (const dinosaur of this.dinosaurs) {
        if (dinosaur.species === species) {
            speciesList.push(dinosaur);
            return speciesList;
        }
    }
}
module.exports = Park;



