"use client"

import About from "./components/About"
import Faq from "./components/Faq"
import Hero from "./components/Hero"
import Portfolio from "./components/Portfolio"
import Proccess from "./components/Process"
import Service from "./components/Services"

export default function Home(){
  return(
    <>
    <Hero/>
    <About/>
    <Service/>
    <Proccess/>
    <Faq/>
    <Portfolio/>
    </>


  )
}