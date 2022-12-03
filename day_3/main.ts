import Rucksack, { Item } from './Rucksack.js';
import readText from '../readText.js';


const text=readText('./day_3/input.txt')

const lines=text.split("\n").map((l)=>l.trim())

const rucksacks=lines.map(l=>new Rucksack(l))


let priorityPerRuckSack=rucksacks.map(r=>{
    const repeatedItemTypes:Item[]=[]
    r.repeatedItemTypes().forEach(
        (i)=>{
            if(repeatedItemTypes.some((o)=>o.equals(i))) return
            else repeatedItemTypes.push(i)
        }
    )
    if(repeatedItemTypes.length==0) return 0

    else return repeatedItemTypes.map(i=>i.priority).reduce((prev,acum)=>acum+=prev)
})



const result =priorityPerRuckSack.reduce((prev,acum)=>acum+=prev)

console.log(result)

