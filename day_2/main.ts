import * as path from 'path';
import * as fs from 'fs';
import { Turn } from './Turn';
import { Shape } from './Shape';
import { Result } from './Result';



const text = fs.readFileSync(path.join(__dirname, './input.txt'), 'utf-8');

const lines=text.split("\n").filter(l=>l.length>0); // there is an empty line an the end


const turns =lines.map(l=>{
    let opponent=Shape.fromCode(l[0])
    let result= Result.fromCode(l[2])
    return new Turn(opponent, result)
})

const total=turns.map(t=>t.myPoints()).reduce( (prev, acum)=>acum+=prev )

console.log(total)

