import React from 'react'
import { Navbar } from '@components/Layout/Navbar'
import { Footer } from '@components/Layout/Footer'
import Marquee from 'react-fast-marquee'
import Accordian from '@components/Accordian'
const preprinted = () => {
  return (
    <div>
      <Navbar />
      <section
        className="page-title parallaxie"
        data-bg-img="/images/08.jpg"
        style={{
          // cant find the source for the orignal image
          backgroundImage: 'url("/images/08.jpg")',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center 134.681px',
        }}
      >
        <div
          className="container"
          style={{
            width: '100%',
            height: '33vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            paddingTop: '130px',
            textAlign: 'left',
          }}
        >
          <h1 style={{ zIndex: '2', marginBottom: '20px' }}>
            Glow IPS Service Authorized Tally Partner - Delhi
          </h1>
          <nav aria-label="breadcrumb" className="page-breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="index.php">Home</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Glow IPS Tally ERP.9 Rental
              </li>
            </ol>
          </nav>
        </div>
      </section>
      <Marquee className="theme-bg marqueeData">
        <h1>
          Top Tally Solutions Dealers and Partners across New Delhi - Gurgaon -
          Noida - Faridabad - NCR | Tally Software Dealers and Solution Provides
          - Across New Delhi - NCR - Gurgaon - Noida
        </h1>
      </Marquee>

      {/* form */}
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
                      <a href="Tally-Solutions-Unit.php" className="collapsed">
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
                    noValidate={true}
                  >
                    <div className="form-group col-md-12 has-error has-danger">
                      <input
                        id="form_name"
                        type="text"
                        name="firstname"
                        className="form-control"
                        placeholder="First Name"
                        required={true}
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
                        required={true}
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
                        required={true}
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
                        required={true}
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
                        required={true}
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
                <h2 className="title">Preprinted Invoices</h2>
                <div className="row">
                  <div className="col-md-12 col-12">
                    <div className="client-border-2 mt-3 mb-3">
                      <div className="row justify-content-center align-items-center">
                        <div className="col-md-4">
                          <a
                            href="assets/pdf/GLOWIPS PRE-PRINTED CUST INVOICES (1).pdf"
                            target="_blank"
                          >
                            <img
                              src="https://www.tallysolution.net/assets/images/big_images/GLOWIPS_PRE-PRINTED_CUST_INVOICES_1.jpg"
                              alt=""
                              width="100%"
                            />
                          </a>
                        </div>
                        <div className="col-md-4">
                          <a
                            href="assets/pdf/GLOWIPS PRE-PRINTED CUST INVOICES (2).pdf"
                            target="_blank"
                          >
                            <img
                              src="https://www.tallysolution.net/assets/images/big_images/GLOWIPS_PRE-PRINTED_CUST_INVOICES_2.jpg"
                              alt=""
                              width="100%"
                            />
                          </a>
                        </div>
                        <div className="col-md-4">
                          <a
                            href="assets/pdf/GLOWIPS PRE-PRINTED CUST INVOICES (3).pdf"
                            target="_blank"
                          >
                            <img
                              src="https://www.tallysolution.net/assets/images/big_images/GLOWIPS_PRE-PRINTED_CUST_INVOICES_3.jpg"
                              alt=""
                              width="100%"
                            />
                          </a>
                        </div>
                        <div className="col-md-4">
                          <a
                            href="assets/pdf/GLOWIPS PRE-PRINTED CUST INVOICES (4).pdf"
                            target="_blank"
                          >
                            <img
                              src="https://www.tallysolution.net/assets/images/big_images/GLOWIPS_PRE-PRINTED_CUST_INVOICES_4.jpg"
                              alt=""
                              width="100%"
                            />
                          </a>
                        </div>
                        <div className="col-md-4">
                          <a
                            href="assets/pdf/GLOWIPS PRE-PRINTED CUST INVOICES (5).pdf"
                            target="_blank"
                          >
                            <img
                              src="https://www.tallysolution.net/assets/images/big_images/GLOWIPS_PRE-PRINTED_CUST_INVOICES_5.jpg"
                              alt=""
                              width="100%"
                            />
                          </a>
                        </div>
                        <div className="col-md-4">
                          <a
                            href="assets/pdf/GLOWIPS PRE-PRINTED CUST INVOICES (6).pdf"
                            target="_blank"
                          >
                            <img
                              src="https://www.tallysolution.net/assets/images/big_images/GLOWIPS_PRE-PRINTED_CUST_INVOICES_6.jpg"
                              alt=""
                              width="100%"
                            />
                          </a>
                        </div>
                        <div className="col-md-4">
                          <a
                            href="assets/pdf/GLOWIPS PRE-PRINTED CUST INVOICES (7).pdf"
                            target="_blank"
                          >
                            <img
                              src="https://www.tallysolution.net/assets/images/big_images/GLOWIPS_PRE-PRINTED_CUST_INVOICES_7.jpg"
                              alt=""
                              width="100%"
                            />
                          </a>
                        </div>
                        <div className="col-md-4">
                          <a
                            href="assets/pdf/GLOWIPS PRE-PRINTED CUST INVOICES (8).pdf"
                            target="_blank"
                          >
                            <img
                              src="https://www.tallysolution.net/assets/images/big_images/GLOWIPS_PRE-PRINTED_CUST_INVOICES_8.jpg"
                              alt=""
                              width="100%"
                            />
                          </a>
                        </div>
                        <div className="col-md-4">
                          <a
                            href="assets/pdf/GLOWIPS PRE-PRINTED CUST INVOICES (9).pdf"
                            target="_blank"
                          >
                            <img
                              src="https://www.tallysolution.net/assets/images/big_images/GLOWIPS_PRE-PRINTED_CUST_INVOICES_9.jpg"
                              alt=""
                              width="100%"
                            />
                          </a>
                        </div>
                        <div className="col-md-4">
                          <a
                            href="assets/pdf/GLOWIPS PRE-PRINTED CUST INVOICES (10).pdf"
                            target="_blank"
                          >
                            <img
                              src="https://www.tallysolution.net/assets/images/big_images/GLOWIPS_PRE-PRINTED_CUST_INVOICES_10.jpg"
                              alt=""
                              width="100%"
                            />
                          </a>
                        </div>
                        <div className="col-md-4">
                          <a
                            href="assets/pdf/GLOWIPS PRE-PRINTED CUST INVOICES (11).pdf"
                            target="_blank"
                          >
                            <img
                              src="https://www.tallysolution.net/assets/images/big_images/GLOWIPS_PRE-PRINTED_CUST_INVOICES_11.jpg"
                              alt=""
                              width="100%"
                            />
                          </a>
                        </div>
                        <div className="col-md-4">
                          <a
                            href="assets/pdf/GLOWIPS PRE-PRINTED CUST INVOICES (12).pdf"
                            target="_blank"
                          >
                            <img
                              src="https://www.tallysolution.net/assets/images/big_images/GLOWIPS_PRE-PRINTED_CUST_INVOICES_12.jpg"
                              alt=""
                              width="100%"
                            />
                          </a>
                        </div>
                        <div className="col-md-4">
                          <a
                            href="assets/pdf/GLOWIPS PRE-PRINTED CUST INVOICES (13).pdf"
                            target="_blank"
                          >
                            <img
                              src="https://www.tallysolution.net/assets/images/big_images/GLOWIPS_PRE-PRINTED_CUST_INVOICES_13.jpg"
                              alt=""
                              width="100%"
                            />
                          </a>
                        </div>
                        <div className="col-md-4">
                          <a
                            href="assets/pdf/GLOWIPS PRE-PRINTED CUST INVOICES (14).pdf"
                            target="_blank"
                          >
                            <img
                              src="https://www.tallysolution.net/assets/images/big_images/GLOWIPS_PRE-PRINTED_CUST_INVOICES_14.jpg"
                              alt=""
                              width="100%"
                            />
                          </a>
                        </div>
                        <div className="col-md-4">
                          <a
                            href="assets/pdf/GLOWIPS PRE-PRINTED CUST INVOICES (15).pdf"
                            target="_blank"
                          >
                            <img
                              src="https://www.tallysolution.net/assets/images/big_images/GLOWIPS_PRE-PRINTED_CUST_INVOICES_15.jpg"
                              alt=""
                              width="100%"
                            />
                          </a>
                        </div>
                        <div className="col-md-4">
                          <a
                            href="assets/pdf/GLOWIPS PRE-PRINTED CUST INVOICES (16).pdf"
                            target="_blank"
                          >
                            <img
                              src="https://www.tallysolution.net/assets/images/big_images/GLOWIPS_PRE-PRINTED_CUST_INVOICES_16.jpg"
                              alt=""
                              width="100%"
                            />
                          </a>
                        </div>
                        <div className="col-md-4">
                          <a
                            href="assets/pdf/GLOWIPS PRE-PRINTED CUST INVOICES (17).pdf"
                            target="_blank"
                          >
                            <img
                              src="https://www.tallysolution.net/assets/images/big_images/GLOWIPS_PRE-PRINTED_CUST_INVOICES_17.jpg"
                              alt=""
                              width="100%"
                            />
                          </a>
                        </div>
                        <div className="col-md-4">
                          <a
                            href="assets/pdf/GLOWIPS PRE-PRINTED CUST INVOICES (18).pdf"
                            target="_blank"
                          >
                            <img
                              src="https://www.tallysolution.net/assets/images/big_images/GLOWIPS_PRE-PRINTED_CUST_INVOICES_18.jpg"
                              alt=""
                              width="100%"
                            />
                          </a>
                        </div>
                        <div className="col-md-4">
                          <a
                            href="assets/pdf/GLOWIPS PRE-PRINTED CUST INVOICES.pdf"
                            target="_blank"
                          >
                            <img
                              src="https://www.tallysolution.net/assets/images/big_images/GLOWIPS_PRE-PRINTED_CUST_INVOICES_19.jpg"
                              alt=""
                              width="100%"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default preprinted