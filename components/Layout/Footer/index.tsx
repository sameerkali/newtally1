import { FC } from "react";
import { Link } from "@components/Utils/Link";
import { FiHeart } from "react-icons/fi";
import { CustomImage } from "@components/Utils/CustomImage";
import Icon from "@assets/icon.svg";
import { CONFIG } from "@libs/config";
import { PROJECTS } from "@libs/config/projects";

export const Footer: FC = () => {
  const OTHER = [
    {
      href: "/basvuru",
      name: "Yetkili Başvurusu",
    },
    {
      href: "/discord",
      name: "Tester Ol",
    },
    {
      href: "https://blog.slipyme.com",
      name: "Slipyme Blog",
    },
  ];

  return (
    <>
    <div className="footer-social">
  <a href="https://api.whatsapp.com/send?phone=+91&text=Hii">
    <img
      src="https://www.tallysolution.net/assets/images/whatsapp-icon.webp"
      className="footer-whatsapp"
      style={{ filter: "invert(0)" }}
    />
  </a>
  <a href="tel:">
    <img
      src="https://www.tallysolution.net/assets/images/call-icon.webp"
      className="footer-call"
      style={{ filter: "invert(0)" }}
    />
  </a>
  <a>
    <img
      src="https://www.tallysolution.net/assets/images/fillForm.png"
      className="footer-fillForm"
      style={{ filter: "invert(0)" }}
    />
  </a>
</div>


<div className="container">
  <div className="d-flex justify-content-center flex-flow-wrap">
    <a className="btn btn-2 m-2" href="tally-erp9-software-quotation.php">
      {" "}
      <span className="btn-icon btn-arrow" />
      <span className="btn-text ps-5 pe-5">Quotations</span>
    </a>
    <a className="btn btn-2 m-2" href="Tally-Solutions-Unit.php">
      {" "}
      <span className="btn-icon btn-arrow" />
      <span className="btn-text ps-5 pe-5">More</span>
    </a>
    <a className="btn btn-2 m-2" href="buyoffline.php">
      {" "}
      <span className="btn-icon btn-arrow" />
      <span className="btn-text ps-5 pe-5">Buy Offline</span>
    </a>
    <a
      className="btn btn-2 m-2"
      href="assets/pdf/GLOWIPS-BROCHURE.pdf"
      target="_blank"
    >
      {" "}
      <span className="btn-icon btn-arrow" />
      <span className="btn-text ps-5 pe-5">Brochure</span>
    </a>
    <a
      className="btn btn-2 m-2"
      href="Tally-Data-Migration-Solution-Delhi-India-International.php"
    >
      {" "}
      <span className="btn-icon btn-arrow" />
      <span className="btn-text ps-5 pe-5">Migrate</span>
    </a>
  </div>
</div>

    <footer className="footer">
    <div className="waves">
      <div className="wave" id="wave1" />
      <div className="wave" id="wave2" />
      <div className="wave" id="wave3" />
      <div className="wave" id="wave4" />
    </div>
    <div className="primary-footer dark-bg">
      <div className="container">
        <div className="row row align-items-end">
          <div className="col-xl-8 col-lg-5 col-md-12 mt-5 mt-lg-0">
            <div className="row">
              <div className="col-md-8">
                <h4 className="mb-4 text-white">About Tally Solutions</h4>
                <p className="mb-3">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui
                  odio natus est doloribus fugiat hic architecto, ratione enim
                  laborum ullam nulla similique temporibus repudiandae dolorum
                  obcaecati! Itaque provident vitae quod.
                </p>
                <div className="footer-cntct">
                  <ul className="media-icon list-unstyled">
                    <li>
                      <i className="flaticon-email" />{" "}
                      <a href="mailto:tallyproducts@gmail.com">
                        tallyproducts@gmail.com
                      </a>
                    </li>
                    <li>
                      <i className="flaticon-phone" />{" "}
                      <a href="tel:+919582827928">+91 9582827928</a>
                    </li>
                  </ul>
                  <div className="social-icons social-colored mt-2 mb-3">
                    <ul className="list-inline">
                      <li className="social-facebook">
                        <a href="http://www.facebook.com/TallySolution">
                          <i className="fab fa-facebook-f" />
                        </a>
                      </li>
                      <li className="social-dribbble">
                        <a href="http://www.pinterest.com/tallysoftware">
                          <i className="fab fa-pinterest" />
                        </a>
                      </li>
                      <li className="social-skype">
                        <a href="http://twitter.com/#!/TALLYSOLUTION">
                          <i className="fab fa-twitter" />
                        </a>
                      </li>
                      <li className="social-linkedin">
                        <a href="http://www.linkedin.com/pub/tally-customization-developers-delhi-ncr/38/5b/a7">
                          <i className="fab fa-linkedin-in" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mt-5 mt-md-0">
                <h4 className="mb-4 text-white">Quick Links</h4>
                <div className="footer-list">
                  <ul className="list-unstyled">
                    <li>
                      <a href="index.php">Home</a>
                    </li>
                    <li>
                      <a href="../about-tally-solution-unit.php">About us</a>
                    </li>
                    <li>
                      <a href="../index.php">Site Map</a>
                    </li>
                    <li>
                      <a href="../Tally-Placements-Delhi-NCR.php">Placement</a>
                    </li>
                    <li>
                      <a href="../about-tally-erp9-software.php">Product</a>
                    </li>
                    <li>
                      <a href="../index.php">Disclaimer</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 mt-5 mt-md-0">
                <h4 className="mb-4 text-white">Solution</h4>
                <div className="footer-list">
                  <ul className="list-unstyled">
                    <li>
                      <a href="../Tally-Vertical-Solutions-Authorized-Development-Unit.php">
                        {" "}
                        Vertical Solutions for Tally.ERP 9
                      </a>
                    </li>
                    <li>
                      <a href="../Tally-Customization-Solutions-Delhi-NCR-India-International.php">
                        {" "}
                        Customization Solutions
                      </a>
                    </li>
                    <li>
                      <a href="../Tally-Invoice-Customization-Solution-Delhi-India-International.php">
                        Tally Ready Invoice Customization
                      </a>
                    </li>
                    <li>
                      <a href="../Tally-Addon-Modules-Delhi-NCR-India-International.php">
                        Tally add-on Modules
                      </a>
                    </li>
                    <li>
                      <a href="../Tally-Integration-Services-Delhi-NCR-India-International.php">
                        Tally Integration
                      </a>
                    </li>
                    <li>
                      <a href="../Corporate-Management-Services-India-International.php">
                        {" "}
                        Corporate Management
                      </a>
                    </li>
                    <li>
                      <a href="../Custom-Built-Solutions-In-Tally-ERP9.php">
                        Custom Built Solution
                      </a>
                    </li>
                  </ul>
                </div>
                <h4 className="mb-4 text-white">Company</h4>
                <div className="footer-list">
                  <ul className="list-unstyled">
                    <li>
                      <a href="../team-tally-solution-glowips-authorized-unit.php">
                        GLOWIPS Team
                      </a>
                    </li>
                    <li>
                      <a href="../Authorized-tally-solution-unit-glowips-associates.php">
                        Our Associates
                      </a>
                    </li>
                   
                    <li>
                      <a href="../tallyerp-9-featured-projects.php">
                        Featured Projects
                      </a>
                    </li>
                    <li>
                      <a href="../glowips-tallyerp-9-customers.php">
                        Our Esteemed Clientage
                      </a>
                    </li>
                  </ul>
                </div>
                <h4 className="mb-4 text-white">Download</h4>
                <div className="footer-list">
                  <ul className="list-unstyled">
                    <li>
                      <a href="../Download-Tally-Software-Free.php">
                        Tally Downloads
                      </a>
                    </li>
                    <li>onclick
                      <a>Instant Support</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 mt-5 mt-md-0">
                <div className="footer-anim">
                  <img
                    src="https://www.tallysolution.net/assets/images/footer-rock.png"
                    width={200}
                    style={{ filter: "invert(0)" }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mt-5 mt-md-0 " id="rapid_response">
            <h4 className="mb-4 text-white">Connect With Us</h4>
            <div className="tabArea" style={{ paddingRight: 15 }}>
              <form
                id="contact-form"
                className="row"
                method="post"
               
               
              >
                <input
                  type="hidden"
                  defaultValue=""
                  id="recapta_token"
                  name="recapta_token"
                />
                <div className="form-group col-md-12 has-error has-danger">
                  <input
                    id="form_name"
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="First Name"
                   
                    data-error="Name is required."
                  />
                </div>
                <div className="form-group col-md-12 has-error has-danger">
                  <input
                    id="form_name"
                    type="text"
                    name="mobile"
                    className="form-control"
                    placeholder="Mobile No."
                   
                    data-error="Mobile is required."
                  />
                </div>
                <div className="form-group col-md-12 has-error has-danger">
                  <input
                    id="form_name"
                    type="text"
                    name="email"
                    className="form-control"
                    placeholder="Email"
                   
                    data-error="Email is required."
                  />
                </div>
                <div className="form-group col-md-12 has-error has-danger">
                  <input
                    id="form_name"
                    type="text"
                    name="city"
                    className="form-control"
                    placeholder="City"
                   
                    data-error="City is required."
                  />
                </div>
                <div className="form-group col-md-12 has-error has-danger">
                  <input
                    id="form_name"
                    type="text"
                    name="message"
                    className="form-control"
                    placeholder="Message"
                   
                    data-error="Message is required."
                  />
                </div>
                <div className="col-md-12 text-center mt-4 mb-3 g-recaptcha footer-mail-submit-button">
                  <button className="btn">
                    <span className="btn-text">Send Messages</span>
                  </button>
                </div>
              </form>
            </div>
            <h4 className="mb-4 text-white">Services</h4>
            <div className="footer-list">
              <ul className="list-unstyled">
                <li>
                  <a href="../Authorized-tally-academy-delhi-ncr.php">
                    Tally Academy
                  </a>
                </li>
                <li>
                  <a href="../tally-erp9-training-at-customer-site.php">
                    Tally Training at Site
                  </a>
                </li>
                <li>
                  <a href="../tally-training-unit-authorized-tally-academy.php">
                    Tally Training at Academy
                  </a>
                </li>
                <li>
                  <a href="../Tally-Support-Unit-Delhi-Ncr-India-International.php">
                    Priority Tally Support
                  </a>
                </li>
                <li>
                  <a href="../Tally-Data-Recovery-Service-Delhi-India-International.php">
                    Tally Data Recovery
                  </a>
                </li>
                <li>
                  <a href="../Tally-Password-Recovery-Service-Delhi-India-International.php">
                    Tally Password Recovery
                  </a>
                </li>
                <li>
                  <a href="../Tally-Data-Migration-Solution-Delhi-India-International.php">
                    Data Migration
                  </a>
                </li>
                <li>
                  <a href="../Tally-Implementation-Service-Delhi-India-International.php">
                    Implementation Service
                  </a>
                </li>
                <li>
                  <a href="../Incremental-tally-implementation-Delhi-NCR-India-International.php">
                    Incremental Implementation
                  </a>
                </li>
                <li>
                  <a href="../Target-Tally-Implementation-Delhi-NCR-India-International.php">
                    Target Implementation
                  </a>
                </li>
                <li>
                  <a href="../Tally-Customization-Solution-Delhi-India-International.php">
                    Customization Service
                  </a>
                </li>
                <li>
                  <a href="../Tally-Invoice-Customization-Solution-Delhi-India-International.php">
                    Invoice Customization
                  </a>
                </li>
                <li>
                  <a
                    href="../assets/pdf/Our-Deluxe-ERP-Module.pdf"
                    target="_blank"
                  >
                    Module Customization
                  </a>
                </li>
                <li>
                  <a href="../Tally-ERP9-Customization-Solution-Delhi-India-International.php">
                    Dedicated Customization
                  </a>
                </li>
                <li>
                  <a href="../Tally-Corporate-Training-Unit-Delhi-NCR-India-International.php">
                    Tally Corporate Training
                  </a>
                </li>
                <li>
                  <a href="../Tally-AMC-Services-Delhi-NCR-India-International.php">
                    Annual Support Cover
                  </a>
                </li>
                <li>
                  <a href="../Tally-Subscription-Renewal-Services-Delhi-NCR-India-International.php">
                    Tally .Net Subscription
                  </a>
                </li>
                <li>
                  <a href="../Tally-Synchronization-Solutions-Delhi-NCR-India-International.php">
                    Synchronization Implementation
                  </a>
                </li>
                <li>
                  <a href="../Tally-ERP-Business-Advisory-Services.php">
                    Business Advisory Services
                  </a>
                </li>
                <li>
                  <a href="../Tally-Placements-Delhi-NCR.php">Placement</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="secondary-footer theme-bg footer-pb-80">
      <div className="container">
        <div className="copyright">
          <div className="row">
            <div className="col-lg-12">
              {" "}
              <span>
                Copyright 2023 Tally Solutions Design by{" "}
                <u>
                  <a href="codemix.in">Codemix technologies</a>
                </u>{" "}
                | All Rights Reserved
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>















































</>
  
  );
};
