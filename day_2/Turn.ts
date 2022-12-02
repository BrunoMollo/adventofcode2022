import { Shape } from "./Shape";

export class Turn{
   
    constructor( private opponenet:Shape, private me:Shape){}

    public myPoints():number{
        const outcomePoints=this.me.fight(this.opponenet)
        const shapeScore=this.me.score

        return outcomePoints + shapeScore
    }

}
