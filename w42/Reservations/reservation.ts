interface Reservation {
    getDowBooking(): string;
    getCodeBooking(): string;
}

class Reservation {

    protected _DOW:string[];
    protected _code:string;

    constructor(){
        this._DOW = ['MON','TUE','WED','THU','FRI','SAT','SUN'];
        this._code = "";
    }

    public getDowBooking():string{
        let idx = Math.floor(Math.random() * this._DOW.length);        
        return this._DOW[idx];
    }

    public getCodeBooking():string{
        const list = "ABCDEFGHIJKLMNPOQRSTUVWXYZ123456789";
        this._code = "";
        for(let i = 0; i < 8; i++) {
            let rnd = Math.floor(Math.random() * list.length);
            this._code = this._code + list.charAt(rnd);
        }
        return this._code;
    }
}

let rev = new Reservation();

console.log("Booking# " + rev.getCodeBooking() + " for " + rev.getDowBooking());
console.log("Booking# " + rev.getCodeBooking() + " for " + rev.getDowBooking());
console.log("Booking# " + rev.getCodeBooking() + " for " + rev.getDowBooking());
console.log("Booking# " + rev.getCodeBooking() + " for " + rev.getDowBooking());
console.log("Booking# " + rev.getCodeBooking() + " for " + rev.getDowBooking());
console.log("Booking# " + rev.getCodeBooking() + " for " + rev.getDowBooking());
console.log("Booking# " + rev.getCodeBooking() + " for " + rev.getDowBooking());
console.log("Booking# " + rev.getCodeBooking() + " for " + rev.getDowBooking());
console.log("Booking# " + rev.getCodeBooking() + " for " + rev.getDowBooking());
console.log("Booking# " + rev.getCodeBooking() + " for " + rev.getDowBooking());