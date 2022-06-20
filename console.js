const sleep = (milliseconds) => {return new Promise(resolve => setTimeout(resolve, milliseconds));};

let op = document.querySelectorAll("button");

let Button = op[0];

for(let i = 0; i < op.length; i++) {
    let re = /(data-e2e="arrow-right")/gm;
     if(re.test(new XMLSerializer().serializeToString(op[i]))) {
         Button = op[i]
     }
}

async function x() {
    while (true){
        await sleep(1000);
        document.querySelectorAll("video")[0].onended = function() {Button.click()}
    }
}
async function start() {
    while(true){
        try{
            x()
        } catch(error){
            x()
        }
        await sleep(1000)
    }
}

start()
