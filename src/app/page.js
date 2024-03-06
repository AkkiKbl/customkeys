import Image from "next/image";
import styles from "./page.module.css";
import NavBar from "@/components/Home/NavBar";
import Carousel from "@/components/Home/Carousel";
import Products from "../components/Home/Products";
import ContactUs from "@/components/Home/ContactUs";
import Footer from "@/components/AboutUs/Footer";

export default function Home() {
  return (
    <main>
      <NavBar value="home" />
      <Carousel />
      <Products />
      <ContactUs />
      <Footer />
    </main>
  );
}
