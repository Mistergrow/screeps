var roleScout = {
run: function(creep) {
    
    var dest = 'W31N37';
        if(creep.room.name != dest){
            console.log(creep.room.findExitTo(dest));
            creep.moveTo(creep.pos.findClosest(creep.room.findExitTo(dest)));
        }
        else{
            creep.moveTo(creep.room.controller);
            creep.claimController(creep.room.controller);
        }
    
}
};
module.exports = roleScout;


