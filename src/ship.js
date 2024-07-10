export class ship{
    length;
    beenHit = 0;
    hasSunken = false;
    constructor(length){
        this.length = length;
    }

    hit(){
        if(!this.isSunk()) this.beenHit++;
    }

    isSunk(){
        return this.beenHit === this.length;
    }
}