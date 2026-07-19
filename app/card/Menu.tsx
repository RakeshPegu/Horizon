import { Button } from "@/components/ui/button";
import { Show, SignInButton, SignUpButton, UserButton } from '@clerk/nextjs'
import { useRef } from "react";
type HandleShowMenu = {
    handleShowMenu: ()=> void
}


export default function MobileMenu({handleShowMenu}:HandleShowMenu){
    
    const menuLists = [
        {
            name:"Home",
             id:'home'
        },
        {
            name:"Services",
            id:"service"
        },
        {
            name:"Case studies",
        },
        {
            name:"About",
            id:'about'
        },
        {
            name:"Process",
            id:"process"
        },
        {
            name:"FAQ",
            id: 'faq'
        }


    ]
    const timerRef = useRef<NodeJS.Timeout | null>(null)
    const handleClickMobileMenu = (id:string)=>{
        document.getElementById(id)?.scrollIntoView({behavior:'smooth'})
        if(timerRef.current) clearTimeout(timerRef.current)
        timerRef.current = setTimeout(() => {
          handleShowMenu()  
            
        }, 100);

    }


    return(
        <div className="bg-foreground  py-10 w-full   flex flex-col gap-6">
            <ul className="flex flex-col px-14 gap-4 ">
                {menuLists.map((menuList, index)=>(
                    <li key={index} className="cursor-pointer " onClick={()=>handleClickMobileMenu(menuList.id!)}>{menuList.name}</li>
                ))}
            </ul>
            <div  className="h-px bg-border "/>
            <div className="flex flex-col gap-4  items-start ">
            <Show when="signed-out">
              <SignInButton mode="modal">
              <button className=" font-medium px-14 cursor-pointer">
                Sign In
               </button>
              </SignInButton>

          
          <SignUpButton mode="modal" >
            <Button className="mx-8 px-4">
              Get Started
            </Button>
          </SignUpButton>
         </Show>
         
         <Show when="signed-in">
          <a 
            className="text-white font-serif bg-primary mx-4 rounded-full font-medium text-sm h-10 px-5 flex items-center justify-center  transition-all cursor-pointer"
           >
             Track Your project
           </a>     
                    
        </Show>
        </div>        

        </div>
    )
}