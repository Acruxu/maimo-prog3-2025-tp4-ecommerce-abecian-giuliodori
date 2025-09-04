import Image from "next/image";
import PrincipalCategories from "./components/PrincipalCategories";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
   <>
    <PrincipalCategories></PrincipalCategories>
    <Footer></Footer>
    </>
  );
}
