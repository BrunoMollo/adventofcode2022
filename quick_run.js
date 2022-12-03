// -----------
// I made this script to quickly compile and run the .ts files
// -----------
import {exec } from 'node:child_process'


function waitingmessage(msj, frameDelay, untilPredicate){
    const renderFrame = (i = 0)=>{
        process.stdout.write(msj+".".repeat(i%4));
        setTimeout(()=>{
            process.stdout.clearLine(0);
            process.stdout.cursorTo(0);
            if(untilPredicate()==true){
                renderFrame(i+1)
            }
        }, frameDelay)
    }
    renderFrame()
}



const folder=process.argv[2]

let compiling=true
exec(`npm run tsc -- ${folder}/main.ts`, (error, stdout, stderr) => {
    if (error) {
      console.error(`tsc error: ${error}`);
      return;
    }

    exec(`node ${folder}/main.js`, (error, stdout, stderr) => {
        if (error) {
          console.error(`node error: ${error}`);
          return;
        }
        console.log("\x1b[36m%s\x1b[0m","Result:",
                    "\x1b[33m", stdout);
      });

  }
).on('spawn',()=>waitingmessage("Compiling", 100, ()=>compiling) )
.on('close', (code) => {
        compiling=false
        console.log(`✅`)
        }
);


