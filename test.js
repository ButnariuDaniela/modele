// function executeQuery(query, cb) {
//     // too long to wait
//     setTimeout(() => cb(3), 3000);
// }

// executeQuery('', (res) => {
//     console.log(res);
// })

const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => resolve(3), 3000);
});

// myPromise.then((res) => console.log(res));
async function run() {
    //echivalent
    // myPromise.then(res => {
    //     console.log(res);
    //     console.log('I am done')
    // })
    
    const res = await myPromise;
    console.log(res)
    console.log('I am done')
}

run()