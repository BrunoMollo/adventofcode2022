import { Item } from "./Rucksack"


type someThingwithItems={ items:Item[]}

export function intersec(first :someThingwithItems ,...others:someThingwithItems []):Item[]{
    const intersection:Item[]=[]

    for(let i of first.items){
        if(intersection.includes(i)) continue
        
        let apearances=0
        for(let other of others){
            for(let i_other of other.items){
                if(i.equals(i_other)){
                    apearances++
                    break
                }
            }
            
        }
        if(apearances==others.length) intersection.push(i)
    }
    
    return intersection
}
