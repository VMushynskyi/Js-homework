import { Clock } from "./clock.js";

class ExtendedClock extends Clock {

    constructor({ template }, ms = 1000) {
        super({ template })
        this.ms = ms;
    }

    start() {
        this.render();
        this.timer = setInterval(() => this.render(), this.ms);
    }
}

export { ExtendedClock };