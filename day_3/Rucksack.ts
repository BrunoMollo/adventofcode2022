 export class Item{

    constructor(public code:string){}

    equals(other: Item):boolean{
        return this.code==other.code
    }


// Lowercase item types a through z have priorities 1 through 26.
// Uppercase item types A through Z have priorities 27 through 52.
    get priority():number{
        const ascii=this.code.charCodeAt(0)
        if(ascii>96){
            return ascii-96
        }
        else{
            return ascii-38
        }
    }

}


class Compartment{
    items:Item[]=[]

    constructor(line:string){
        [...line].forEach(c=>this.items.push(new Item(c)));
    }

    intersec(other:Compartment):Item[]{
        const intersection:Item[]=[]

        for(let i of this.items){
            for(let o of other.items){
                if(i.equals(o)){
                    if(!intersection.includes(i)) intersection.push(i)
                }
            }
        }

        return intersection

    }

}


export default class Rucksack{
    
    firstCompartment: Compartment
    secondCompartment:Compartment

    constructor(line:string){
        let f=line.slice(0,line.length/2)
        let s=line.slice(line.length/2, line.length)

        this.firstCompartment=new Compartment(f)
        this.secondCompartment=new Compartment(s)
    }


    repeatedItemTypes():Item[]{
        return this.firstCompartment.intersec(this.secondCompartment)
    }


}
