import { readLines } from '../readText.js';
import { Dir } from './Dir.js';
import { RouteTraker } from './RouteTraker.js';



let lines=readLines('/day_7/input.txt')

const r= new RouteTraker()

for(let l of lines){
    r.read(l)
}


const UPDATE_SIZE=30000000
const TOTAL_DISK=70000000
const ACTUAL_SPACE=TOTAL_DISK-r.root.size
const NEEDED_SPACE=UPDATE_SIZE-ACTUAL_SPACE

const mayDelete:Dir[]=[]
function foo(d:Dir){
    if(d.size>=NEEDED_SPACE){
        mayDelete.push(d)
    }
    d.children.forEach(c=>{if(c instanceof Dir) foo(c)})
}
foo(r.root)



const result=mayDelete.map(d=>d.size).sort((a,b)=>b-a).pop()

console.log(result)

