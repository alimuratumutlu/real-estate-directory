import React, { useState } from "react";
import Header from "./components/Header";
import Item from "./components/Item";

function App() {
  const [birim, setBirim] = useState(0);
  const [itemIndex, setItemIndex] = React.useState(0);

  const sepeteEkle = () => {
    setBirim(birim + 1);
  };

  const urunEkle = () => {};

  return (
    <>
      <Header adet={birim} />
      <div className="container container-gap pt-5 pt-5 pt-5 pt-5">
        <div className="row">
          <Item
            image="https://www.hepsivilla.com/upload/catalog/127/450/300/1-villa-tas-konak-807.jpg"
            title="Villa Taş Konak"
            sepeteEkle={sepeteEkle}
          />
          <Item
            image="https://www.hepsivilla.com/upload/catalog/127/450/300/1-villa-tas-konak-807.jpg"
            title="Villa Star"
            sepeteEkle={sepeteEkle}
          />
          <Item
            image="https://www.hepsivilla.com/upload/catalog/242/480/320/4-villa-elif-305.jpg"
            title="Villa Elif"
            sepeteEkle={sepeteEkle}
          />
          <Item
            image="https://www.hepsivilla.com/upload/catalog/1487/450/300/7-villa-aqua-192.jpg"
            title="Villa Aqua"
            sepeteEkle={sepeteEkle}
          />
          <Item
            image="https://www.hepsivilla.com/upload/catalog/127/450/300/1-villa-tas-konak-807.jpg"
            title="Villa Ares Tera"
            sepeteEkle={sepeteEkle}
          />
          <Item
            image="https://www.hepsivilla.com/upload/catalog/1988/450/300/villa-shade1-371.jpg"
            title="Villa Shade"
            sepeteEkle={sepeteEkle}
          />
          <Item
            image="https://www.hepsivilla.com/upload/catalog/242/480/320/4-villa-elif-305.jpg"
            title="Villa Elif"
            sepeteEkle={sepeteEkle}
          />
          <Item
            image="https://www.hepsivilla.com/upload/catalog/1487/450/300/7-villa-aqua-192.jpg"
            title="Villa Aqua"
            sepeteEkle={sepeteEkle}
          />
          <Item
            image="https://www.hepsivilla.com/upload/catalog/127/450/300/1-villa-tas-konak-807.jpg"
            title="Villa Ares Tera"
            sepeteEkle={sepeteEkle}
          />
          <Item
            image="https://www.hepsivilla.com/upload/catalog/1988/450/300/villa-shade1-371.jpg"
            title="Villa Shade"
            sepeteEkle={sepeteEkle}
          />
          <Item
            image="https://www.hepsivilla.com/upload/catalog/242/480/320/4-villa-elif-305.jpg"
            title="Villa Elif"
            sepeteEkle={sepeteEkle}
          />
          <Item
            image="https://www.hepsivilla.com/upload/catalog/1487/450/300/7-villa-aqua-192.jpg"
            title="Villa Aqua"
            sepeteEkle={sepeteEkle}
          />
          <Item
            image="https://www.hepsivilla.com/upload/catalog/127/450/300/1-villa-tas-konak-807.jpg"
            title="Villa Ares Tera"
            sepeteEkle={sepeteEkle}
          />
          <Item
            image="https://www.hepsivilla.com/upload/catalog/1988/450/300/villa-shade1-371.jpg"
            title="Villa Shade"
            sepeteEkle={sepeteEkle}
          />
        </div>
      </div>
    </>
  );
}

export default App;
