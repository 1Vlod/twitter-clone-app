import React from 'react';
import Wrapper from "./components/Wrapper/Wrapper"
import Twitter from "./components/Twitter/Twitter"
import SignIn from "./components/SignIn/SignIn"
import Loader from "./components/Loader/Loader"
import {firebaseContext} from "./utils/context"
import {auth} from "./utils/firebase"

import { useAuthState } from "react-firebase-hooks/auth"


import NewTweetModal from "./components/Modals/NewTweetModal"

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

