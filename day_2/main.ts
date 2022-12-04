import Turn from './Turn.js';
import Shape from './Shape.js';
import Result from './Result.js';
import { readLines } from '../readText.js';


const lines=readLines('./day_2/input.txt')


const turns =lines.map(l=>{
    let opponent=Shape.fromCode(l[0])
    let result= Result.fromCode(l[2])
    return new Turn(opponent, result)
})

const total=turns.map(t=>t.myPoints()).reduce( (prev, acum)=>acum+=prev )

console.log(total)

