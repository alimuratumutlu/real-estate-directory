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
              <h3 className="mb-3">Explore & Buy nearby homes</h3>
              <form class="row g-3">
                <div class="col-12">
                  <input
                    type="text"
                    class="form-control"
                    id="inputAddress"
                    placeholder="Username"
                    aria-label="Username"
                  />
                </div>
                <div class="col-md-6">
                  <input
                    type="text"
                    class="form-control"
                    id="inputCity"
                    placeholder="City"
                    aria-label="City"
                  />
                </div>
                <div class="col-md-4">
                  <select id="inputState" class="form-select">
                    <option selected>State...</option>
                    <option>...</option>
                  </select>
                </div>
                <div class="col-md-2">
                  <input
                    type="text"
                    class="form-control"
                    id="inputZip"
                    placeholder="Zip"
                    aria-label="Zip"
                  />
                </div>
                <div class="col-12">
                  <button type="submit" class="btn btn-primary me-2">
                    Search
                  </button>
                  <button type="submit" class="btn btn-success">
                    Show on Map
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
