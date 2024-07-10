import {ship} from "./ship.js";

describe("Ship receiving hits", () => {
    test("Register hit, example 1", () => {
        let testShip = new ship(4);
        testShip.hit();
        expect(testShip.beenHit).toBe(1);
    } )
});