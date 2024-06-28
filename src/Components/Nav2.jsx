import React from 'react'
import { headerLogo } from '../assets/images'
import { navLinks } from '../constants'
import { hamburger } from '../assets/icons'

const Nav2 = () => {
  return (
    <header className='absolute py-10  w-full'>
        <nav className='flex justify-between items-center '>
            <a href="">
                <img src={headerLogo} alt="" />
            </a>
            
        
       
            <ul className= 'flex  flex-1 justify-center items-center gap-16  max-lg:hidden' > 
                {navLinks.map((item)=>
                (
                    <li key={item.label} className='text-slate-gray font-montserrat text-lg '>
                        <a href={item.href}>
                        {item.label}


                        </a>
                        
                        
                    </li>

                ))}

            </ul>



               <div className=' hidden max-lg:block'>
                <a href="">
                <img src={hamburger} alt="hamburger" width={25} height={24} />


                </a>
               </div>
           
            </nav>
          
        
    </header>

    
  )
}

export default Nav2