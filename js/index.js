

// function getUserId(userName){
// const userId = Math.floor(Math.random() * 200 );
//  if(userName === "Luis"){
//     return "I'm sick of you!";
//   } else{
//     `Your id is ${userId}`
//   }
// }

const promiseGetUserId = (userName) => {

  const promise = new Promise( (resolve, reject) => {
  setTimeout( () => {
    const userId = Math.floor(Math.random() * 200 );
    if(userName === "Luis"){

      reject("I'm sick of you!");

    } else{
       resolve(`Your id is ${userId}`);
    }
  
  }, 2000);
  });

  return promise;
}

const result= promiseGetUserId("Nuria");
result.then((resolvedValue) => {
	console.log(resolvedValue);
});

 

getUserDataById(){}

getFinesByDNI(){}

