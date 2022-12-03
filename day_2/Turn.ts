import Result from "./Result.js";
import Shape from "./Shape.js";


export default class Turn{
 
    private me:Shape
    
    constructor( private opponent:Shape, private result:Result){ 
        
        let move=Shape.All.find(s=>s.fight(this.opponent)==result)

        if(!move)
            throw new Error("Couldn't infer my move")

        this.me=move;

    }

    public myPoints():number{
        return this.me.score +this.result.score
    }

}
