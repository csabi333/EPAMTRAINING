class Example {
    
    static RACE = 'race';
    static ALL = 'all';
    static SINGLE = 'single';

    raceId;
    finish;

    constructor(raceId, finish) {
        this.raceId = raceId;
        this.finish = finish;
    }

    start(example) {
        switch (example) {
            case 'race': {
                const runs = this._getRuns(10);

                return this._startRace(runs);
            }
            case 'all': {
                const runs = this._getRuns(5);

                return this._startRanking(runs);
            }
            case 'single': {
                const run = this._getRuns(1)[0];

                return this._startHorse(run);
            }
            default: {
                return Promise.reject('No such example');
            }
        }
    }

    _startRace(runs) {
        return Promise.race(runs).then(winner => {
            winner.element.classList.add('winner');
            console.log(winner);

            return winner;
        })
    }

    _startRanking(runs) {
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/allSettled
        return Promise.all(runs).then(horses => {
            const top3 = horses
                .sort((a, b) => a.ts - b.ts)
                .slice(0, 3);

            top3.forEach((horse, index) => horse.element.classList.add(`place-${index + 1}`));

            return top3;
        });
    }

    _startHorse(run) {
        return run.then(horse => {
            horse.element.classList.add('winner');
            console.log(horse);
            return horse;
        });
    }

    _getRuns(n) {
        const horses = Array(n).fill(0).map((x, index) => new Horse(`horse-${index}`, Math.random() * 3 + 2));

        return horses.map(horse => {
            return horse.render(this.raceId)
                .then(() => horse.run(this.finish));
        });
    }
}
