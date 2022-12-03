import Rucksack, { Item } from "./Rucksack.js"

export default class Group{
    rucksack:Rucksack[]=[]

    constructor(...lines:string[]){
        lines.forEach(l=>this.rucksack.push(new Rucksack(l)))
    }

    get badget():Item | undefined{
        return this.rucksack[0].intersec(this.rucksack[1], this.rucksack[2]).pop()
    }

}
