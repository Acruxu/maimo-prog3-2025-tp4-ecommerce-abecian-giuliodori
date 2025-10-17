"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";


const productos = [
  { id: 1, nombre: "Remera Hombre", categoria: "hombre", subcategoria: "torso", img: "/hombre.png" },
  { id: 2, nombre: "Pantalón Hombre", categoria: "hombre", subcategoria: "piernas", img: "/lawson.png" },

  { id: 3, nombre: "Campera Mujer", categoria: "mujer", subcategoria: "torso", img: "/mujer.png" },
  { id: 4, nombre: "Leggins Mujer", categoria: "mujer", subcategoria: "piernas", img: "/tsunoda.png" },

  { id: 5, nombre: "Gorra Ferrari", categoria: "equipos", subcategoria: "gorras", img: "/leclerc.png" },
  { id: 6, nombre: "Campera Mercedes", categoria: "equipos", subcategoria: "torso", img: "/russell.png" },
  { id: 7, nombre: "Remera Aston Martin", categoria: "equipos", subcategoria: "torso", img: "/alonso.png" },
  { id: 8, nombre: "Remera Williams", categoria: "equipos", subcategoria: "torso", img: "/albon.png" },
];


const categorias = ["hombre", "mujer", "equipos"];
const filtrosSidebar = ["torso", "piernas", "gorras"];

export default function CategoryPage() {
  const [categoria, setCategoria] = useState("hombre"); 
  const [filtro, setFiltro] = useState(null);


  let productosFiltrados = productos.filter((p) => p.categoria === categoria);


  if (filtro) {
    productosFiltrados = productosFiltrados.filter(
      (p) => p.subcategoria === filtro
    );
  }

  return (
    <main className="min-h-screen bg-black text-white flex px-6 md:px-12 py-10">
  
      <aside className="w-1/4 pr-6 border-r border-gray-700">
        <h2 className="text-xl font-bold mb-6">Categorías</h2>
        <ul className="space-y-4">
          {categorias.map((c) => (
            <li key={c}>
              <button
                onClick={() => {
                  setCategoria(c);
                  setFiltro(null); 
                }}
                className={`block w-full text-left px-4 py-2 rounded-md ${
                  categoria === c
                    ? "bg-[#FF2727] text-white"
                    : "bg-gray-800 hover:bg-gray-700"
                }`}
              >
                {c}
              </button>
            </li>
          ))}
        </ul>

        <h2 className="text-xl font-bold mt-6 mb-4">Filtros</h2>
        <ul className="space-y-4">
          {filtrosSidebar.map((f) => (
            <li key={f}>
              <button
                onClick={() => setFiltro(f)}
                className={`block w-full text-left px-4 py-2 rounded-md ${
                  filtro === f
                    ? "bg-[#FF2727] text-white"
                    : "bg-gray-800 hover:bg-gray-700"
                }`}
              >
                {f}
              </button>
            </li>
          ))}
          <li>
            <button
              onClick={() => setFiltro(null)}
              className="block w-full text-left px-4 py-2 rounded-md bg-gray-600 hover:bg-gray-500"
            >
              Ver todos
            </button>
          </li>
        </ul>
      </aside>


      <section className="w-3/4 pl-6">
        <h2 className="text-2xl font-bold mb-6 capitalize">
          {categoria} {filtro ? `- ${filtro}` : ""}
        </h2>
        {productosFiltrados.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
           {productosFiltrados.map((prod) => (
  <Link key={prod.id} href={`/product/${prod.id}`}>
    <div className="bg-[#2c2c2c] rounded-lg overflow-hidden shadow-md hover:scale-105 transition cursor-pointer">
      <div className="relative w-full h-64">
        <Image
          src={prod.img}
          alt={prod.nombre}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4 text-center">
        <h3 className="text-lg font-semibold">{prod.nombre}</h3>
      </div>
    </div>
  </Link>
))}
          </div>
        ) : (
          <p>No hay productos en esta categoría</p>
        )}
      </section>
    </main>
  );
}