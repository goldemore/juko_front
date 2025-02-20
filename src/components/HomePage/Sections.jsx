import React from "react";
import img1 from "../../images/safety.jpg";
import img2 from "../../images/01police.png";
import img3 from "../../images/military.jpg";
import img4 from "../../images/screen.png";

const Sections = () => {
  return (
    <main>
      <section className="section_of_products">
        <h2>Products</h2>
        <p>
          Maxeo products are designed as innovative and high performance
          compatible with all the working conditions of professionals.
        </p>
        <div className="products_category_images">
          <div className="products_category_image_">
            <img src={img1} alt="" />
          </div>

          <div className="products_category_image_">
            <img src={img2} alt="" />
          </div>

          <div className="products_category_image_">
            <img src={img3} alt="" />
          </div>
        </div>
      </section>
      <section className="section_of_innovative">
        <h2>Innovative technologies</h2>
        <p>They move Maxeo Footwear's to the top of the industry.</p>
        <button>Learn More</button>
        <div className="section_of_innovative_image">
          <img src={img4} alt="" />
        </div>
      </section>
    </main>
  );
};

export default Sections;
