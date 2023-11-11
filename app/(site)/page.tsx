// 'use client'
// import React from 'react'
// import Image from 'next/image'
// import url from "../assets/mac.jpg"
// import moon from "../assets/moon.jpg"
// const page = () => {
//     return (
//         <div className=' capitalize  h-screen'>
//             <h2 className=''>ME</h2>
//             <div className=' flex gap-10 mx-auto my-auto p-5 flex-wrap items-center justify-start'>

//                 <div className=' p-4 gap-3 max-w-sm bg-white shadow-yellow-300 rounded-md shadow-md flex flex-col items-center'>
//                     <div className=''>
//                         <Image className='h-20 w-20' alt='mf' src={url} />
//                     </div>
//                     <div  >
//                         <div className='flex items-center w-full flex-col gap-1'>
//                             <h4 className=' text-xl font-bold text-slate-500 text-center' >Tailwind Css</h4>
//                             <p className=' text-slate-500 font-mono'>  By Hitesh Chaudhry</p>
//                             <button className=' bg-sky-500 hover:bg-slate-600  p-2 rounded-md text-white font-semibold' >Add to cart</button>
//                         </div>
//                     </div>
//                 </div>

//             </div>
//             <div className=' md:text-red-600 sm:bg-red-300 sm:text-blue-700   lg:text-green-900'>
//                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus assumenda quidem, non, quisquam placeat ducimus saepe nihil, quod suscipit atque fugit unde praesentium temporibus sunt vero mollitia deserunt omnis autem.</p>
//             </div>

//             <div className='  m-6 overflow-hidden  bg-white max-w-sm mx-auto text-black rounded-xl md:max-w-2xl md:flex border-slate-300 border-2 '>
//                 <div className=' overflow-hidden ease-in duration-1000'>
//                     <Image className=' hover:scale-105 h-48 w-full object-cover md:h-full md:w-48' alt='none' src={moon} />
//                 </div>
//                 <div className=' p-8 '>

//                 </div>
//             </div>

//         </div>
//     )
// }


import AuthForm from "./components/Auth"
import Image from 'next/image'
import React from 'react'
import logo from "../assets/logo.png"
const page = () => {
    return (
        <div className=' 
        flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8 bg-gray-100'>
            <div className=' sm:mx-auto sm:w-full sm:max-w-md'>
                <Image className=' mx-auto w-auto' alt='logo' height={48} width={48} src={logo} />
            </div>
            <div>
                <h2 className=' mt-6  text-3xl text-center font-bold capitalize tracking-tight text-gray-900'>sign in to your account</h2>
            </div>
            <AuthForm />
        </div>
    )
}


export default page