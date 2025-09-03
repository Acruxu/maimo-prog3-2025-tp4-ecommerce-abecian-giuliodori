import React from 'react'
import Image from "next/image";
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className='bg-[#2c2c2c] text-[#f4f4f4] py-8'>
      <div className='flex justify-center mb-6'> 
         <Image
            src="/Isologo.png"
            width={80}
            height={40}
            alt="Formula 1 Logo"
          />
      </div>

       <nav className="flex flex-wrap justify-center gap-10 text-sm font-semibold my-6">
        <Link href="#" className="hover:text-gray-300">
          Política de Privacidad
        </Link>
        <Link href="#" className="hover:text-gray-300">
          Política de cookies
        </Link>
        <Link href="#" className="hover:text-gray-300">
          Preferencias para cookies
        </Link>
        <Link href="#" className="hover:text-gray-300">
          Términos de Uso
        </Link>
        <Link href="#" className="hover:text-gray-300">
          Términos de suscripción
        </Link>
        <Link href="#" className="hover:text-gray-300">
          Preguntas Frecuentes
        </Link>
      </nav>

      
       <hr className="border-[#FF2727] mx-4 my-1 w-[74%] justify-self-center " />
       <hr className="border-[#FF2727] mx-4 w-[74%] justify-self-center" />

       <p className="text-center text-xs justify-self-end text-gray-400 mt-6 mr-5">
        © 2003 - 2025 Formula One World Championship Limited
      </p>

    </footer>
  )
}

export default Footer