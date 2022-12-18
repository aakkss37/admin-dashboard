import React, { createContext, useContext, useState } from 'react';

const StateContext = createContext();

const initialState = {
    chat: false,
    chart: false,
    userProfile: false,
    notification: false,
}


export const ContextProvider = ({ children }) => {
    const [activeMenu, setActiveMenu] = useState(true);
	const [isClicked, setIsClicked] = useState(initialState);

	const handleClick = (clickedItem)=>{
		setIsClicked({
			...initialState, [clickedItem]: true  
		})
	}

    return (
		<StateContext.Provider value={{ activeMenu, setActiveMenu, isClicked, setIsClicked, handleClick }}>
            {children}
        </StateContext.Provider>
    )
}


export const useStateContext = () => useContext(StateContext)