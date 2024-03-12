import React from "react";

export default function Carousel() {
  return (
    <div
      style={{
        display: "flex",
        backgroundImage: `url(/mechkeyboard2.jpg)`,
        width: "100%",
        height: "450px",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        alignItems: "center",
        flexDirection: "column-reverse",
        justifyContent: "center",
      }}
    >
      {/* <div>
        <button type="button" className="btn btn-primary btn-lg my-5 ">
          Order Now
        </button>
      </div> */}
      <div>
        <h1
          className="text-white fw-bold text-center  "
          style={{ fontSize: 80 }}
        >
          Keyboard Made Just For You
        </h1>
        {/* Sound of precision */}
      </div>
    </div>
  );
}
