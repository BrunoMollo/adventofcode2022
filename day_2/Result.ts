const LOSS=0
const DRAW=3
const WiN=6


export default class Result{
    
    private constructor(public name:"win"|"draw"|"loss", public score:number){}


    static readonly win=new Result("win", 6)
    static readonly draw=new Result("draw",3)
    static readonly loss=new Result("loss", 0)

    static fromCode(resultCode: string):Result{
        if(resultCode=="X") 
            return Result.loss
        
        if(resultCode=="Y")
            return Result.draw

        if(resultCode=="Z")
            return Result.win

        else throw new Error("invlid code")

    }

}
