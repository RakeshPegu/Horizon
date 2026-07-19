"use client"
import { Show, SignInButton, SignUpButton, UserButton } from '@clerk/nextjs'
import {Button} from '@/components/ui/button'
import {Menu} from 'lucide-react'
import MobileMenu from '../card/Menu';
import { useState } from 'react';

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false)
  const handleClick = (id:string)=>{
    document.getElementById(id)?.scrollIntoView({behavior:"smooth"})
  }
  const menuLinks = [
    { name: "Home", id:"home" },
    { name: "Services", id:"service" }, 
    { name: "Case Studies", id:'case-studies' },
    {name:"Feature Work", id:'portfolio'},
    {name:'Process', id:"process"},
    { name: "About", id:"about" },
    {name:"FAQ", id:"faq"}
  ]
  const handleClickMenu =()=>{
    setShowMenu((prev)=>!prev)
    
  }
  
  const handleMenuState = ()=>{
    setShowMenu((prev)=> !prev)
  }

  return (
    <nav className='flex flex-row  items-center fixed backdrop-blur-md top-0 left-0 z-50 text w-full justify-between px-12 h-16 shadow-md'>
      {/* Brand Logo */}
      <div className='relative right-10 md:right-0 font-bold text-xl tracking-wider '>
        <span><a href='/'>HORIZON</a></span>
      </div>

      {/* Navigation Links */}
      <ul className='flex-row items-center gap-8 hidden md:flex '>
        {menuLinks.map((link, indx) => (
          <li key={indx} className='font-medium  transition-colors duration-200 cursor-pointer' onClick={()=>handleClick(link?.id!)}>
            {link.name}
          </li>
        ))}
      </ul>

      <div className='hidden lg:flex justify-center'>
        <Button className={'bg-transparent border rounded-2xl p-4 border-primary-foreground hover:bg-transparent cursor-pointer shadow-md hover:shadow-blue-100'}>Book Consultation</Button>
      </div>
      

      {/* Auth Section */}
      <div className='hidden md:flex flex-row  items-center gap-10'>
        <Show when="signed-out">
          <SignInButton mode="modal">
            <button className=" font-medium  transition-colors cursor-pointer">
              Sign In
            </button>
          </SignInButton>

          
          <SignUpButton mode="modal" >
            <Button className="rounded-4xl px-4! text-sm h-10  transition-all cursor-pointer">
              Get Started
            </Button>
          </SignUpButton>
        </Show>
      
        <Show when="signed-in">
          <a 
            className="text-white bg-primary  font-serif rounded-full font-medium text-sm py-2 px-4 flex items-center justify-center  transition-all cursor-pointer"
           >
             Track Your project
           </a>
          <UserButton />
        </Show>
      </div>

      {/* navbar menu for mobile screen*/}
      <div className='relative left-10 md:hidden '>
        <div className='flex flex-row items-center gap-4' >
          <div className='cursor-pointer  ' onClick={handleClickMenu}>
            <Menu/>
          </div>
          
          <Show when='signed-in'>
            <UserButton />  
          </Show>
        </div> 
  
        <div className={`absolute top-10 w-90 ${showMenu ? '-left-40':'left-100'} transition-all duration-500 ease-in-out bg-foreground `}>
          <MobileMenu handleShowMenu={handleMenuState}/>
        </div>    
      </div>


    </nav>
  );
}