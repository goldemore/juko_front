import React from "react";
import bgProByCat from "../../images/Group.png";
import alpha from "../../images/alpha.png";
import { Link } from "react-router-dom";

const ProductsByCategory = () => {
  return (
    <div>
      <section>
        <div
          className="hero_content_products"
          style={{
            background: `url(${bgProByCat})`,
          }}
        >
          <div className="hero_content_products_h1">
            <h1>Products</h1>
          </div>
        </div>
      </section>
      <section>
        <div className="header_text">
          <p>
            We know very well how difficulties employees have in production and
            workplaces. We designed Maxeo for all-day workers who struggle with
            great labor. We aim to empower them and ensure that they do their
            job safely with our safety shoes that are designed with an
            innovative perspective and produced with the aim of maximum
            performance.
          </p>
        </div>
        <div className="products_grid_container">
          <Link to="/product/1">
            <div className="products_grid_card">
              <div className="products_grid_card_img">
                <img src={alpha} alt="" />
              </div>
              <h3>Alpha S2 safety shoes</h3>
            </div>
          </Link>

          <div className="products_grid_card">
            <div className="products_grid_card_img">
              <img src={alpha} alt="" />
            </div>
            <h3>Alpha S2 safety shoes</h3>
          </div>

          <div className="products_grid_card">
            <div className="products_grid_card_img">
              <img src={alpha} alt="" />
            </div>
            <h3>Alpha S2 safety shoes</h3>
          </div>
          <div className="products_grid_card">
            <div className="products_grid_card_img">
              <img src={alpha} alt="" />
            </div>
            <h3>Alpha S2 safety shoes</h3>
          </div>
          <div className="products_grid_card">
            <div className="products_grid_card_img">
              <img src={alpha} alt="" />
            </div>
            <h3>Alpha S2 safety shoes</h3>
          </div>
          <div className="products_grid_card">
            <div className="products_grid_card_img">
              <img src={alpha} alt="" />
            </div>
            <h3>Alpha S2 safety shoes</h3>
          </div>
        </div>
      </section>
      <section>
        <div className="last_section_products">
          <h2>
            Pick a Maxeo Safety Footwear Today,
            <br /> Meet Maximum Performance in All Occasions
          </h2>
          <p>
            With the Maxeo Safety Series, we crafted, we are redefining the
            "good" in the field of safety to create products that maximize the
            performance of those working in difficult conditions. Meet Maxeo for
            rock-solid safety experience.With the Maxeo Safety Series, we
            crafted, we are redefining the "good" in the field of safety to
            create products that maximize the performance of those working in
            difficult conditions. Meet Maxeo for rock-solid safety experience.
          </p>
        </div>
      </section>
    </div>
  );
};

export default ProductsByCategory;
