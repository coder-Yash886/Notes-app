import { BookOpen, LucideDice1 } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router'

const Navbar = () => {

    const user = false

  return (
    <nav className='p-2 border-b border-gray-200 bg-transparent'>
      <div className='max-w-7xl mx-auto flex justify-between items-center'></div>
      <div className='flex gap-2 items-center'>
        <BookOpen className='h-6 w-6 text-green-800'/>
        <h1 className='font-bold text-xl'><span className='text-green-600'>Notes</span>App</h1>
      </div>
      <div className='flex gap-7 items-center'>
           <ul className='flex gap-7 items text-lg font-semibold'>
            <l>Features</l>
            <l>Pricing</l>
            <l>About</l>
            {
                user? <></>: <Link to={'/login'}><li>loign in</li></Link>
            }
           </ul>
      </div>
    </nav>
  )
}

export default Navbar
