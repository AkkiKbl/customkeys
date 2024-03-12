import NavBar from "@/components/Home/NavBar";
import React from "react";
import Aboutus from "@/components/AboutUs/Aboutus";

export default function AboutUs() {
  return (
    <main>
      <head>
        <title>
          About Us
        </title>
      </head>
      <NavBar value="aboutus" />
      <Aboutus />
    </main>
  );
}
