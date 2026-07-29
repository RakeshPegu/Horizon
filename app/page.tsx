"use client"

import { useState } from "react"
import About from "./components/About"
import Faq from "./components/Faq"
import Hero from "./components/Hero"
import Portfolio from "./components/Portfolio"
import Proccess from "./components/Process"
import Service from "./components/Services"
import QualificationForm from "./card/QualificationForm"
import {useAuth, useClerk} from '@clerk/nextjs'

export default function Home(){
    const [showQualificationForm, setShowQualificationForm] = useState(false)
    const {isLoaded, isSignedIn} = useAuth()
    const {openSignIn} = useClerk()
    const handleShowQualification = ()=>{
      setShowQualificationForm((prev)=>!prev)
    }
    const handleBookBtnClick = ()=>{
      if(isLoaded && !isSignedIn){
        openSignIn()
        return;
        
      }
      handleShowQualification()


    }
    

  return(
    <>
    <QualificationForm formState={showQualificationForm} handleFormState={handleShowQualification}/>
    <Hero  handleFormState={handleBookBtnClick}/>
    <About handleFormState={handleBookBtnClick}/>
    <Service/>
    <Proccess/>
    <Faq  handleFormState={handleBookBtnClick}/>
    <Portfolio/>
    </>


  )
}