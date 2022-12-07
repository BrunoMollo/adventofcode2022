import { Dir } from "./Dir.js"
import {MyFile} from "./File.js"

export class RouteTraker{

    private current_dir:Dir
    root:Dir

    constructor(){
        this.root= new Dir("/")
        this.current_dir= this.root
    }

    add(line:string){
        let added:Dir|MyFile
        if(line.includes("dir"))
            added=new Dir(line, this.current_dir)
        else
            added=new MyFile(line)
        this.current_dir.add(added)
    }

    command(line:string){
        const cmd=line.split(" ")[1]
        const option=line.split(" ")[2]
        if(cmd=="cd"){
            if(option=="/")
                return this.current_dir=this.root
        
            if(option=="..")
                if(this.current_dir.parent)
                    return this.current_dir=this.current_dir.parent

                
            const moveToDir=this.current_dir.children.find(d=>d.name==option)
            if(moveToDir && moveToDir instanceof Dir)
                this.current_dir=moveToDir
        }
    
    }


    read(line:string){
        if(line.includes("$"))
            this.command(line)
        else
            this.add(line)
    }
}

