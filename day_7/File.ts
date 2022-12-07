export class MyFile{
    name:string
    size:number

    constructor(line:string){
        if(line!="/"){
            this.name=line.split(" ")[1]
            this.size=+ line.split(" ")[0]
        }
    }
}


