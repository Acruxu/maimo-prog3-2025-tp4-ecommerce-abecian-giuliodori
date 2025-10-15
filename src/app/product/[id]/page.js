"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";


const productos = [
  {
    id: 1,
    nombre: "T-Shirt F1 Team Alpine",
    precio: "$$$",
    imgs: ["/hombre.png", "/lawson.png", "/alonso.png", "/russell.png"],
    talles: ["6", "8", "10", "12", "14", "16", "18"],
  },
  {
    id: 2,
    nombre: "Campera Mujer F1",
    precio: "$$$",
    imgs: ["/mujer.png", "/tsunoda.png"],
    talles: ["XS", "S", "M", "L", "XL"],
  },
];

export default function ProductPage() {
  const { id } = useParams();
  const product = productos.find((p) => p.id.toString() === id);

  if (!product) return <p className="text-white p-10">Producto no encontrado</p>;

  return (
    <main className="min-h-screen bg-black text-white px-6 md:px-20 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
   
        <div className="grid grid-cols-2 gap-4">
          {product.imgs.map((img, index) => (
            <div key={index} className="relative w-full h-64">
              <Image
                src={img}
                alt={`${product.nombre} ${index}`}
                fill
                className="object-cover rounded-lg"
              />
            </div>
          ))}
        </div>


        <div className="flex flex-col justify-center">
          <h1 className="text-3xl font-bold mb-4">{product.nombre}</h1>
          <p className="text-xl text-gray-300 mb-6">Price {product.precio}</p>

          <div className="mb-6">
            <h3 className="font-semibold mb-2">Sizes:</h3>
            <div className="flex flex-wrap gap-2">
              {product.talles.map((size) => (
                <button
                  key={size}
                  className="px-4 py-2 border border-gray-400 rounded-full hover:bg-[#FF2727] hover:text-white transition"
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <button className="mt-6 bg-[#FF2727] text-white py-3 px-6 rounded-lg text-lg font-semibold hover:bg-red-700 transition">
            Add to cart
          </button>
        </div>
      </div>


      <div className="mt-10">
        <Link
          href="/categories/category"
          className="text-gray-300 hover:text-white underline"
        >
          ← Volver a categorías
        </Link>
      </div>
    </main>
  );
}