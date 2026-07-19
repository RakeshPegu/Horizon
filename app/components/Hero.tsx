import {Button} from '@/components/ui/button'
export default function Hero(){
    return(
    <section id='home' className='py-40 md:py-0  md:h-screen pt-24 flex md:mb-40 '>
      {/* left section */}
      <div className='flex flex-row md:py-30 '>
      <div className='flex-1/2 flex flex-col gap-8 pl-2 sm:pl-10'>
       <div className='flex flex-col gap-6 '>
        <h1 className='text-6xl sm:text-7xl  max-w-120  '>
          Build smarter. Automate faster.
         </h1>
        <p className='text-xl pl-2 max-w-150'>
           We help startups and small businesses build websites,
           automate workflows,
           and integrate AI-powered solutions that save 
           time and increase revenue.</p>
        </div>
        <div className='flex flex-row gap-4 pl-2 flex-wrap sm:gap-6'>
        <Button className={ 'sm:py-6 sm:px-6'}>Book a Free consultation</Button>
        <Button className={'sm:py-6 sm:px-6'}> Explore our services</Button>        
       </div>
       </div>
       <div>
       </div>
       </div>
      {/* right */}
      <div className='hidden md:flex flex-1/2'>

        
      </div>

      </section>   

    )
}