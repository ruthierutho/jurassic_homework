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
    let most = [];
    for(const dinosaur in this.dinosaurs) {
        if (this.dinosaurs.dinosaur.guestsAttractedPerDay > )
    }
}
module.exports = Park;



  return largestNumber;