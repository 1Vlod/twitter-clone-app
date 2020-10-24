import React, {Suspense} from 'react';
import { useAuthState } from "react-firebase-hooks/auth"


import Wrapper from "./components/Wrapper/Wrapper"
import Loader from "./components/Loader/Loader"

import {firebaseContext} from "./utils/context"
import {auth} from "./utils/firebase"


const  TwitterOuter = React.lazy(() => import("./components/Twitter/TwitterOuter"))
const  SignIn = React.lazy(() => import("./components/SignIn/SignIn"))


function App() {

  const [user, loading] = useAuthState(auth)

  return (
    <Wrapper >
      <firebaseContext.Provider value={{user, auth}}>
        <Suspense fallback={<Loader/>}>
          {user ? <TwitterOuter/> : (
          loading ? "" : <SignIn/>
          )}
        </Suspense>
      </firebaseContext.Provider>
    </Wrapper>
  );
}

export default App;

