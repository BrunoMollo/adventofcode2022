import {readText} from "../readText.js"

const text=readText("day_6/input.txt")


const hasRepeted=(arr:string[]):boolean=>{
    let repeted=false
    for(let i=0; i<arr.length; i++)
        for(let j=0; j<arr.length; j++){
            if(i!=j && arr[i]==arr[j]) repeted=true
        }
    return repeted
}

const MARK_LENGHT=4

for(let i=MARK_LENGHT; i<text.length; i++){
    let sub=text.slice(i-MARK_LENGHT, i).split("")
    console.log(sub)
    if(!hasRepeted(sub)){
        console.log(i)
        break
    }


}

