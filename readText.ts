import * as path from 'path';
import * as fs from 'fs';
import { fileURLToPath } from 'url';



export default function readText(url:string):string{
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    return fs.readFileSync(path.join(__dirname, url), 'utf-8');
}
