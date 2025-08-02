"use client"
import React, { useContext, useEffect, useState } from "react"
import { authDataContext } from "./AuthContext"
import axios from "axios"

export const UserDataContext = React.createContext()

const UserContext = ({ children }) => {
    const {serverUrl } = useContext(authDataContext)
    const [userData, setUserData] = useState(null)

    const getCurrentUser = async () => {
        try {
            const res = await axios.get(`${serverUrl}/api/user/currentuser`, 
                { withCredentials: true }
            )
            if (res.data && res.data._id){ 
                setUserData(res.data)
            } else {
                setUserData(false)
            }
        } catch (error) {
            console.log("Error getting current user", error);
            setUserData(false)
        }
    }

    useEffect(() => {
        getCurrentUser()
    }, [])

    const value = {
        userData, setUserData
    }

    return (
        <UserDataContext.Provider value={value}>
            {children}
        </UserDataContext.Provider>
    )
}

export default UserContext