export class ship{
    length;
    beenHit = 0;
    hasSunken = false;
    constructor(length){
        this.length = length;
    }

    hit(){
        this.beenHit++;
    }
}