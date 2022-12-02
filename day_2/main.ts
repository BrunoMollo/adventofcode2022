import * as path from 'path';
import * as fs from 'fs';
import { Turn } from './Turn';
import { Shape } from './Shape';



const text = fs.readFileSync(path.join(__dirname, './input.txt'), 'utf-8');

const lines=text.split("\n").filter(l=>l.length>0); // there is an empty line an the end


const turns =lines.map(l=>{
    let opponent=new Shape(l[0])
    let me= new Shape(l[2])
    return new Turn(opponent, me)
})

const total=turns.map(t=>t.myPoints()).reduce( (prev, acum)=>acum+=prev )

console.log(total)

