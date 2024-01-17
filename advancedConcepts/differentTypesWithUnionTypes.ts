// simple class that allows us to specify the minimum and maximum values that form our range and a function to actually perform the validation, as follows:
class RangeValidationBase {
    constructor (private start : number, private end : number) {}

// the constructor above is the same of this below
// private start = 0;
// private end = 0;

// constructor (start : number, end : number) {
//     this.start = start;
//     this.end = end;
// }

    protected RangeCheck(value: number) : boolean {
        return value >= this.start && value <= this.end
    }

    protected GetNumber(value : string) : number {
        return new Number(value).valueOf();
     }
}

// If you need to check your parameters or manipulate them in some way
class AnyRangeValidation extends RangeValidationBase {
    IsInRange(value : any) : boolean {
        if (typeof value === "number") {
            return this.RangeCheck(value);
        } else if (typeof value === "string") {
            return this.RangeCheck(this.GetNumber(value));
        }
        return false;
    }
}

class UnionRangeValidation extends RangeValidationBase {
    IsInRange(value : string | number) : boolean {
        if (typeof value === "number") {
            return this.RangeCheck(value);
        }
        return this.RangeCheck(this.GetNumber(value));
    }
}
