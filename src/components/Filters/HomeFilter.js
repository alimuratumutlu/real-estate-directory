import React from "react";

import "./HomeFilter.css";

export default function HomeFilter() {
  return (
    <>
      <div className="mu-masthead  px-5" id="content">
        <div id="overlay"></div>
        <div className="container px-10 px-md-3">
          <div className="row align-items-lg-center">
            <div className="col-8 mx-auto order-md-2 col-md-4 col-lg-5">S</div>
            <div className="col-md-8 order-md-1 col-lg-7 text-center text-md-start">
              <h1 className="mb-3">Go near</h1>
              <button className="btn btn-light btnLightBlue">
                Explore & Buy nearby homes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
