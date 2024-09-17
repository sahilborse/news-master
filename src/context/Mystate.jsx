import React from 'react'
import { useState} from 'react';
import MyContext from './MyContext';
export default function Mystate({children}) {
    const [newsType,setNewsType]=useState("general");
    const context="new arrival"
  return (
    <MyContext.Provider value={{
        newsType,setNewsType,context}} >
      {children}
    </MyContext.Provider>
  )
}
