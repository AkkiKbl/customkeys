"use client";
import React, { useEffect, useState } from "react";

import Link from "next/link";

export default function NavBar(props) {
  // console.log(props.value);
  const [homeBtn, setHomeBtn] = useState("");
  const [aboutUs, setAboutUs] = useState("");

  useEffect(() => {
    if (props.value == "home") {
      setHomeBtn("fw-bold");
    } else {
      setAboutUs("fw-bold");
    }
  }, []);

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            CustomKeys
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse "
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex">
              <li className="nav-item">
                <Link
                  className={"nav-link active " + homeBtn}
                  aria-current="page"
                  href="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={"nav-link active " + aboutUs}
                  aria-current="page"
                  href="/aboutUs"
                >
                  About Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
