const body = document.querySelector('body')

function  submitData(userNames, userEmail){
  
  const userInfo = {
    name: userNames, 
    email: userEmail
  }
  
  const configurationObject = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(userInfo)
  };
  
  return fetch('http://localhost:3000/users', configurationObject)
    .then(function(response) {
      return response.json()
    })
    .then( function ( object ) {
        document.body.innerHTML = object[ "id" ]
      } )
    .catch(function(error) {
      alert('This is an error message')
      body.appendChild(error.message)
    }); 
     
  }