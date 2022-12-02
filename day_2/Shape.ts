import { Result } from "./Result"

const RockCode=["A"] 
const PaperCode=["B"]
const ScissorsCode=["C"] 

export class Shape{
    
    private constructor(public name:"Rock" | "Paper" | "Scissors", public score:number){}

    static readonly Rock= new Shape("Rock", 1)
    static readonly Paper= new Shape("Paper", 2)
    static readonly Scissors= new Shape("Scissors",3)

    static readonly All=[Shape.Rock, Shape.Paper, Shape.Scissors]


    static fromCode(code:string):Shape{
        if(RockCode.includes(code))
            return Shape.Rock

        if(PaperCode.includes(code))
            return Shape.Paper

        if(ScissorsCode.includes(code))
            return Shape.Scissors

        throw new Error("invalid code")
    }


    public fight(oppenent:Shape):Result{
    
        if(this.name==oppenent.name)
            return Result.draw


        if(this.name=="Rock" && oppenent.name=="Scissors")
            return Result.win
        
        if(this.name=="Paper" && oppenent.name=="Rock")
            return Result.win

        if(this.name=="Scissors" && oppenent.name=="Paper")
            return Result.win


        else return Result.loss
    }
}
