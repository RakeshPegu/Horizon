"use client"
import React, {createContext, useContext, useState} from 'react'
export const QualificationFormContext = createContext<{isOpen:boolean, handleFormState: ()=>void}>({
    isOpen:false,
    handleFormState: ()=>{}

});
export function QualificationFormProvider({
    children    
}: {children:React.ReactNode}){
    const [isOpen, setIsOpen] = useState(false)
    const handleFormState = ()=>{
        setIsOpen((prev)=> !prev)

    }
    return(
        <QualificationFormContext.Provider
         value={{isOpen, handleFormState}}        >
            {children}
        </QualificationFormContext.Provider>
    )

}