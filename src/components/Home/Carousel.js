import React from "react";

export default function Carousel() {
  return (
    // <div
    //   id="carouselExampleAutoplaying"
    //   className="carousel slide"
    //   data-bs-ride="carousel"
    // >
    //   <div className="carousel-inner">
    //     <div className="carousel-item active" data-bs-interval="3000">
    //       <img
    //         src="/mechkeyboard2.jpg"
    //         className="d-block w-100"
    //         style={{ maxHeight: "700px", objectFit: "cover" }}
    //         alt="..."
    //       />
    //     </div>
    //     <div className="carousel-item" data-bs-interval="4000">
    //       <img
    //         src="/mechkeyboard.png"
    //         className="d-block w-100"
    //         alt="..."
    //         style={{ maxHeight: "700px", objectFit: "cover" }}
    //       />
    //     </div>
    //     <div className="carousel-item" data-bs-interval="3000">
    //       <img
    //         src="/keyboards.jpg"
    //         className="d-block w-100"
    //         alt="..."
    //         style={{ maxHeight: "700px", objectFit: "cover" }}
    //       />
    //     </div>
    //   </div>
    //   <button
    //     className="carousel-control-prev"
    //     type="button"
    //     data-bs-target="#carouselExampleAutoplaying"
    //     data-bs-slide="prev"
    //   >
    //     <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    //     <span className="visually-hidden">Previous</span>
    //   </button>
    //   <button
    //     className="carousel-control-next"
    //     type="button"
    //     data-bs-target="#carouselExampleAutoplaying"
    //     data-bs-slide="next"
    //   >
    //     <span className="carousel-control-next-icon" aria-hidden="true"></span>
    //     <span className="visually-hidden">Next</span>
    //   </button>
    // </div>
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
        <h1 className="text-white fw-bold " style={{ fontSize: 80 }}>
          Keyboard Made Just For You
        </h1>
        {/* Sound of precision */}
      </div>
    </div>
  );
}
