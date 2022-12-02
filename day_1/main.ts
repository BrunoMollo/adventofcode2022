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


let max=0
elves.forEach(e=>{
    if(e.calories>max){
        max=e.calories
    }

})
console.log(max)
