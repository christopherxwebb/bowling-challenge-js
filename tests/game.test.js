const Game = require('../lib/game');

describe('Game Class'), () => {

    beforeEach(() => {
        game = new Game();
    })

    it('records a gutter game'), () => {
        for (let i= 0; i < 20; i++) {
            game.roll(0);
        }
        expect(game.score()).toBe(0);
    }
}