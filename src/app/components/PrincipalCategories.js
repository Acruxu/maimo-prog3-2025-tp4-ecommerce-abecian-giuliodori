import Image from "next/image";
import Link from "next/link";

const categorias = [
  {
    nombre: "Hombre",
    img: "/hombre.png", 
    link: "/categories/hombre",
  },
  {
    nombre: "Mujer",
    img: "/mujer.png",
    link: "/categories/mujer",
  },
  {
    nombre: "Equipos",
    img: "/equipos.png",
    link: "/categories/equipos",
  },
];

const PrincipalCategories = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-4 px-4 md:px-12 my-10">
      {categorias.map((cat, index) => (
        <div key={index} className="relative w-full h-[550px]">
          <Image
            src={cat.img}
            alt={cat.nombre}
            fill
            className="object-cover rounded-[2px]"
          />
          <Link
            href={cat.link}
            className="absolute bottom-6 left-6 bg-white text-black font-semibold px-5 py-2 rounded-full shadow-md hover:bg-gray-200 transition"
          >
            {cat.nombre}
          </Link>
        </div>
      ))}
    </section>
  );
};

export default PrincipalCategories;