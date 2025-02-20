import React from "react";
import alpha_01 from "../../images/alpha_01.png";
import anti from "../../images/anti.png";
import alphatex from "../../images/01a.png";
import s2 from "../../images/s2.png";
import indust from "../../images/indust.png";

const SinglePagePro = () => {
  return (
    <div>
      <section className="section_of_single_page">
        <div className="product_gallery_and_content">
          <div className="product_gallery">
            <img src={alpha_01} alt="" />
          </div>
          <div className="product_content">
            <h2>Alpha S2 Safety Shoe</h2>
            <p className="product_content_p1">
              Alpha S2 is ​​the shoe designed by Maxeo to provide high work
              safety and are compatible with all working conditions.
            </p>
            <p className="product_content_p2">
              Safety Class: S2 / Protective Cap: Fiberglass Toe Cap / Sole mate:
              PU-PU / Slip Resistance: SRC / Conductivity: Antistatic / Height:
              Low Shoe / Upper Material: Leather / Leather Type: Split Barton
              Printed / Foot Bed: Type1 PU / Insole – Penetration Security:
              Nonwoven Fabric / Waterproof: No / Water Resistance: Yes / Extra
              Hydrolysis Resistance Sole: Yes / Shock Absorption: Yes
            </p>
            <img src={anti} alt="" />

            <div className="product_content_lastptwo">
              <p>SKU: M-A201</p>
              <p>Categories: </p>
            </div>
          </div>
        </div>
      </section>
      <section className="section_of_single_page_description">
        <div className="product_gallery_and_content_description">
          <div className="product_gallery_and_content_description1">
            <h2>A Tech-driven Performance Hero</h2>
            <h3>ALPHA S2 Safety Shoes</h3>
            <div className="product_gallery_and_content_description1_img">
              <img src={alphatex} alt="" />
            </div>
          </div>
          <div className="underline_description"></div>
          <div className="product_gallery_and_content_description2">
            <div className="product_gallery_and_content_description2_img">
              <img src={s2} alt="" />
            </div>
            <h3>
              Alpha S2 is ​​the shoe designed by Maxeo to provide high work
              safety and are compatible with all working conditions.
            </h3>
            <p>
              According to the EN ISO 20345, the S2 standard specifies that
              workers' shoes are suitable for use in wet environments. S2
              standard work shoes are resistant to possible impact up to 200
              joules and they protect your toes and prevent your feet against
              water spray. Base structure is extra resistant to oil and acid.
              They are produced with antistatic material.
            </p>
            <div className="product_gallery_and_content_description2_img2">
              <img src={indust} alt="" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SinglePagePro;
