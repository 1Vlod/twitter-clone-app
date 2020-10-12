import React from 'react';
import Wrapper from "./components/Wrapper/Wrapper"
import Twitter from "./components/Twitter/Twitter"
import SignIn from "./components/SignIn/SignIn"
import Loader from "./components/Loader/Loader"
import {firebaseContext} from "./utils/context"
import {auth} from "./utils/firebase"

import { useAuthState } from "react-firebase-hooks/auth"



function App() {

  const [user, loading] = useAuthState(auth)

  return (
    <Wrapper >
      <firebaseContext.Provider value={{user, auth}}>
        {user ? <Twitter/> : (
        loading ? <Loader/> :
        <SignIn/>
        )}
      </firebaseContext.Provider>
    </Wrapper>
  );
}

export default App;

