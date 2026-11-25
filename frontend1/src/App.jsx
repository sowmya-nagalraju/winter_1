import React from 'react'
import Students from './components/Students'
import {Button} from '@/components/ui/button'
import Count from './hooks/Count'
const App = () => {
  let name = "test"
  return (
    <>
        <div classname="p1-96">App</div>
        <Count/>
        <Button variant="destructive">Delete</Button>
        <Button variant="outline">outline</Button>
        <Button variant="secondary">secondary</Button>
        <Button variant="ghost">ghost</Button>
        <div classname="flex h-96 justify around items-center bg-emerald-6npx sha00">
          <h3>1</h3>
          <h3>2</h3>
        <h3>3</h3>
        </div>
        <h1>This is {name}</h1>

        <Students name="user" age={20}/>
    </>
   
  )
}

export default App