import React, { useState } from "react";
import Header from "./components/Header";
import Item from "./components/Item";

import {
  Avatar,
  Badge,
  Box,
  Button,
  Card,
  Heading,
  Link,
  Text,
  TextField,
  SearchField,
  Icon,
  SegmentedControl,
} from "gestalt";

import "./App.css";

function App() {
  const [birim, setBirim] = useState(0);
  const [itemIndex, setItemIndex] = React.useState(0);

  const items = [
    "News",
    "You",
    "Messages",
    <Icon
      icon="pin"
      accessibilityLabel="Pin"
      color={itemIndex === 3 ? "darkGray" : "gray"}
    />,
  ];

  const sepeteEkle = () => {
    setBirim(birim + 1);
    console.log(birim);
  };

  const urunEkle = () => {};

  return (
    <div className="App">
      <Header adet={birim} />
      <div className="container container-gap">
        <div className="row">
          <Item
            image="https://www.hepsivilla.com/upload/catalog/127/450/300/1-villa-tas-konak-807.jpg"
            title="Villa Taş Konak"
            sepeteEkle={sepeteEkle}
          />
          <Item
            image="https://www.hepsivilla.com/upload/catalog/218/480/320/4-villa-star-kalkan-274.jpg"
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
            image="https://www.hepsivilla.com/upload/catalog/10/450/300/3villa-ares-134.jpg"
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
    </div>
  );
}

export default App;
