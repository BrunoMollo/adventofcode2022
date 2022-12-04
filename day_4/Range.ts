export class Range{
    constructor(public start:number, public end:number){}


    contains(other:Range):boolean{
        if(this.start<=other.start && other.end<=this.end)
            return true
        else 
            return false
    }


    overlaps(other:Range):boolean{
        if(this.start>other.end)
            return false                // ()[]

        if(this.end<other.start)        // []()
            return false

        return true
    }
}
