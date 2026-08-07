"use client"
import dynamic from "next/dynamic"
import { useState } from "react"
const About = dynamic(()=>(import("./components/About")), {loading: ()=> <div className="flex justify-center items-center h-screen"><Spinner/></div>}) 
const Faq  = dynamic(()=>import("./components/Faq"), {loading: ()=><div className="flex justify-center items-center h-screen "><Spinner/></div>})
const Hero = dynamic(()=>import("./components/Hero"), {loading: ()=><div className="flex justify-center items-center  h-screen"><Spinner/></div>})
const Portfolio = dynamic(()=>import("./components/Portfolio"), {loading: ()=><div className="flex justify-center items-center h-screen "><Spinner/></div>})
const Process = dynamic(()=>import("./components/Process"), {loading: ()=><div className="flex justify-center items-center  h-screen"><Spinner/></div>})
const Service = dynamic(()=>import("./components/Services"), {loading: ()=><div className="flex justify-center items-center h-screen "><Spinner/></div>})
const  QualificationForm = dynamic(()=>import("./card/QualificationForm"), {loading: ()=><div className="flex justify-center items-center h-screen "><Spinner/></div>})

import {useAuth, useClerk} from '@clerk/nextjs'
import { Spinner } from "@/components/ui/spinner"
import LazyLoaderSection from "./utils/lazySection"

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

    <LazyLoaderSection>
    <Hero  handleFormState={handleBookBtnClick}/>
    </LazyLoaderSection>
    <LazyLoaderSection>
    <About handleFormState={handleBookBtnClick}/>
    </LazyLoaderSection>
    <LazyLoaderSection>
    <Service/>
    </LazyLoaderSection>
    <LazyLoaderSection>
    <Process/>
    </LazyLoaderSection>
    <LazyLoaderSection>
    <Faq  handleFormState={handleBookBtnClick}/>
    </LazyLoaderSection>
    <LazyLoaderSection>
    <Portfolio/>
    </LazyLoaderSection>
    </>


  )
}