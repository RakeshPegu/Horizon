"use client"

import { useState } from "react"
import About from "./components/About"
import Faq from "./components/Faq"
import Hero from "./components/Hero"
import Portfolio from "./components/Portfolio"
import Proccess from "./components/Process"
import Service from "./components/Services"
import QualificationForm from "./card/QualificationForm"

export default function Home(){
    const [showQualificationForm, setShowQualificationForm] = useState(false)
    const handleShowQualification = ()=>{
      setShowQualificationForm((prev)=>!prev)
    }
    

  return(
    <>
    <QualificationForm formState={showQualificationForm} handleFormState={handleShowQualification}/>
    <Hero  handleFormState={handleShowQualification}/>
    <About handleFormState={handleShowQualification}/>
    <Service/>
    <Proccess/>
    <Faq  handleFormState={handleShowQualification}/>
    <Portfolio/>
    </>


  )
}