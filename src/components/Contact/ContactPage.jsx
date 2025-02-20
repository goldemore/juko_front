import React from "react";
import icon from "../../images/icon.png";

const ContactPage = () => {
  return (
    <div>
      <section className="contact_section">
        <h2>Call Us or fill the form</h2>
        <div className="contact_content">
          <div className="information_content">
            <img src={icon} alt="address" />
            <div className="information_content_">
              <div>
                <h3>Company Headquarters</h3>
                <p>Contact Mail : info@maxeopro.com</p>
                <p>
                  Factory : INOVA Deri Tekstil San. ve Tic. A.Ş. Başkent
                  Organize Sanayi Bölgesi Teknokent Bulvarı No: 38 Sincan /
                  Ankara, Türkiye
                </p>
              </div>
              <div>
                <span>Working time</span>
                <p>Mon - Fri: 9:00 - 19:00 / Closed on Weekends</p>
              </div>

            </div>
          </div>
          <div className="form_content">
            <form action="#" method="POST">
              <div class="form-row">
                <div>
                  <label for="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div>
                  <label for="company">Company</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    placeholder="Enter your company"
                  />
                </div>
              </div>

              <div class="form-row">
                <div>
                  <label for="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div>
                  <label for="phone">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="Enter your phone"
                  />
                </div>
              </div>

              <label for="message">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Enter your message"
              ></textarea>

              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </section>
      <section>
        <div className="google_map">
          <iframe
            class="gmap_iframe"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
            src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=İnova Deri Tekstil San.Tic.A.Ş.&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
