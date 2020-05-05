import React, { useState } from "react";
import Header from "./components/Header";
import Item from "./components/Item";

import "./App.css";

function App() {
  const [birim, setBirim] = useState(0);

  const sepeteEkle = () => {
    setBirim(birim + 1);
    console.log(birim);
  };

  const urunEkle = () => {};

  return (
    <div className="App">
      <Header adet={birim} />
      <div className="container mt-3">
        <div className="row mb-2">
          <div className="col-2 mr-0 pr-0">
            <select class="form-control">
              <option>Özellik Seçiniz</option>
              <option>Aileye Uygun (215)</option>
              <option>Balayına Uygun (204)</option>
              <option>Çocuk Havuzlu (76)</option>
              <option>Deniz Manzaralı (187)</option>
              <option>Denize Yakın (110)</option>
              <option>Ekonomik (91)</option>
              <option>Geniş (47)</option>
              <option>Havuzu Isıtmalı (68)</option>
              <option>Jakuzili (190)</option>
              <option>Kapalı Havuzlu (48)</option>
              <option>Korunaklı (219)</option>
              <option>Lüks (181)</option>
              <option>Muhafazakar (220)</option>
            </select>
          </div>

          <div className="col-2 mr-0 pr-0">
            <select class="form-control">
              <option>Tip Seçiniz</option>
              <option>Apart</option>
              <option>Villa</option>
            </select>
          </div>

          <div className="col-2 mr-0 pr-0">
            <select class="form-control">
              <option>Bölge</option>
              <option>Antalya</option>
              <option>Muğla</option>
            </select>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-6 col-sm-4 col-md-3 col-lg-3 col-xl-3">
            <Item
              image="https://productimages.hepsiburada.net/s/25/1100/10094999240754.jpg/format:webp"
              title="Samsung Galaxy M20 32 GB "
              sepeteEkle={sepeteEkle}
            />
          </div>
          <div className="col-xs-6 col-sm-4 col-md-3 col-lg-3 col-xl-3">
            <Item
              image="https://productimages.hepsiburada.net/s/31/1100/10333713596466.jpg/format:webp"
              title="Xiaomi Redmi Note 8 64 GB"
              sepeteEkle={sepeteEkle}
            />
          </div>
          <div className="col-xs-6 col-sm-4 col-md-3 col-lg-3 col-xl-3">
            <Item
              image="https://productimages.hepsiburada.net/s/25/1100/10094999240754.jpg/format:webp"
              title="Samsung Galaxy M20 32 GB "
              sepeteEkle={sepeteEkle}
            />
          </div>
          <div className="col-xs-6 col-sm-4 col-md-3 col-lg-3 col-xl-3">
            <Item
              image="https://productimages.hepsiburada.net/s/31/1100/10333713596466.jpg/format:webp"
              title="Xiaomi Redmi Note 8 64 GB"
              sepeteEkle={sepeteEkle}
            />
          </div>
          <div className="col-xs-6 col-sm-4 col-md-3 col-lg-3 col-xl-3">
            <Item
              image="https://productimages.hepsiburada.net/s/25/1100/10094999240754.jpg/format:webp"
              title="Samsung Galaxy M20 32 GB "
              sepeteEkle={sepeteEkle}
            />
          </div>
          <div className="col-xs-6 col-sm-4 col-md-3 col-lg-3 col-xl-3">
            <Item
              image="https://productimages.hepsiburada.net/s/31/1100/10333713596466.jpg/format:webp"
              title="Xiaomi Redmi Note 8 64 GB"
              sepeteEkle={sepeteEkle}
            />
          </div>
          <div className="col-xs-6 col-sm-4 col-md-3 col-lg-3 col-xl-3">
            <Item
              image="https://productimages.hepsiburada.net/s/25/1100/10094999240754.jpg/format:webp"
              title="Samsung Galaxy M20 32 GB "
              sepeteEkle={sepeteEkle}
            />
          </div>
          <div className="col-xs-6 col-sm-4 col-md-3 col-lg-3 col-xl-3">
            <Item
              image="https://productimages.hepsiburada.net/s/31/1100/10333713596466.jpg/format:webp"
              title="Xiaomi Redmi Note 8 64 GB"
              sepeteEkle={sepeteEkle}
            />
          </div>
          <div className="col-xs-6 col-sm-4 col-md-3 col-lg-3 col-xl-3">
            <Item
              image="https://productimages.hepsiburada.net/s/25/1100/10094999240754.jpg/format:webp"
              title="Samsung Galaxy M20 32 GB "
              sepeteEkle={sepeteEkle}
            />
          </div>
          <div className="col-xs-6 col-sm-4 col-md-3 col-lg-3 col-xl-3">
            <Item
              image="https://productimages.hepsiburada.net/s/31/1100/10333713596466.jpg/format:webp"
              title="Xiaomi Redmi Note 8 64 GB"
              sepeteEkle={sepeteEkle}
            />
          </div>
          <div className="col-xs-6 col-sm-4 col-md-3 col-lg-3 col-xl-3">
            <Item
              image="https://productimages.hepsiburada.net/s/25/1100/10094999240754.jpg/format:webp"
              title="Samsung Galaxy M20 32 GB "
              sepeteEkle={sepeteEkle}
            />
          </div>
          <div className="col-xs-6 col-sm-4 col-md-3 col-lg-3 col-xl-3">
            <Item
              image="https://productimages.hepsiburada.net/s/31/1100/10333713596466.jpg/format:webp"
              title="Xiaomi Redmi Note 8 64 GB"
              sepeteEkle={sepeteEkle}
            />
          </div>
          <div className="col-xs-6 col-sm-4 col-md-3 col-lg-3 col-xl-3">
            <Item
              image="https://productimages.hepsiburada.net/s/25/1100/10094999240754.jpg/format:webp"
              title="Samsung Galaxy M20 32 GB "
              sepeteEkle={sepeteEkle}
            />
          </div>
          <div className="col-xs-6 col-sm-4 col-md-3 col-lg-3 col-xl-3">
            <Item
              image="https://productimages.hepsiburada.net/s/31/1100/10333713596466.jpg/format:webp"
              title="Xiaomi Redmi Note 8 64 GB"
              sepeteEkle={sepeteEkle}
            />
          </div>
          <div className="col-xs-6 col-sm-4 col-md-3 col-lg-3 col-xl-3">
            <Item
              image="https://productimages.hepsiburada.net/s/25/1100/10094999240754.jpg/format:webp"
              title="Samsung Galaxy M20 32 GB "
              sepeteEkle={sepeteEkle}
            />
          </div>
          <div className="col-xs-6 col-sm-4 col-md-3 col-lg-3 col-xl-3">
            <Item
              image="https://productimages.hepsiburada.net/s/31/1100/10333713596466.jpg/format:webp"
              title="Xiaomi Redmi Note 8 64 GB"
              sepeteEkle={sepeteEkle}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
