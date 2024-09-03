import React from 'react';
import Gift from './Component/Gift';
 import Home from './Layout/Home';
import AxiosList from './ReactApi/Recipes';
import {ContextProvider} from './ReactApi/ContextApi/ContextProvider';

function App() {
  return (
  
   <>
   <ContextProvider>
    {/* <Home />
    <Gift /> */}
    <AxiosList />
   </ContextProvider>
   </>
  )
}

export default App