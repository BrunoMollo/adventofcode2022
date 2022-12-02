const RockCode=["A", "X"] 
const PaperCode=["B" , "Y"]
const ScissorsCode=["C", "Z"] 

export class Shape{
    name:"Rock" | "Paper" | "Scissors"
    score:number


    constructor(code:string){
        if(RockCode.includes(code)){
            this.name="Rock"
            this.score=1
        }

        if(PaperCode.includes(code)){
            this.name="Paper"
            this.score=2
        }

        if(ScissorsCode.includes(code)){
            this.name="Scissors"
            this.score=3
        }


        if(!this.name)
            throw new Error("invalid code")
    }


    

    public fight(oppenent:Shape):number{
        const LOSS=0
        const DRAW=3
        const WiN=6

        if(this.name==oppenent.name)
            return DRAW


        if(this.name=="Rock" && oppenent.name=="Scissors")
            return WiN
        
        if(this.name=="Paper" && oppenent.name=="Rock")
            return WiN

        if(this.name=="Scissors" && oppenent.name=="Paper")
            return WiN


        else return LOSS
    }
}
