import Students from '@/components/Students'
import { Button } from '@/components/ui/button'
import Users from '@/hooks/Users'
import React from 'react'

const Service = () => {
  return (
    <div>
        <Button variant="destructive">Delete</Button>
        <Button variant="outline">outline</Button>
        <Button variant="secondary">secondary</Button>
        <Button variant="ghost">ghost</Button>
        
        <h1>This is {name}</h1>
        <Users/>

        <Students name="user" age={20}/>
    </div>
  )
}

export default Service