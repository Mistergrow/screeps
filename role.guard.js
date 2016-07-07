var roleGuard = {
    run: function(creep) {
        
         if(creep.carry.energy < creep.carryCapacity) {
            var sources = creep.room.find(FIND_SOURCES);
            if(creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
                creep.moveTo(sources[0]);
            }
        }
    else{
        var spawn = creep.room.find(FIND_MY_SPAWNS);
        var target = creep.room.find(FIND_HOSTILE_CREEPS);
         if (target) {
        // Hostile creep found, engage
            if (!creep.pos.isNearTo(target[0])) {
                creep.moveTo(target[0]);
            } else {
              creep.attack(target[0]);
            }
            } else {
        // No hostile creep, back to spawn
                if (!creep.pos.isNearTo(spawn)) {
                creep.moveTo(spawn);
            }
        }
    }
}
};
module.exports = roleGuard;