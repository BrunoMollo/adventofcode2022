import {readText} from '../readText.js';


class Elve{
    calories:number=0
}


const text=readText('./day_1/input.txt')
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
