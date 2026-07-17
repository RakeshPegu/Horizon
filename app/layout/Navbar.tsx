import { Show, SignInButton, SignUpButton, UserButton } from '@clerk/nextjs'

export default function Navbar() {
  const menuLinks = [
    { name: "Home" },
    { name: "Services" }, 
    { name: "Case Studies" },
    { name: "Book a consultation" },
    { name: "About" }
  ]

  return (
    <nav className='flex flex-row items-center fixed backdrop-blur-md top-0 left-0 z-50 text w-full justify-between px-12 h-16 shadow-md'>
      {/* Brand Logo */}
      <div className='font-bold text-xl tracking-wider '>
        <span>HORIZON</span>
      </div>

      {/* Navigation Links */}
      <ul className='flex flex-row items-center gap-8 '>
        {menuLinks.map((link, indx) => (
          <li key={indx} className='font-medium  transition-colors duration-200 cursor-pointer'>
            {link.name}
          </li>
        ))}
      </ul>

      {/* Auth Section */}
      <div className='flex flex-row items-center gap-4'>
        <Show when="signed-out">
          <SignInButton mode="modal">
            <button className="text-neutral-800 font-medium hover:text-black transition-colors cursor-pointer">
              Sign In
            </button>
          </SignInButton>

          
          <SignUpButton mode="modal">
            <button className=" text-white rounded-full font-medium text-sm h-10 px-5  transition-all cursor-pointer">
              Get Started
            </button>
          </SignUpButton>
        </Show>
      
        <Show when="signed-in">
          <a 
            className="text-white font-serif    rounded-full font-medium text-sm h-10 px-5 flex items-center justify-center  transition-all cursor-pointer"
           >
             Track Your project
           </a>
          <UserButton />
        </Show>
      </div>
    </nav>
  );
}