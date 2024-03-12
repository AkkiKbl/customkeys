import Link from "next/link";
import React from "react";

export default function ContactUs() {
  return (
    <div>
      <div
        style={{
          display: "flex",
          backgroundColor: "#7D4EED",
          height: 350,
          alignItems: "center",
          flexFlow: "column",
          justifyContent: "center",
        }}
      >
        <h1 className="text-white fw-bold " style={{ fontSize: 50 }}>
          Contact Us
        </h1>
        <div style={{ width: 300, height: 1, backgroundColor: "white" }} />
        <p className="text-white mt-4">Connect with CustomKeys!</p>
        <div className="d-flex w-50 justify-content-center">
          <p className="text-white text-center ">
            We&apos;re here to help you craft your dream keyboard. Have a
            conversation with us through WhatsApp for queries and orders.
          </p>
        </div>
        <a
          class="btn btn-success "
          href="https://api.whatsapp.com/send/?phone=8668967947"
        >
          Chat With Us
        </a>
      </div>
    </div>
  );
}
