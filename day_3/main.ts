import Rucksack, { Item } from './Rucksack.js';
import readText from '../readText.js';
import Group from './Group.js';



const text=readText('./day_3/input.txt')

const lines=text.split("\n").map((l)=>l.trim()).filter(l=>l.length>0); //ouch

const groups:Group[]=[]

for(let i=0; i<lines.length; i+=3){
    groups.push( new Group(lines[i], lines[i+1], lines[i+2]) )
}


const result =groups.map(g=>g.badget)
                    .map(b=>b?.priority || 0)
                    .reduce((prev,acum)=>acum+=prev)

console.log(result)


