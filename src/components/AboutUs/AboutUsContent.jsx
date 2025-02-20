import React from "react";
import sec3bg from "../../images/whatstand.png";
import soulImg from "../../images/soul.png";
import mission from "../../images/mission.png";
import vision from "../../images/vision.png";
import lastBg from "../../images/back_mesh.png";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

const AboutUsContent = () => {
  return (
    <>
      <section className="about_first_sec">
        <div className="about_first_sec_ul_block">
          <ul className="about_first_sec_ul">
            <li>
              <ScrollLink to="soul" smooth={true} duration={500}>
                Soul
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to="mission&vision" smooth={true} duration={500}>
                Mission & Vision
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to="value" smooth={true} duration={500}>
                Values
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to="value" smooth={true} duration={500}>
                Standarts
              </ScrollLink>
            </li>
          </ul>
        </div>
      </section>

      <section className="about_second_sec">
        <div className="about_second_sec_container">
          <h2>Innovation for Maximum Performance</h2>
          <p>
            MAXEO is a brand established by a team having more than 25 years of
            experience, high energy, and dynamism aiming to convert dreams into
            plans and plans into reality. MAXEO's mission is to utilize
            innovation for better performance of professionals having the motto
            "innovation for performance". Doing this, Maxeo aims more
            professionals to use the best.
          </p>
        </div>
      </section>
      <section
        className="about_third_sec"
        style={{ backgroundImage: `url(${sec3bg})` }}
      >
        <div className="about_third_sec_container">
          <h2>What MAXEO stands for</h2>
          <p>
            MAXEOMAXEO stands for innovation, perfrormance, independence,
            determination, courage, sincerity and activity. stands for
            innovation, perfrormance, independence, determination, courage,
            sincerity and activity.
          </p>
        </div>
      </section>
      <section className="soul_section" id="soul">
        <div className="soul_container">
          <div className="soul_image">
            <img src={soulImg} alt="" />
          </div>
          <div className="soul_content">
            <h2>Soul</h2>
            <div className="h2_under_content">
              <p>
                His immense ambition makes him want to be the best. A
                competitive type who usually gives everything they have in order
                to win. Strong self confidence about his abilities makes this
                possible. Such qualities help MAXEO tackle all difficulties and
                solve problems in a leading forward thinking manner. People
                around him will invariably notice his leadership traits and
                submit to his authority. It all comes down to his confidence
                that shines like a bright light. Everybody loves shiny things.
              </p>
              <p>
                Taking on new responsibilities has never been a burden to him.
                Instead he seeks out new challenges to show his talents.
                Courageous in making hard decisions and ready to act fast when
                needed. Always up to date with competition. Having the courage
                to show your talents is not natural for many. Mental strength is
                one of his greatest weapons. Even in face of defeats he never
                waver and simply move on towards achieving the set goals. His
                strength develops particularly good when working alone or
                working in a team where he is the leader.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="mission_vission" id="mission&vision">
        <div className="mission_vission_container">
          <div className="mission_left">
            <img src={mission} alt="" />
            <div className="mission_left_content">
              <h2>Mission</h2>
              <p>
                To strengthen professionals and decision makers who are in
                intensive struggle within the conditions of working life by
                providing innovative products having maximum performance and to
                develop new products in line with their wishes to increase
                motivation.
              </p>
            </div>
          </div>
          <div className="vision_right">
            <img src={vision} alt="" />
            <div className="mission_left_content">
              <h2>Vision</h2>
              <p>
                Aiming to lead the industry in technical and maximum
                performance, be in the top 10 most preferred brand of
                professionals in Europe and then the World.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        style={{ background: `url(${lastBg}) no-repeat center/cover` }}
        id="value"
      >
        <div className="last_section_container">
          <h2>Values</h2>
          <div className="four_values">
            <div className="values_blog">
              <h3>Powerful</h3>
              <p>Quality Materials</p>
              <p>Light and Comfortable</p>
              <p>Stylish Design</p>
              <p>Understanding with customer</p>
            </div>

            <div className="values_blog">
              <h3>Experienced</h3>
              <p>Sectoral experience</p>
              <p>Success stories</p>
              <p>Expert team</p>
            </div>

            <div className="values_blog">
              <h3>Technical</h3>
              <p>Analytical</p>
              <p>Works for maximum performance</p>
              <p>Works to make the products stronge</p>
            </div>

            <div className="values_blog">
              <h3>Flexible</h3>
              <p>Project based work</p>
              <p>Customized products</p>
              <p>Innovative team</p>
              <p>Continues improvement</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUsContent;
