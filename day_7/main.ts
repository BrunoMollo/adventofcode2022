import { readLines, readText } from '../readText.js';
import { Dir } from './Dir.js';
import { RouteTraker } from './RouteTraker.js';



let lines=readLines('/day_7/input.txt')

const r= new RouteTraker()

for(let l of lines){
    r.read(l)
}

const arr:Dir[]=[]
function foo(d:Dir){
    if(d.size<=100000){
        arr.push(d)
    }
    d.children.forEach(c=>{if(c instanceof Dir) foo(c)})
}
foo(r.root)

const result=arr.map(d=>d.size).reduce((prev,acum)=>acum+=prev)

console.log(result)

