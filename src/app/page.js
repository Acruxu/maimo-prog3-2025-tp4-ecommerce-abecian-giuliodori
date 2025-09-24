import Image from "next/image";
import PrincipalCategories from "./components/PrincipalCategories";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import DriversGrid from "./components/DriverGrid";

export default function Home() {
  return (
   <>
    <PrincipalCategories></PrincipalCategories>
    <DriversGrid></DriversGrid>
    <Footer></Footer>
    </>
  );
}
