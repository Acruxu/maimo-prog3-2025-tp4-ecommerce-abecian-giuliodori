import Image from "next/image"

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
    className="w-[60%] max-w-md px-4 py-2 rounded-xl outline-none text-black placeholder-gray-500 bg-white border border-#111111 shadow-sm focus:ring-2 focus:ring-[#BB2026]"
      />
      </div>
      <nav>
        <ul className="flex justify-end items-center gap-[30px] text-white">
          <li className="list-none font-[] ">
            <a className="text-xl border-b-2 border-transparent hover:border-[#F4F4F4] hover:border-opacity-1 pb-2 "  href="#">Home</a>
          </li>
          <li>
            <a className="text-xl border-b-2 border-transparent hover:border-[#F4F4F4] hover:border-opacity-1 pb-2 "  href="#">My account</a>
          </li>
          <li>
            <a className="text-xl border-b-2 border-transparent hover:border-[#F4F4F4] hover:border-opacity-1 pb-2 "  href="#">Language</a>
          </li>
          <li>
            <a className="text-xl border-b-2 border-transparent hover:border-[#F4F4F4] hover:border-opacity-1 pb-2 " href="#">My orders</a>
          </li>
          <li>
            <a href="#">
              <Image 
                src="/Carrito.png" 
                width={45} 
                height={45} 
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
