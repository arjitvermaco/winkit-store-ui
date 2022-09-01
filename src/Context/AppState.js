import { useState } from "react";
import AppContext from "./AppContext";

export default function AppState(props){

  const [cartOpen,setCartOpen] = useState(false)
  const [loginOpen,setLoginOpen] = useState(false);


  return(
    <AppContext.Provider value={{cartOpen,setCartOpen,loginOpen,setLoginOpen}}>
      {props.children}
    </AppContext.Provider>
  )
}