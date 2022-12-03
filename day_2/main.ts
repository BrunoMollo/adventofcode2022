import Turn from './Turn.js';
import Shape from './Shape.js';
import Result from './Result.js';
import readText from '../readText.js';


const text=readText('./day_2/input.txt')

const lines=text.split("\n").filter(l=>l.length>0); // there is an empty line an the end


const turns =lines.map(l=>{
    let opponent=Shape.fromCode(l[0])
    let result= Result.fromCode(l[2])
    return new Turn(opponent, result)
})

const total=turns.map(t=>t.myPoints()).reduce( (prev, acum)=>acum+=prev )

console.log(total)

