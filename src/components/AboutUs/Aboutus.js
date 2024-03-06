import React from "react";

export default function Aboutus() {
  return (
    <div
      style={{
        display: "flex",
        flex: 1,
        backgroundImage: `url(/gamingKeyboard.jpg)`,
        position: "absolute",
        height: "100%",
        backgroundSize: "cover",
        color: "white",
      }}
    >
      <div
        className="d-flex justify-content-center align-items-center  mt-5"
        style={{ flexFlow: "column" }}
      >
        <h1 className="fw-bold" style={{ fontSize: 80 }}>
          About Us
        </h1>

        <div style={{ width: 500, height: 1, backgroundColor: "white" }} />

        <p className="text-center w-50 mt-5 ">
          At CustomKeys, we are passionate about empowering individuals to
          express themselves through personalized keyboards. We believe that
          your keyboard is an extension of your creativity and productivity, and
          it should reflect your unique style and needs. We offer a wide range
          of customization options, from keycaps and switches to layouts and
          engravings. Whether you&apos;re a seasoned gamer, a creative
          professional, or simply someone who appreciates a beautiful and
          functional keyboard, we can help you create the perfect tool for you.
        </p>
      </div>
    </div>
  );
}
