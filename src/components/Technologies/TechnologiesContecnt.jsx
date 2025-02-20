import React from "react";
import technopage from "../../images/technopage.png";
import maxcom from "../../images/maxcom.png";
import maxflex from "../../images/maxflex.png";
import maxtec from "../../images/maxtec.png";
import maxplate from "../../images/maxplate.png";
import maxtoe from "../../images/maxtoe.png";
import sta from "../../images/sta.png";

const TechnologiesContecnt = () => {
  return (
    <div>
      <section>
        <div className="first_section">
          <img src={technopage} alt="" />
          <p>
            MAXEO products are prepared with special solutions for each
            component, with their solution partners, to maximize the user's
            performance. These solutions were realized through innovation,
            engineered and manufactured to provide the smartest choice for its
            buyers.
          </p>
        </div>
      </section>
      <section className="second_section">
        <img src={maxcom} alt="" />
        <div className="second_section_content">
          <h3>Cooling Insoles PU & Textile Combination</h3>
          <p>for optimum moisture, management, comfort and support</p>
        </div>
      </section>
      <section className="third_section">
        <img src={maxflex} alt="" />
        <div className="third_section_content">
          <h3>Dual Density Sole System</h3>
          <p>for lightweight, flexibilty, shock absorbtion and durability</p>
          <p>It consists of two main elements: </p>
          <div className="third_section_content_span">
            <span>FOAMAX and DURAMAX</span> <br />
            <span>FOAMAX + DURAMAX = COMFORT + DURABILITY</span>
          </div>
        </div>
      </section>
      <section className="fourth_section">
        <img src={maxtec} alt="" />
        <div className="fourth_section_content">
          <h3>Advanced Lining Materials</h3>
          <p>for optimum moisture, management and comfort</p>
        </div>
      </section>
      <section className="fifth_section">
        <img src={maxplate} alt="" />
        <div className="fifth_section_content">
          <h3>Non-Metalic Anti-perforation Technical Textile Layer</h3>
          <p>
            for lightweight, flexibilty and maximum safety against penetration
          </p>
        </div>
      </section>
      <section className="sixth_section">
        <img src={maxtoe} alt="" />
        <div className="sixth_section_content">
          <h3>Fiberglass Protective Toe Caps</h3>
          <p>
            Made of real composit with reinforced fiberglass and special resine
            for maximum safety and minimum weight. Large fitting for maximum toe
            area.
          </p>
        </div>
      </section>

      <section className="seventh_section">
        <div className="seventh_section_img">
          <img src={sta} alt="" />
        </div>
        <div className="seventh_section_content">
          <h3>
            Safety shoes must meet the requirements of the European drectives
            regarding personal protective equipment.
          </h3>
          <p>
            The following safety class labels are available on products
            manufactured under the above directives and according to the
            european standards CE EN 20345: 2011. MAXEO products carry the CE
            label based on
          </p>
          <span>
            REGULATION (EU) 2016/425 OF THE EUROPEAN PARLIAMENT AND OF THE
            COUNCIL replacing old Council Directive 89/686/EEC.
          </span>
        </div>
      </section>
      <section className="eighth_section">
        <div className="section_grid_container">
          <div className="grid_card">
            <h4>S1</h4>
            <p>
              Toe Cap 200 J / N 15000 antistatic properties, energy absorption
              in heel, closed heel, oil resistant friction soles.
            </p>
          </div>
          <div className="grid_card">
            <h4>S1P</h4>
            <p>
              Toe Cap 200 J / N 15000 Nail protection 1100 N, antistatic
              properties, shock absorption in the heel area, closed heel, oil
              resistant friction soles.
            </p>
          </div>
          <div className="grid_card">
            <h4>S2</h4>
            <p>
              Toe Cap 200 J / N 15000, antistatic properties, energy absorption
              in heel, closed heel, oil resistant friction sole, water resistant
              for a minimum of 60 minutes.
            </p>
          </div>
          <div className="grid_card">
            <h4>S3</h4>
            <p>
              Toe Cap 200 J / N 15000 Nail protection 1100 N, antistatic
              properties, shock absorption in the heel area, closed heel, oil
              resistant friction soles, patterned sole, water-resistant for a
              minimum of 60 minutes.
            </p>
          </div>
          <div className="grid_card">
            <h4>S4</h4>
            <p>
              Material with natural and synthetic polymers / Toe Cap 200 J /
              antistatic properties, energy absorption in heel, closed heel, oil
              resistant friction sole.
            </p>
          </div>
          <div className="grid_card">
            <h4>S5</h4>
            <p>
              Material with natural and synthetic polymers/ Cap 200 J / N 15000,
              penetration protection 1100 N, antistatic properties, shock
              absorption in the heel area, closed heel, oil resistant friction
              soles, patterned sole.
            </p>
          </div>
          <div className="grid_card">
            <h4>HRO</h4>
            <p>
            Heat resistant outsole +300°C.
            </p>
          </div>
          <div className="grid_card">
            <h4>WRU</h4>
            <p>
            <p>Uppers resistant to water &lt; 60 minutes.</p>

            </p>
          </div>
          <div className="grid_card">
            <h4>WR</h4>
            <p>
            Water-resistant footwear
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TechnologiesContecnt;
