let random;



class FifaPlayer{
    constructor(name, pace, shooting, passing){
        this.name = name;
        this.pace = pace;
        this.shooting = shooting;
        this.passing = passing;
    }
    //increase functions
    increasePace(){
        this.pace++     //increase pace
    }
    increaseShooting(){
        this.shooting++
    }
    increasePassing(){
        this.passing++
    }

    //decrease functions
    decreasePace(){
        this.pace--
    }
    decreaseShooting(){
        this.shooting--
    }
    decreasePassing(){
        this.passing--
    }
    
}

const pete = new FifaPlayer("pete", 97, 95, 4)

module.exports = {
    FifaPlayer,
    pete
};