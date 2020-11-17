const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park;
  let dinosaur;
  let dinosaur1;
  let dinosaur2;
  let dinosaur3;

  beforeEach(function () {
    park = new Park("Jurassic Park", 50);
    dinosaur = new Dinosaur("velociraptor", "carnivore", 80);
    dinosaur1 = new Dinosaur("t-rex", "carnivore", 50);
    dinosaur2 = new Dinosaur("t-rex", "carnivore", 50);
    dinosaur3 = new Dinosaur("brachiosaurus", "herbivore", 30);

  });

  it('should have a name', function () {
    const actual = park.name;
    assert.strictEqual(actual, "Jurassic Park");
  });
   
  it('should have a ticket price', function() {
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 50);
  });

  it('should have a collection of dinosaurs', function () {
    const actual = park.dinosaurs;
    assert.deepStrictEqual(actual, []);
  });

  it('should be able to add a dinosaur to its collection', function() {
    park.addDinosaur(dinosaur);
    const expected = [dinosaur];
    assert.deepStrictEqual(park.dinosaurs, expected);
  });

  it('should be able to remove a dinosaur from its collection', function () {
    park.addDinosaur(dinosaur);
    park.removeDinosaur(dinosaur);
    const expected = [];
    const actual = park.dinosaurs;
    assert.deepStrictEqual(actual, expected);
  });

  it('should be able to find the dinosaur that attracts the most visitors', function () {
    park.addDinosaur(dinosaur);
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    const actual = park.dinosaurMostVisitors();
    const expected = 80
    assert.strictEqual(actual, expected)
  });

  it('should be able to find all dinosaurs of a particular species', function () {
    park.addDinosaur(dinosaur);
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    const actual = park.dinosaurOfSpecies("t-rex"); 
    const expected = [dinosaur1, dinosaur2];
    assert.deepStrictEqual(actual, expected);
  } );

  it('should be able to calculate the total number of visitors per day', function () {
    park.addDinosaur(dinosaur);
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    const actual = park.totalDayVisitors();
    const expected = 210;
    assert.strictEqual(actual, expected);
  });

  it('should be able to calculate the total number of visitors per year', function () {
    park.addDinosaur(dinosaur);
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    const actual = park.totalYearVisitors();
    const expected = 76650;
    assert.strictEqual(actual, expected);
  });

  it('should be able to calculate total revenue for one year', function () {
    park.addDinosaur(dinosaur);
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    const actual = park.totalYearRevenue(park);
    const expected = 3832500;
    assert.strictEqual(actual, expected);
  });

});
