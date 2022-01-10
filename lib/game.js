class Game {
    constructor() {
        this.rolls = []
    }

    roll(pins) {
        this.rolls.push(pins);
    }

    score() {
        return this.rolls.reduce(totalScore);
        function totalScore(total, num) {
            return total + num;
        }
    }

    rollMany(rolls, pins) {
        for(let i=0;i<rolls;i++) {
            game.roll(pins);
        }
    }

}

module.exports = Game;