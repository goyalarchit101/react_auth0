import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";


const App = () => {
  const { user, loginWithRedirect, logout, isAuthenticated } = useAuth0();
  if(user)
    console.log(user);

  return (
    <div>
      {
        isAuthenticated ?
          <div>
            <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
              Log Out
            </button>
            <h1>{"Hello "+user.name}</h1>
          </div>
          :
          <button onClick={() => loginWithRedirect()}>Log In</button>
      }

    </div>
  )
}

export default App
