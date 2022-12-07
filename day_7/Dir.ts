import {MyFile} from "./File.js"
export class Dir{
    name:string="/"

    get size():number{
        return this.children.map(c=>c.size).reduce((prev, acum=0)=>acum+=prev)
    }

    parent?:Dir
    children:(Dir| MyFile)[]=[]


    constructor(line:string, parent?:Dir){
        if(line!="/"){
            this.name=line.split(" ")[1]
        }
        if(parent)
            this.parent=parent
    }

    add(n:Dir|MyFile){
        if(!this.children.some((d)=>d.name==n.name))
            this.children.push(n)
    }
}
