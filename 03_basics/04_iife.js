// Immediately Invoked Function Expression (IIFE)


// (function coffee() {
//     console.log('Db connected');
// })();


    //  ()()

    // global scope ke pollution  se problem hoti he kyi bar to global scopeke jo variables he ya jo v declaration he usko pollution ko hatane ke liye humne iife ka use kiya he


    // named iife
    ( function chia()  {
        console.log(`Db Connected two`);
    } ) ()


// unamed iife

//    ; ( () => {
//         console.log(`Db Connected two`);
//     } ) ()



   ; ( (name) => {
        console.log(`Db Connected two ${name}`);
    } ) ("pradyuman")