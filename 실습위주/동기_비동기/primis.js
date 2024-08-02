// const promise= Promise.resolve({name:'kim',email:'kim@gmail.com'});
// const promise_e = Promise.reject(new Error('Something went wrong'));

// promise.then(user=>console.log(user.email),error=> console.log(error))
// promise.then(user=> console.log(user.email));
// promise.catch(error => console.log(error));

// promise_e.then(user=>console.log(user.email),error=> console.log(error))
// promise_e.then(user=> console.log(user.email));
// promise_e.catch(error => console.log(error));

const promise = new Promise((resolve,reject)=>{
  reject(new Error('Something went wrong'));
})
promise.then(
  user=> console.log(user.email),
  error=> console.log(error.message),
)
promise.then(user => console.log(user.email));
promise.catch(error => console.log(error.message));