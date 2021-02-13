import React from "react";
import { BiSearchAlt } from "react-icons/bi";

import "./HomeFilter.css";

export default function HomeFilter() {
  const areas = [
    "Alanya (1)",
    "Altınoluk (3)",
    "Antalya (1)",
    "Belek (23)",
    "Bodrum (50)",
    "Çeşme (0)",
    "Dalaman (23)",
    "Dalyan (75)",
    "Datça (10)",
    "Didim (0)",
    "Fethiye (407)",
    "Göcek (4)",
    "Gökova (33)",
    "Kalkan (507)",
    "Kaş (31)",
    "Kemer (27)",
    "Köyceğiz (1)",
    "Kuşadası (27)",
    "Marmaris (43)",
    "Mordoğan (0)",
    "Sapanca (14)",
    "Seferihisar (2)",
    "Selçuk (1)",
    "Urla (0)",
  ];

  const extras = [
    "Houses with private pool",
    "The pool is not visible from the outside",
    "Special honeymoon",
    "Houses near the sea",
    "With children's pool",
    "Houses where you can bring pets",
    "Luxury homes",
    "Houses with heated pool",
    "Houses with jacuzzi",
    "Houses close to the center",
    "Sea view houses",
    "Houses with playgrounds",
    "Houses with garden",
    "Entertainment and activity",
    "Houses with fireplaces",
  ];
  return (
    <>
      <div className="mu-masthead  px-5 mb-4" id="content">
        <div id="overlay"></div>
        <div className="container px-10 px-md-3">
          <div className="row align-items-lg-center">
            <div className="col-8 mx-auto order-md-2 col-md-4 col-lg-5"></div>
            <div className="col-md-8 order-md-1 col-lg-7 text-center text-md-start">
              <h1 className="mb-3">Go near</h1>
              <button className="btn btn-light btnLightBlue">
                Explore & Buy Homes
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <form className="row g-3">
          <div className="col-md-2">
            <select id="inputState" className="form-select">
              {areas.map((area) => {
                return <option>{area}</option>;
              })}
            </select>
          </div>
          <div className="col-md-2">
            <select id="inputState" className="form-select">
              <option selected>Guests</option>
              <option>2 People</option>
              <option>3 People</option>
              <option>4 People</option>
              <option>5 People</option>
              <option>6 People</option>
              <option>7 People</option>
              <option>8 People</option>
            </select>
          </div>
          <div className="col-md-2">
            <select id="inputState" className="form-select">
              <option selected>1 Bedroom</option>
              <option>1 Bedroom</option>
              <option>2 Bedrooms</option>
              <option>3 Bedrooms</option>
              <option>4 Bedrooms</option>
            </select>
          </div>
          <div className="col-md-2">
            <select id="inputState" className="form-select">
              <option selected>1 Bathroom</option>
              <option>2 Bathrooms</option>
              <option>3 Bathrooms</option>
              <option>4 Bathrooms</option>
            </select>
          </div>
          <div className="col-md-2">
            <div className="d-grid gap-2">
              <button
                className="btn btn-light dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{ border: "1px solid #ced4da" }}
              >
                Extra(s)
              </button>
              <ul className="dropdown-menu">
                {extras.map((item) => {
                  return (
                    <li style={{ paddingLeft: 10, paddingRight: 10 }}>
                      <label
                        className="form-check-label"
                        for="flexCheckChecked"
                      >
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="flexCheckChecked"
                          style={{ marginRight: 7 }}
                        />
                        {item}
                      </label>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="col-md-2">
            <div className="d-grid gap-2">
              <button className="btn btn-warning" type="button">
                <BiSearchAlt />
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
