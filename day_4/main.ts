import readText from '../readText.js';

class Range{
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





const text=readText('./day_4/input.txt')

const lines=text.split("\n").map((l)=>l.trim()).filter(l=>l.length>0);

const rangesPairs:Range[][]=[]
for( let l of lines){
    let range:Range[]= l.split(",")                            // ["58-95", "59-96"]
                            .map(r=>r.split("-"))               // [ ["58","95"], ["59","96"] ]
                            .map(r=>r.map(x=>parseInt(x)))      // [ [58,95], [59,96] ]
                            .map(r=>new Range(r[0], r[1]))      // [{"start":58,"end":95},{"start":56,"end":96}]

    rangesPairs.push(range)
}


const redundandts=rangesPairs.filter( r=> r[0].overlaps(r[1]) )

const result = redundandts.length

console.log(result)


