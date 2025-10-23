import Image from "next/image"
import ShopContext from "../contexts/ShopContext"

const Navbar = () => {
  return (
    <div className="flex justify-between items-center px-[20px] pr-[25px] py-[5px] bg-[#FF2727]">
      <div>
        <Image 
          src="/LogotipoBlanco.png"
          width={125}
          height={120}
          alt="Logo"
        />
      </div>

      <div className="flex-1 flex justify-center px-4">
    <input
    type="text"
    placeholder="Buscar..."
    className="w-[60%] max-w-md px-4 py-2 rounded-[10vw] outline-none placeholder-gray-500 bg-white border border-#111111 shadow-sm focus:ring-2 focus:ring-[#BB2026]"
      />
      </div>
      <nav>
        <ul className="flex justify-end items-center gap-[30px] text-white">
          <li className="list-none font-[] ">
            <a className="text-base border-b-2 border-transparent hover:border-[#F4F4F4] hover:border-opacity-1 pb-2 "  href="#">Inicio</a>
          </li>
          <li>
            <a className="text-base border-b-2 border-transparent hover:border-[#F4F4F4] hover:border-opacity-1 pb-2 "  href="#">Mi cuenta</a>
          </li>
          <li>
            <a className="text-base border-b-2 border-transparent hover:border-[#F4F4F4] hover:border-opacity-1 pb-2 "  href="#">Lenguaje</a>
          </li>
          <li>
            <a className="text-base border-b-2 border-transparent hover:border-[#F4F4F4] hover:border-opacity-1 pb-2 " href="#">Carrito</a>
      
          </li>
          <li>
            <a href="#">
              <Image 
            
                src="/Carrito.png" 
                width={35}
                height={35}
                alt="Carrito" 
              />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
