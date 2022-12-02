import * as path from 'path';
import * as fs from 'fs';

const text = fs.readFileSync(path.join(__dirname, './input.txt'), 'utf-8');

class Elve{
    calories:number=0
}

const lines:string[] =text.split("\n");


let elves:Elve[]=[]


let e=new Elve()
for(let l of lines){
    if(l=="\r" || l==""){
        elves.push(e)
        e=new Elve()
    }
    else{
        e.calories+= parseInt(l)
    }
}


elves=elves.sort((a,b)=>b.calories-a.calories) //decending

let firstThree=elves.splice(0,3);

let total=firstThree.map(e=>e.calories).reduce( (prev, acum)=>acum+=prev )

console.log(total)
