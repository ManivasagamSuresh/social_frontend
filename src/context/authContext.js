import { createContext, useEffect, useState } from "react";

export const  AuthContext = createContext();

export const AuthContextProvider = ({children})=>{
    const [currentUser,setCurrentUser]=useState(
        JSON.parse(localStorage.getItem("user"))|| null
    );

    const login = ()=>{
        setCurrentUser({id:1,name:"mani",profilePic:"https://www.shutterstock.com/image-photo/fashion-model-woman-colorful-bright-260nw-1084791122.jpg"});
    };
    useEffect(()=>{
        localStorage.setItem("user",JSON.stringify(currentUser))
    },[currentUser]);

    return(
        <AuthContext.Provider value={{currentUser,login}}>
            {children}
            </AuthContext.Provider>
    );
}