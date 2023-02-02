it('empty tests', () => {})

//Syncrono
// const getSomething = () => 10;

// const system = () => {
//     console.log('init');
//     const something = getSomething();
//     console.log(`Something is ${something}`);
//     console.log('end');
// }


// system();

//Assyncrono  - undefined
// const getSomething = () => {
//      setTimeout(() => {
//         console.log('respondendo...')
//         return 11;
//      }, 1000)
// }

// const system = () => {
//      console.log('init');
//      const something = getSomething();
//      console.log(`Something is ${something}`); // nao respondeu a tempo - undefined
//      console.log('end');
//  }


//  system();

// // Assyncrono - callBack
// const getSomething = (callBack) => {
//     setTimeout(() => {
//        console.log('respondendo...')
//        callBack(12);
//     }, 1000)
// }

// const system = () => {
//     console.log('init');
//     getSomething(some => {
//         console.log(`Something is ${some}`)
//         console.log('end');
//     });
// }


// // system();

// // Assyncrono - Promises
// const getSomething = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('respondendo...')
//             resolve(13);
//         }, 1000)
//     })
// }

// const system = () => {
//     console.log('init');
//     // const prom = getSomething()
//     // prom.then(some => {
//     //     console.log(`Something is ${some}`)
//     //     console.log('end');
//     // })
//     // refatorando codigo acima
//     getSomething().then( some => {
//         console.log(`Something is ${some}`)
//         console.log('end');
//     })       
// }
 
// system();


// Assyncrono - Await (nao utilizado no Cypress)
const getSomething = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('respondendo...')
            resolve(13);
        }, 1000)
    })
}

const system = async () => {
    console.log('init');
    const some = await getSomething()
        console.log(`Something is ${some}`)
        console.log('end');      
}
 
system();