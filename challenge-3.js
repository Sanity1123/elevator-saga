{
    init: function(elevators, floors) {
        // Do stuff with the elevators and floors, which are both arrays of objects
        var elevator = elevators[0];

        if (elevator.loadFactor() > 0){
            var pressed = elevator.getPressedFloors();
            $.each(pressed, function(index, floor){
                elevator.goToFloor(floor, true); 
            });
        }

        $.each(floors, function(index, floor){
            floor.on("up_button_pressed", function(){
                elevator.goToFloor(floor.floorNum());
            });

            floor.on("down_button_pressed", function(){
                elevator.goToFloor(floor.floorNum());
            });
        });

        elevator.on("floor_button_pressed", function(floor){
            elevator.goToFloor(floor, true);
        });
    },
        update: function(dt, elevators, floors) {
            // Do more stuff with the elevators and floors
            // dt is the number of game seconds that passed since the last time update was called
        }
}
