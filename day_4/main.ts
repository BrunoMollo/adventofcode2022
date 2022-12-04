import { readLines } from '../readText.js';
import { Range } from './Range.js';


const lines=readLines('./day_4/input.txt')

const rangesPairs:Range[][]=[]
for( let l of lines){
    let range:Range[]= l.split(",")                             // ["58-95", "59-96"]
                            .map(r=>r.split("-"))               // [ ["58","95"], ["59","96"] ]
                            .map(r=>r.map(x=>parseInt(x)))      // [ [58,95], [59,96] ]
                            .map(r=>new Range(r[0], r[1]))      // [{"start":58,"end":95},{"start":56,"end":96}]

    rangesPairs.push(range)
}


const redundandts=rangesPairs.filter( r=> r[0].overlaps(r[1]) )

const result = redundandts.length

console.log(result)


