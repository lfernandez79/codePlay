console.log(
    '====================Simple JS promise function========================='
);
let promise = new Promise(function (resolve, reject) {
    setTimeout(() => resolve('DONE'), 10000);

    resolve('This is tricky');
});
promise.then(result => console.log(result));


function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
delay(3000).then(() => console.log('runs after 3 seconds'));
