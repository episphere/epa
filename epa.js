console.log(`epa.js loaded at ${Date()}`);

(async function(){
    epa = await import('./export.js');
    if(typeof(define)!="undefined"){
        define(epa)
    }
})()