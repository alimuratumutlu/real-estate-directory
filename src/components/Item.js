import React, { useState } from "react";
import { IoMdCart } from "react-icons/io";

export default function Item(props) {
  const [adet, setAdet] = useState(0);

  const azalt = () => {
    if (adet > 0) {
      setAdet(adet - 1);
    }
  };

  const arttir = () => {
    setAdet(adet + 1);
  };

  return (
    <div className="card rounded shadow-sm pt-3 mb-3">
      <img src={props.image} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 m-0">
            <div className="btn-group" role="group" aria-label="Basic example">
              <button
                type="button"
                className="btn btn-dark btn-sm"
                onClick={azalt}
              >
                -
              </button>
              <button type="button" className="btn btn-default btn-sm">
                {adet}
              </button>
              <button
                type="button"
                className="btn btn-dark btn-sm"
                onClick={arttir}
              >
                +
              </button>
            </div>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-8 col-xl-8 ">
            <button
              type="button"
              className="btn btn-success btn-sm btn-block"
              onClick={adet > 0 ? props.sepeteEkle : null}
            >
              <IoMdCart /> Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
