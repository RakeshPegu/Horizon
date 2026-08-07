import React from 'react'
import {useInView} from 'react-intersection-observer'
export default function LazyLoaderSection({children}: {
    children: React.ReactNode
}){
    const {inView, ref} = useInView({threshold:0.1, triggerOnce:true})
    return(
        <div ref={ref}>
            {inView ? children : null }

        </div>
        
    )
}