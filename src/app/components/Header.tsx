 import React from 'react'
 
 function Header() {
   return (
     <div className='text-center-mb-12'>
        <div className='flex item-center justify-center mb-4'>
            <div className='w-12 h-12 bg-gradients-to-r from-blue-500 to-purple-600'>
                <span className='text-2xl'>hello</span>

            </div>
            <h1 className='text-5xl front-bold  from-blue-400 to-purple-600'>
                CodeAssistant AI
            </h1>
        </div>
        <p className='text-gray-300 text-lg max-w-2xl mx-auto'>
            you intelligent coding companion,Explain,debug,and genetrate code with AI-power assistance.
        </p>
     </div>
   )
 }
 
 export default Header