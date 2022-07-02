const sleep = (milliseconds) => {return new Promise(resolve => setTimeout(resolve, milliseconds));};

async function x() {

   let Button = null;

   while(Button == null){
       let op = document.querySelectorAll("button");

       console.log(Button)
       console.log(op)

       for(let i = 0; i < op.length; i++) {
            let re = /(data-e2e="arrow-right")/gm;
            if(re.test(new XMLSerializer().serializeToString(op[i]))) {
                Button = op[i]
                console.log(Button)

            }
        }
	    await sleep(500)
    }
    console.log(Button)
    console.log("nigger")

    while (true){
        await sleep(1000);
        document.querySelectorAll("video")[0].onended = function() {Button.click()}
    }
}
async function start() {
     try{
          x()
     } catch(error){
         start()
     }
     await sleep(1000)
}

start()
