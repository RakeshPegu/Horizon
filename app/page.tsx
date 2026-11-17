"use client"
import dynamic from "next/dynamic"
import { useContext, useState } from "react"
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
import { QualificationFormContext } from "./card/QualificationProvider"

export default function Home(){
    const {isOpen, handleFormState} = useContext(QualificationFormContext)
    
    const {isLoaded, isSignedIn} = useAuth()
    const {openSignIn} = useClerk()

    const handleBookBtnClick = ()=>{
      if(isLoaded && !isSignedIn){
        openSignIn()
        return;
        
      }
      handleFormState()


    }
  const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "InnovHubs",
  url: "https://www.innovhubs.com",
  logo: "https://www.innovhubs.com/logo.png",
  description:
    "InnovHubs builds modern business websites, custom web applications, dashboards, and n8n workflow automations.",
};

  return(
      <> 
        <script type="application/ld+json" 
            dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema).replace(/</g, "\\u003c"),
        }}
        />
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
        <Portfolio/>
        </LazyLoaderSection>
        <LazyLoaderSection>
        <Faq  handleFormState={handleBookBtnClick}/>
        </LazyLoaderSection>
    </>


  )
}