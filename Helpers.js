async function delay(fn, time = 5000) {
    return new Promise(resolve => {
        setTimeout(()=> {
            resolve();
        },time);
})
}