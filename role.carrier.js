var roleCarrier = {
 run: function(creep) {
      if (creep.carry.energy < creep.carryCapacity){
        var energy = creep.room.find(FIND_DROPPED_ENERGY);
        
         if (energy.length) {
            console.log('found ' + energy[0].energy + ' energy at ', energy[0].pos);
            creep.pickup(energy[0]);
            creep.moveTo(energy[0]);
            }
      }
               else {
            var targets = creep.room.find(FIND_STRUCTURES, {
                    filter: (structure) => {
                        return (structure.structureType == STRUCTURE_EXTENSION ||
                                structure.structureType == STRUCTURE_SPAWN ||
                                structure.structureType == STRUCTURE_CONTAINER ||
                                structure.structureType == STRUCTURE_TOWER) && structure.energy < structure.energyCapacity;
                    }
            });
            if(targets.length > 0) {
                if(creep.transfer(targets[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(targets[0]);
                }
            }
        }
}
};

module.exports = roleCarrier;