// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
  /* getInstruction("mashedPotatoes", 0, (step1) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 1, (step2) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 2, (step3) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 3, (step4) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 4, (step5) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
    document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
  }, (error) => console.log(error)); */



// Iteration 1 - using callbacks
getInstruction("mashedPotatoes", 0, (step1) => {
  getInstruction("mashedPotatoes", 1, (step2) => {
    getInstruction("mashedPotatoes", 2, (step3) => {
      getInstruction("mashedPotatoes", 3, (step4) => {
        getInstruction("mashedPotatoes", 4, (step5) => {
          document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
          document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
          document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
          document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
          document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
          document.querySelector("#mashedPotatoes").innerHTML += `<li>Mashed potatoes are ready!</li>`;
          document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
       }, (err) => console.log(err)); }, (err) => console.log(err));
    }, (err) => console.log(err));
  }, (err) => console.log(err));
}, (err) => console.log(err));

// Iteration 2 - using promises
obtainInstruction('steak', 0)
  .then((step0) => {
    setTimeout(() => {
      document.querySelector("#steak").innerHTML += `<li>${step0}</li>`
    }, 1500);
  }).then(obtainInstruction('steak', 1).then((step1) => {
    setTimeout(() => {
      document.querySelector("#steak").innerHTML += `<li>${step1}</li>`
    }, 3000);
  })).then(obtainInstruction('steak', 2).then((step2) => {
    setTimeout(() => {
      document.querySelector("#steak").innerHTML += `<li>${step2}</li>`
    }, 4000);
  })).then(obtainInstruction('steak', 3).then((step3) => {
    setTimeout(() => {
      document.querySelector("#steak").innerHTML += `<li>${step3}</li>`
    }, 5000);
  })).then(obtainInstruction('steak', 4).then((step4) => {
    setTimeout(() => {
      document.querySelector("#steak").innerHTML += `<li>${step4}</li>`
    }, 6000);
  })).then(obtainInstruction('steak', 5).then((step5) => {
    setTimeout(() => {
      document.querySelector("#steak").innerHTML += `<li>${step5}</li>`
    }, 7000);
  })).then(obtainInstruction('steak', 6).then((step6) => {
    setTimeout(() => {
      document.querySelector("#steak").innerHTML += `<li>${step6}</li>`
    }, 8000);
  })).then(obtainInstruction('steak', 7).then((step7) => {
    setTimeout(() => {
      document.querySelector("#steak").innerHTML += `<li>${step7}</li>`
    }, 9000);
  })).then(document.querySelector("#steak").innerHTML += `<li>Steak is ready!</li>`)
  .then(document.querySelector("#steakImg").removeAttribute("hidden"));
  
  
  
  // ... Your code here
// Iteration 3 using async/await
async function makeBroccoli() {
  await obtainInstruction('broccoli', 0).then((step1) => {document.querySelector("#broccoli").innerHTML += `<li>${step1}</li>`; })      
  await obtainInstruction('broccoli', 1).then((step2) => {document.querySelector("#broccoli").innerHTML += `<li>${step2}</li>`; });
  await obtainInstruction('broccoli', 2).then((step3) => {document.querySelector("#broccoli").innerHTML += `<li>${step3}</li>`; });
  await obtainInstruction('broccoli', 3).then((step4) => {document.querySelector("#broccoli").innerHTML += `<li>${step4}</li>`; });
  await obtainInstruction('broccoli', 4).then((step5) => {document.querySelector("#broccoli").innerHTML += `<li>${step5}</li>`; });
  await obtainInstruction('broccoli', 5).then((step6) => {document.querySelector("#broccoli").innerHTML += `<li>${step6}</li>`; });
  await obtainInstruction('broccoli', 6).then((step7) => {document.querySelector("#broccoli").innerHTML += `<li>${step7}</li>`; });
  document.querySelector("#broccoli").innerHTML += `<li>Broccoli is Ready!</li>`;
  document.querySelector("#broccoliImg").removeAttribute("hidden");
}
 
makeBroccoli();

// Bonus 2 - Promise all
// ...