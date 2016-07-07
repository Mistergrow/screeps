var roleHarvester = require('role.harvester');
var rolebHarvester = require('role.bharvester');
var roleUpgrader = require('role.upgrader');
var roleBuilder = require('role.builder');
var roleRepairer = require('role.repairer');
var roleScout = require('role.scout');
var roleCarrier = require('role.carrier');
var roleGuard = require('role.guard');

var memfree      = require('memfree');

PathFinder.use(true);

module.exports.loop = function () {


    var tower = Game.getObjectById('57752e0b3207ee7e09d4eed0');
    if(tower) {
        var closestDamagedStructure = tower.pos.findClosestByRange(FIND_STRUCTURES, {
            filter: (structure) => structure.hits < structure.hitsMax
        });
        if(closestDamagedStructure) {
            tower.repair(closestDamagedStructure);
        }

        var closestHostile = tower.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
        if(closestHostile) {
            tower.attack(closestHostile);
        }
    }


    for(var name in Game.creeps) {
        var creep = Game.creeps[name];
        
        if(creep.memory.role == 'harvester') {
            roleHarvester.run(creep);
        }
        if(creep.memory.role == 'bharvester') {
            rolebHarvester.run(creep);
        }
        if(creep.memory.role == 'upgrader') {
            roleUpgrader.run(creep);
        }
        if(creep.memory.role == 'builder') {
            roleBuilder.run(creep);
        }
        if(creep.memory.role == 'repairer') {
            roleRepairer.run(creep);
        }
        if(creep.memory.role == 'scout') {
            roleScout.run(creep);
        }
        if(creep.memory.role == 'carrier') {
            roleCarrier.run(creep);
        }
         if(creep.memory.role == 'guard') {
            roleGuard.run(creep);
        }
    }

    var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');
    var bharvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'bharvester');
    var upgraders = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader');
    var builders = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder');
    var repairers = _.filter(Game.creeps, (creep) => creep.memory.role == 'repairer');
    var scouts = _.filter(Game.creeps, (creep) => creep.memory.role == 'scout');
    var carriers = _.filter(Game.creeps, (creep) => creep.memory.role == 'carrier');
    var guards = _.filter(Game.creeps, (creep) => creep.memory.role == 'guard');    
    
    console.log('Harvesters: ' + harvesters.length);
    console.log('Big Harvesters: ' + bharvesters.length);
    console.log('Upgraders: ' + upgraders.length);
    console.log('Builders: ' + builders.length);
    console.log('Repairers: ' + repairers.length);
    console.log('Scouts: ' + scouts.length);
    console.log('Carriers: ' + carriers.length);
    console.log('Guards: ' + guards.length);
    
    
    for(var name in Game.rooms) {
        console.log('Room "'+name+'" has '+Game.rooms[name].energyAvailable+' energy');
    }
    
    if(harvesters.length < 4) {
        var newName = Game.spawns.Spawn1.createCreep([WORK,CARRY,MOVE], undefined, {role: 'harvester'});//LV3
        console.log('Spawning new Harvester: ' + newName);
    }
    if(harvesters.length === 4 && bharvesters.length <5){
    var newName = Game.spawns.Spawn1.createCreep([WORK,WORK,CARRY,CARRY,MOVE,MOVE], undefined, {role: 'bharvester'});//LV3
        console.log('Spawning new Big Harvester: ' + newName);
    }
    if(upgraders.length < 8) {
        var newName = Game.spawns.Spawn1.createCreep([WORK,WORK,CARRY,CARRY,CARRY,MOVE,MOVE], undefined, {role: 'upgrader'});//LV3
        console.log('Spawning new Upgrader: ' + newName);
    }
    if(builders.length < 3) {
        var newName = Game.spawns.Spawn1.createCreep([WORK,WORK,CARRY,CARRY,MOVE,MOVE], undefined, {role: 'builder'});//LV3
        console.log('Spawning new Builder: ' + newName);
    }
    if(repairers.length < 2) {
        var newName = Game.spawns.Spawn1.createCreep([WORK,WORK,CARRY,CARRY,MOVE,MOVE], undefined, {role: 'repairer'});
        console.log('Spawning new Repairer: ' + newName);
    }
    if(scouts.length < 1) {
        var newName = Game.spawns.Spawn1.createCreep([WORK,MOVE,CLAIM], undefined, {role: 'scout'});
        console.log('Spawning new Scout: ' + newName);
    }
     if(harvesters.length == 3 && carriers.length < 2) {
        var newName = Game.spawns.Spawn1.createCreep([CARRY,CARRY,MOVE,MOVE], undefined, {role: 'carrier'});
        console.log('Spawning new Carrier: ' + newName);
    }
      if(harvesters.length === 3 && carriers.length) {
        var newName = Game.spawns.Spawn1.createCreep([MOVE,MOVE,ATTACK,WORK,CARRY], undefined, {role: 'guard'});
        console.log('Spawning new Guard: ' + newName);
    }


    for(var name in Game.creeps) {
        var creep = Game.creeps[name];
        
        if(creep.memory.role == 'harvester') {
            roleHarvester.run(creep);
        }
         if(creep.memory.role == 'bharvester') {
            rolebHarvester.run(creep);
        }
        if(creep.memory.role == 'upgrader') {
            roleUpgrader.run(creep);
        }
        if(creep.memory.role == 'builder') {
            roleBuilder.run(creep);
        }
         if(creep.memory.role == 'repairer') {
            roleRepairer.run(creep);
        }
          if(creep.memory.role == 'scout') {
            roleScout.run(creep);
        }
          if(creep.memory.role == 'carrier') {
            roleCarrier.run(creep);
        }
        if(creep.memory.role == 'guard') {
            roleGuard.run(creep);
        }
    }
    
 
    
}
