export class ship{
    #length;
    #beenHit = 0;
    constructor(length){
        this.#length = length;
    }

    getLength(){
        return this.#length;
    }

    getNumOfHits(){
        return this.#beenHit;
    }

    hit(){
        if(!this.isSunk()) this.#beenHit++;
    }

    isSunk(){
        return this.#beenHit === this.#length;
    }
}