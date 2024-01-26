// Insert your code here

document.querySelector("#register").addEventListener("click", e =>{
  const userToSign ={
    name :document.querySelector("#registerName").value,
    email :document.querySelector("#registerEmail").value,
    password :document.querySelector("#registerPassword").value,
  }

  fetch("https://myweatherapp-part4-backend.vercel.app/users/signup",{
    method: "POST",
    headers:{"Content-Type": "application/json"},
    body:JSON.stringify(userToSign)
  })
  .then(response => response.json())
  .then( data => {
    if(data.result === true){
      window.location.assign('index.html')
    }
  })
})

document.querySelector("#connection").addEventListener("click", e =>{
  const userToCheck ={
    email :document.querySelector("#connectionEmail").value,
    password :document.querySelector("#connectionPassword").value,
  }

  fetch("https://myweatherapp-part4-backend.vercel.app/users/signin",{
    method: "POST",
    headers:{"Content-Type": "application/json"},
    body:JSON.stringify(userToCheck)
  })
  .then(response => response.json())
  .then( data => {
    if(data.result === true){
      window.location.assign('index.html')
    }
  })
})