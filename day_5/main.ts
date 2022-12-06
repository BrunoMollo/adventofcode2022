import { readLines, readText } from '../readText.js';


const stacks:string[][]=[]
let lines=readLines('/day_5/starting.txt')
const number_of_stacks=9
for(let i=1; i<=number_of_stacks*4; i+=4){
    stacks.push(lines.map(l=>l[i]).filter(l=>l!=undefined && l!=' '))
}
for(let s of stacks){
    s.reverse()
}


type Move={amount: number, from: number, to:number }
const moves:Move[]=[]
lines=readLines('./day_5/moves.txt')
for(let l of lines){
    let move:Move={amount:0, from:0, to:0}

    move.amount=+l.split(' ')[1]
    move.from=+l.split(' ')[3]-1
    move.to=+l.split(' ')[5]-1

    moves.push(move)
}

for(let m of moves){
        const from=stacks[m.from]
        let popped=from.slice(from.length-m.amount,from.length)

        for(let i=0; i<m.amount; i++)
            from.pop()

        stacks[m.to].push(...popped)

     
}

const result=stacks.map(c=>(c.length==0)?[' ']:c)
                    .map(c=>c.pop())
                    .join('')

console.log(result)



