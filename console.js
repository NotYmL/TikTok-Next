const sleep = (milliseconds) => {return new Promise(resolve => setTimeout(resolve, milliseconds));};

async function x(vid, click) {
    while (true){
        await sleep(1000);
        document.querySelector(vid).onended = function() {document.querySelector(click).click()}
    }
}
async function start(vid, click) {
    while(true){
        try{
            x(vid, click)
        } catch(error){
            x(vid, click)
        }
        await sleep(1000)
    }
}



start("#app > div.tiktok-19fglm-DivBodyContainer.e1irlpdw0 > div.tiktok-7t2h2f-DivBrowserModeContainer.ez1vs6g0 > div.tiktok-5uccoo-DivVideoContainer.ez1vs6g27 > div.tiktok-duttz2-DivVideoWrapper.ez1vs6g9 > div.tiktok-1jxhpnd-DivContainer.e1yey0rl0 > div > video", "#app > div.tiktok-19fglm-DivBodyContainer.e1irlpdw0 > div.tiktok-7t2h2f-DivBrowserModeContainer.ez1vs6g0 > div.tiktok-5uccoo-DivVideoContainer.ez1vs6g27 > button.tiktok-2xqv0y-ButtonBasicButtonContainer-StyledVideoSwitchV2.ez1vs6g15")
// start( vid_JS_Path, next_button_JS_Path)
