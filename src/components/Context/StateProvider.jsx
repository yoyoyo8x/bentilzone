import React, {createContext, useContext, useReducer} from "react";


export const StateContext = createContext();   //Tạo ra trạng thái ban đầu khi vào trang web
export const StateProvider = ({reducer, initialState, children})=>(
    <StateContext.Provider value={useReducer(reducer,initialState)}>
        {children}
    </StateContext.Provider>
);
export const useStateValue = () => useContext(StateContext)