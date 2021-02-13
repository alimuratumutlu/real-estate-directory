import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Item from "./components/Item";
import HomeFilter from "./components/Filters/HomeFilter";

function App() {
  const [birim, setBirim] = useState(0);

  const items = [
    {
      image:
        "https://www.hepsivilla.com/upload/catalog/127/450/300/1-villa-tas-konak-807.jpg",
      title: "Villa Taş Konak",
    },
    {
      image:
        "https://www.hepsivilla.com/upload/catalog/127/450/300/1-villa-tas-konak-807.jpg",
      title: "Villa Star",
    },
    {
      image:
        "https://www.hepsivilla.com/upload/catalog/242/480/320/4-villa-elif-305.jpg",
      title: "Villa Elif",
    },
    {
      image:
        "https://www.hepsivilla.com/upload/catalog/1988/450/300/villa-shade1-371.jpg",
      title: "Villa Shade",
    },
    {
      image:
        "https://www.hepsivilla.com/upload/catalog/127/450/300/1-villa-tas-konak-807.jpg",
      title: "Villa Ares Tera",
    },
    {
      image:
        "https://www.hepsivilla.com/upload/catalog/1487/450/300/7-villa-aqua-192.jpg",
      title: "Villa Aqua",
    },
    {
      image:
        "https://www.hepsivilla.com/upload/catalog/242/480/320/4-villa-elif-305.jpg",
      title: "Villa Elif",
    },
    {
      image:
        "https://www.hepsivilla.com/upload/catalog/242/480/320/4-villa-elif-305.jpg",
      title: "Villa Elif",
    },
    {
      image:
        "https://www.hepsivilla.com/upload/catalog/1988/450/300/villa-shade1-371.jpg",
      title: "Villa Shade",
    },
    {
      image:
        "https://www.hepsivilla.com/upload/catalog/127/450/300/1-villa-tas-konak-807.jpg",
      title: "Villa Ares Tera",
    },
    {
      image:
        "https://www.hepsivilla.com/upload/catalog/1487/450/300/7-villa-aqua-192.jpg",
      title: "Villa Aqua",
    },
    {
      image:
        "https://www.hepsivilla.com/upload/catalog/242/480/320/4-villa-elif-305.jpg",
      title: "Villa Elif",
    },
  ];

  const sepeteEkle = () => {
    setBirim(birim + 1);
  };

  return (
    <>
      <Navbar adet={birim} />
      <HomeFilter />
      <div className="container container-gap pt-4">
        <div className="row">
          {items.map((item) => {
            return (
              <Item
                image={item.image}
                title={item.title}
                sepeteEkle={sepeteEkle}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
