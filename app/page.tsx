"use client"
import { useEffect, useState } from 'react'
export default function Home(){
  const [message, setMessage] = useState()
  useEffect(()=>{
    async function fectchData() {
      const res = await fetch('/api/hello')
      const data = await res.json()
      setMessage(data.message)
      
    }
    fectchData()
  }, [])
  return(
    <div>
      <h1>Next.js api demo</h1>
      <p>{message}</p>
    </div>

  )
}