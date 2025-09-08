// Promise is a constructor function
// Promise is a global object
// Promise is a constructor function

async function test() {
    const promise = new Promise((resolve, reject) => {
    if ( /*true operation successful*/) {
        setTimeout(() => {
            resolve('success');
        }, 1000);
    } else {
        catch (error) {
            reject('error');
        }
    }


});

    const res = await promise;
    console.log(res);
}

test();


// .then is a method that returns a new Promise