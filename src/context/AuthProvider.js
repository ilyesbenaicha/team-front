import { createContext,useState } from "react";

const AuthContext = createContext({
    token : '',
    isLoggedIn: false,
    login : (token)=>{},
    loggout: ()=>{}
});

export const AuthProvider = ({children}) =>{
    const [token,setToken]= useState(null);

    const userIsloggedIn = !!token;

    const loginHandler = (token)=>{
        setToken(token)
    };
    const logoutHandler= ()=>{
        setToken(null);
    };
    const contextValue = {
        token: token,
        isLoggedIn : userIsloggedIn,
        login: loginHandler,
        loggout : logoutHandler
    }
    return(
        <AuthContext.Provider value={{contextValue}}>
           {children} 
        </AuthContext.Provider>
    )
}
export default AuthContext;