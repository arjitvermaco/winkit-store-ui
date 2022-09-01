import { useState } from "react";
import AppContext from "./AppContext";

export default function AppState(props){

  const [cartOpen,setCartOpen] = useState(true)


  return(
    <AppContext.Provider value={{cartOpen,setCartOpen}}>
      {props.children}
    </AppContext.Provider>
  )
}