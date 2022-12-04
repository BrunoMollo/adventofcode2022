import * as path from 'path';
import * as fs from 'fs';
import { fileURLToPath } from 'url';



export function readText(url:string):string{
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    return fs.readFileSync(path.join(__dirname, url), 'utf-8');
}


export function readLines(url:string):string[]{
    const text= readText(url)
    return text.split("\n").map((l)=>l.trim()).filter(l=>l.length>0); //there can ba an emty line at the end due to vsCode
}
