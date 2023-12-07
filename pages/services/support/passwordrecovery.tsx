import React from 'react'
import { Navbar } from '@components/Layout/Navbar';
import { Footer } from '@components/Layout/Footer';

import Marquee from "react-fast-marquee";
import Accordian from '@components/Accordian';

const  passwordrecovery = () => {
    return (
      <div>
        <Navbar />
        <section
          className="page-title parallaxie"
          data-bg-img="https://www.tallysolution.net/assets/images/08.jpg"
          style={{
            backgroundImage:
              'url("https://www.tallysolution.net/assets/images/08.jpg")',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'fixed',
            backgroundPosition: 'center 14.55px',
          }}
        >
          <div className="container">
            <div className="row">
              <div className="col">
                <h1>GlowIPS Service Authorized Tally Partners -Delhi</h1>
                <nav aria-label="breadcrumb" className="page-breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="index.php">Home</a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      GlowIPS Service Authorized Tally Partners -Delhi
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </section>
        <Marquee className="theme-bg marqueeData">
          <h1>
            Top Tally Solutions Dealers and Partners across New Delhi - Gurgaon
            - Noida - Faridabad - NCR | Tally Software Dealers and Solution
            Provides - Across New Delhi - NCR - Gurgaon - Noida
          </h1>
        </Marquee>

        <section className="pb-3">
          <div className="container">
            <div className="row justify-content-center flex-flow-row-reverse">
              <div className="col-md-4">
                <div className="tab-head">
                  <h4 className="service-head mb-0">Tally Products</h4>
                  <div
                    id="accordion"
                    className="accordion tabArea"
                    style={{
                      paddingLeft: '30px',
                      paddingRight: '30px',
                      paddingTop: '15px',
                      paddingBottom: '15px',
                    }}
                  >
                    <Accordian />
                  </div>
                </div>
                <div className="tab-head">
                  <h4 className="service-head mb-0">Tally Products</h4>
                  <div id="accordion" className="accordion tabArea">
                    {/*<div class="card-header1">*/}
                    {/*  <h6 class="mb-0">*/}
                    {/*    <a href="tally-erp9-software-quotation.php" class="collapsed">Our Quotation</a>*/}
                    {/*  </h6>*/}
                    {/*</div>*/}
                    <div className="card-header1">
                      <h6 className="mb-0">
                        <a
                          href="Tally-Customization-Solution-Delhi-India-International.php"
                          className="collapsed"
                        >
                          Customization Services
                        </a>
                      </h6>
                    </div>
                    <div className="card-header1">
                      <h6 className="mb-0">
                        <a
                          href="Tally-Corporate-Training-Unit-Delhi-NCR-India-International.php"
                          className="collapsed"
                        >
                          Tally Corporate Training
                        </a>
                      </h6>
                    </div>
                    <div className="card-header1">
                      <h6 className="mb-0">
                        <a
                          href="Tally-Subscription-Renewal-Services-Delhi-NCR-India-International.php"
                          className="collapsed"
                        >
                          Tally.Net Services
                        </a>
                      </h6>
                    </div>
                    <div className="card-header1">
                      <h6 className="mb-0">
                        <a
                          href="Tally-ERP-Business-Advisory-Services.php"
                          className="collapsed"
                        >
                          Business Advisory Services
                        </a>
                      </h6>
                    </div>
                    <div className="card-header1">
                      <h6 className="mb-0">
                        <a
                          href="Tally-AMC-Services-Delhi-NCR-India-International.php"
                          className="collapsed"
                        >
                          {' '}
                          Annual Support Cover
                        </a>
                      </h6>
                    </div>
                    <div className="card-header1">
                      <h6 className="mb-0">
                        <a
                          href="Tally-Synchronization-Solutions-Delhi-NCR-India-International.php"
                          className="collapsed"
                        >
                          {' '}
                          Data Synchronization
                        </a>
                      </h6>
                    </div>
                    <div className="card-header1">
                      <h6 className="mb-0">
                        <a
                          href="Tally-Support-Unit-Delhi-Ncr-India-International.php"
                          className="collapsed"
                        >
                          Priority Tally Support
                        </a>
                      </h6>
                    </div>
                  </div>
                </div>
                <div className="tab-head">
                  <h4 className="service-head mb-0">Useful Links</h4>
                  <div id="accordion" className="accordion tabArea">
                    <div className="card-header1">
                      <h6 className="mb-0">
                        <a
                          href="Tally-Solutions-Unit.php"
                          className="collapsed"
                        >
                          Tally Academy Solution
                        </a>
                      </h6>
                    </div>
                    <div className="card-header1">
                      <h6 className="mb-0">
                        <a
                          href="Corporate-Management-Services-India-International.php"
                          className="collapsed"
                        >
                          Corporate Management
                        </a>
                      </h6>
                    </div>
                    <div className="card-header1">
                      <h6 className="mb-0">
                        <a
                          href="Tally-Vertical-Solutions-Authorized-Development-Unit.php"
                          className="collapsed"
                        >
                          Vertical Solutions for Tally{' '}
                        </a>
                      </h6>
                    </div>
                    <div className="card-header1">
                      <h6 className="mb-0">
                        <a
                          href="Tally-Integration-Services-Delhi-NCR-India-International.php"
                          className="collapsed"
                        >
                          Tally Integration
                        </a>
                      </h6>
                    </div>
                    <div className="card-header1">
                      <h6 className="mb-0">
                        <a
                          href="glowips-tallyerp-9-customers.php"
                          className="collapsed"
                        >
                          Our Esteemed Clientage
                        </a>
                      </h6>
                    </div>
                    <div className="card-header1">
                      <h6 className="mb-0">
                        <a href="instantsupport.php" className="collapsed">
                          Instant Support
                        </a>
                      </h6>
                    </div>
                  </div>
                </div>
                <div className="tab-head">
                  <h4 className="service-head mb-0">Ask for a service</h4>
                  <div className="tabArea">
                    <form
                      id="contact-form"
                      className="row"
                      method="post"
                      action=""
                    >
                      <div className="form-group col-md-12 has-error has-danger">
                        <input
                          id="form_name"
                          type="text"
                          name="firstname"
                          className="form-control"
                          placeholder="First Name"
                          data-error="Name is required."
                        />
                      </div>
                      <div className="form-group col-md-12 has-error has-danger">
                        <input
                          id="form_name"
                          type="text"
                          name="firstname"
                          className="form-control"
                          placeholder="Mobile No."
                          data-error="Mobile is required."
                        />
                      </div>
                      <div className="form-group col-md-12 has-error has-danger">
                        <input
                          id="form_name"
                          type="text"
                          name="firstname"
                          className="form-control"
                          placeholder="Email"
                          data-error="Email is required."
                        />
                      </div>
                      <div className="form-group col-md-12 has-error has-danger">
                        <input
                          id="form_name"
                          type="text"
                          name="firstname"
                          className="form-control"
                          placeholder="City"
                          data-error="City is required."
                        />
                      </div>
                      <div className="form-group col-md-12 has-error has-danger">
                        <input
                          id="form_name"
                          type="text"
                          name="firstname"
                          className="form-control"
                          placeholder="Message"
                          data-error="Message is required."
                        />
                      </div>
                      <div className="col-md-12 text-center mt-4 mb-3">
                        <button className="btn">
                          <span>Send Messages</span>
                        </button>
                      </div>
                    </form>
                  </div>
                </div>{' '}
              </div>
              <div className="col-lg-8 col-md-8">
                <div className="section-title">
                  <h2 className="title">Tally Password Recovery</h2>
                  <p className="p-3">
                    Data of Tally is very vital for every user or company. More
                    serious the user is more vital data becomes. In other words
                    we can say more and more dependence on tally needs more and
                    more care of its data. Although tally has provided many ways
                    to protect you data but one way or other due to some human
                    error or system failure we loose our data. Particularly in
                    case of tally it cripples our day today business.
                  </p>
                  <p className="p-3">
                    We have to first see why data has got corrupted the ways to
                    recover depends on reason it got corrupted. Here are some
                    tips and tricks which can save you the day. First of all
                    lets see different reasons which can cause data corruption.
                  </p>
                  <img
                    src="https://www.tallysolution.net/assets/images/tally_password_recovery_glowips_delhi.jpg"
                    alt="Tally Password Recovery Glowips Delhi"
                    width="100%"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    )
  }
  
  export default passwordrecovery