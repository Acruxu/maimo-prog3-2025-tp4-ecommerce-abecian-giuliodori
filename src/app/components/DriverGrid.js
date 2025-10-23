import Image from "next/image";

const drivers = [
  {
    id: 1,
    nombre: "Liam Lawson",
    img: "/lawson.png",
    equipo: "Racing Bulls",
  },
  {
    id: 2,
    nombre: "Yuki Tsunoda",
    img: "/tsunoda.png",
    equipo: "Red Bull Racing",
  },
  {
    id: 3,
    nombre: "Charles Leclerc",
    img: "/leclerc.png",
    equipo: "Ferrari",
  },
  {
    id: 4,
    nombre: "Fernando Alonso",
    img: "/alonso.png",
    equipo: "Aston Martin",
  },
  {
    id: 5,
    nombre: "Franco Colapinto",
    img: "/colapinto.png",
    equipo: "Alpine",
  },
  {
    id: 6,
    nombre: "Oscar piastri",
    img: "/piastri.png",
    equipo: "Mclaren",
  },
   {
    id: 7,
    nombre: "George Russell",
    img: "/russell.png",
    equipo: "Mercedes",
  },
   {
    id: 8,
    nombre: "Alexander Albon",
    img: "/albon.png",
    equipo: "Williams",
  },
];

export default function DriversGrid() {
  return (
    <section className="px-4 md:px-12 my-10">
      <h2 className="text-2xl font-bold mb-6 text-center">Corredores F1</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {drivers.map((driver) => (
          <div
            key={driver.id}
            className="bg-[#2c2c2c] text-white rounded-[0.2vw] overflow-hidden shadow-md hover:scale-105 transition"
          >
            <div className="relative w-full h-80">
              <Image
                src={driver.img}
                alt={driver.nombre}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold">{driver.nombre}</h3>
              <p className="text-sm text-gray-400">{driver.equipo}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}