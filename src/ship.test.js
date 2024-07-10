import {ship} from "./ship.js";

describe("Ship receiving hits", () => {
    test("Register 1 hit", () => {
        let testShip = new ship(4);
        testShip.hit();
        expect(testShip.getNumOfHits()).toBe(1);
    })

    test("More hits than ship length", () => {
        let testShip = new ship(3);
        for(let i = 0; i < 5; i++){
            testShip.hit();
        }
        expect(testShip.getNumOfHits()).toBe(3);
    })

    test("Ship is originaly not sunk", () => {
        let testShip = new ship(2);
        expect(testShip.isSunk()).toBeFalsy();
    })

    test("Ship length 1 sinks with 1 hit", () => {
        let testShip = new ship(1);
        testShip.hit();
        expect(testShip.isSunk()).toBeTruthy();
    })

    test("Ship length 5 sinks with 5 hits and ignores 5 more hits", () => {
        let testShip = new ship(5);
        for(let i = 0; i < 10; i++){
            testShip.hit();
        }
        expect(testShip.isSunk()).toBeTruthy();
        expect(testShip.getNumOfHits()).toBe(5);
    })
});