import React from "react";
import { products } from "@/resources/ProductsCards";

export default function Products() {
  return (
    <div>
      <div className="d-flex justify-content-center mt-5 ">
        <h2 style={{ fontSize: 50, fontWeight: "bold" }}>Products</h2>
      </div>
      <div className="d-flex justify-content-center mb-4 ">
        <div style={{ height: 1, width: 200, backgroundColor: "black" }} />
      </div>
      <div className="container mb-5">
        <div className="row g-3">
          {products.map((value) => (
            <div key={value.key} className="col-12 col-md-6 col-lg-4">
              <div className="card">
                <img
                  src={value.link}
                  className="card-img-top"
                  alt={value.name + "keyboard"}
                  style={{
                    height: 200,
                    objectFit: "cover",
                  }}
                />
                <div className="card-body d-flex flex-column align-items-center">
                  <p className="card-text">Model: {value.name}</p>
                  <p className="card-text">Switches: {value.switches}</p>
                  <p className="card-text">Price: Rs. {value.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
