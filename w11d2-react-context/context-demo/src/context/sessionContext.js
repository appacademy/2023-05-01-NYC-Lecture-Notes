import { createContext, useState, useContext } from "react";

export const SessionContext = createContext();

export const SessionProvider = props => {
    const [loggedIn, setLogin] = useState(false);

    return(
        <SessionContext.Provider value={{loggedIn: loggedIn, setLogin: setLogin}}>
            {props.children}
        </SessionContext.Provider>
    )
}

export const useSessionContext = () => {
  return useContext(SessionContext);
}