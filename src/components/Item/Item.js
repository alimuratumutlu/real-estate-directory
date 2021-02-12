import React, { useState } from "react";
import { IoMdCart, IoIosBed } from "react-icons/io";
import { BsPersonFill } from "react-icons/bs";
import { FaBath } from "react-icons/fa";
import { AiOutlineFileSearch } from "react-icons/ai";

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
    <div
      className="col-xs-6 col-sm-6 col-md-4 col-lg-4 col-xl-4 card-container rounded"
      style={{ cursor: "pointer" }} >
      <div className="card shadow mb-4" style={{ borderRadius: "100" }}>
        <img src={props.image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 m-0 details text-secondary">
              <span className="d-block">
                <BsPersonFill size="12" />
                <span className="align-middle pl-1">6 People</span>
              </span>
              <span className="d-block">
                <IoIosBed size="12" />
                <span className="align-middle pl-1">2 Bed Rooms</span>
              </span>
              <span className="d-block">
                <FaBath size="12" />
                <span className="align-middle pl-1">3 Bathrooms</span>
              </span>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 m-0">
              <div className="badge bg-success text-wrap d-block mb-1 p-2">
                $ 1000 / month
              </div>
              <div
                className="badge bg-primary text-wrap d-block mb-1 p-2"
                onClick={adet > 0 ? props.sepeteEkle : null}
              >
                <AiOutlineFileSearch /> More Info
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
