import React from 'react'
import { Navbar } from '@components/Layout/Navbar'
import { Footer } from '@components/Layout/Footer'
import Marquee from 'react-fast-marquee'
import Accordian from '@components/Accordian'
const addonmodules = () => {
  return (
    <div>
      <Navbar />
      <section
        className="page-title parallaxie"
        data-bg-img="/images/08.jpg"
        style={{
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
                <h2 className="title">Tally Add on Modules</h2>
                <div className="textarea">
                  <p>
                    These modules are suited for all industry type, Add on
                    modules are easy to use and are compatible with all
                    releases. Tally Add on Modules are developed according to
                    requirement of the enterprise &amp; if you have any other
                    requirement than these modules, please write to us. Our
                    Developers will work on it and get back to you for details.{' '}
                  </p>
                  <div className="client-heading">
                    <p>Our Ready Modules include :-</p>
                  </div>
                  <table
                    className="pdftable"
                    width="600px;"
                    cellPadding={20}
                    cellSpacing={10}
                  >
                    <tbody>
                      <tr>
                        <td
                          height={25}
                          align="left"
                          valign="middle"
                          scope="row"
                        >
                          <table
                            className="pdftable"
                            width="900px"
                            cellPadding={2}
                            cellSpacing={1}
                          >
                            <tbody>
                              <tr>
                                <td
                                  width="83%"
                                  height={25}
                                  align="left"
                                  valign="middle"
                                  bgcolor="#FFFFFF"
                                  scope="row"
                                >
                                  Garment Industry Module
                                </td>
                                <td
                                  width="17%"
                                  height={25}
                                  align="left"
                                  valign="middle"
                                  className="white"
                                >
                                  <a
                                    href="assets/pdf/GARMENT-INDUSTRY-MODULE.pdf"
                                    target="_blank"
                                  >
                                    Read More
                                    <img
                                      src="images/pdf.gif"
                                      width={16}
                                      height={16}
                                    />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td
                                  height={25}
                                  align="left"
                                  valign="middle"
                                  bgcolor="#FFFFFF"
                                  scope="row"
                                >
                                  Vehicle Sales Module
                                </td>
                                <td
                                  height={25}
                                  align="left"
                                  valign="middle"
                                  className="white"
                                >
                                  <a
                                    href="assets/pdf/Vehicle-Sales-Module.pdf"
                                    target="_blank"
                                  >
                                    Read More
                                    <img
                                      src="images/pdf.gif"
                                      width={16}
                                      height={16}
                                    />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td
                                  height={25}
                                  align="left"
                                  valign="middle"
                                  bgcolor="#FFFFFF"
                                  scope="row"
                                >
                                  Party Wise Outstanding Module{' '}
                                </td>
                                <td
                                  height={25}
                                  align="left"
                                  valign="middle"
                                  className="white"
                                >
                                  <a
                                    href="assets/pdf/PARTY-WISE-OUTSTANDING-MODULE.pdf"
                                    target="_blank"
                                  >
                                    Read More
                                    <img
                                      src="images/pdf.gif"
                                      width={16}
                                      height={16}
                                    />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td
                                  height={25}
                                  align="left"
                                  valign="middle"
                                  scope="row"
                                >
                                  Standard Terms and Condition Module{' '}
                                </td>
                                <td
                                  height={25}
                                  align="left"
                                  valign="middle"
                                  className="white"
                                >
                                  <a
                                    href="assets/pdf/STANDARD-TERMS-AND-CONDITION-MODULE.pdf"
                                    target="_blank"
                                  >
                                    Read More
                                    <img
                                      src="images/pdf.gif"
                                      width={16}
                                      height={16}
                                    />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td
                                  height={25}
                                  align="left"
                                  valign="middle"
                                  scope="row"
                                >
                                  Three Discount Coloum Module{' '}
                                </td>
                                <td
                                  height={25}
                                  align="left"
                                  valign="middle"
                                  className="white"
                                >
                                  <a
                                    href="assets/pdf/THREE-DISCOUNT-COLOUM-MODULE.pdf"
                                    target="_blank"
                                  >
                                    Read More
                                    <img
                                      src="images/pdf.gif"
                                      width={16}
                                      height={16}
                                    />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td
                                  height={25}
                                  align="left"
                                  valign="middle"
                                  scope="row"
                                >
                                  {' '}
                                  Auto Physical Stock Verification
                                </td>
                                <td
                                  height={25}
                                  align="left"
                                  valign="middle"
                                  className="white"
                                >
                                  <a
                                    href="assets/pdf/AUTO-PHYSICAL-STOCK-VERIFICATION-MODULE.pdf"
                                    target="_blank"
                                  >
                                    Read More
                                    <img
                                      src="images/pdf.gif"
                                      width={16}
                                      height={16}
                                    />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td
                                  height={25}
                                  align="left"
                                  valign="middle"
                                  scope="row"
                                >
                                  Godown Address in Print Module{' '}
                                </td>
                                <td
                                  height={25}
                                  align="left"
                                  valign="middle"
                                  className="white"
                                >
                                  <a
                                    href="assets/pdf/GODOWN-ADDRESS-IN-PRINT-MODULE.pdf"
                                    target="_blank"
                                  >
                                    Read More
                                    <img
                                      src="images/pdf.gif"
                                      width={16}
                                      height={16}
                                    />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td
                                  height={25}
                                  align="left"
                                  valign="middle"
                                  scope="row"
                                >
                                  Petrol Pump Module{' '}
                                </td>
                                <td
                                  height={25}
                                  align="left"
                                  valign="middle"
                                  className="white"
                                >
                                  <a
                                    href="assets/pdf/Petrol-Pump-Module.pdf"
                                    target="_blank"
                                  >
                                    Read More
                                    <img
                                      src="images/pdf.gif"
                                      width={16}
                                      height={16}
                                    />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td
                                  height={25}
                                  align="left"
                                  valign="middle"
                                  scope="row"
                                >
                                  Stock Group Wise Item Filter{' '}
                                </td>
                                <td
                                  height={25}
                                  align="left"
                                  valign="middle"
                                  className="white"
                                >
                                  <a
                                    href="assets/pdf/STOCK-GROUP-WISE-ITEM-FILTER-MODULE.pdf"
                                    target="_blank"
                                  >
                                    Read More
                                    <img
                                      src="images/pdf.gif"
                                      width={16}
                                      height={16}
                                    />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td
                                  height={25}
                                  align="left"
                                  valign="middle"
                                  bgcolor="#FFFFFF"
                                  scope="row"
                                >
                                  1 Click Instrument Detail Module{' '}
                                </td>
                                <td
                                  height={25}
                                  align="left"
                                  valign="middle"
                                  className="white"
                                >
                                  <a
                                    href="assets/pdf/1-CLICK-INSTRUMENT-DETAIL-IN-INVOICE.pdf"
                                    target="_blank"
                                  >
                                    Read More
                                    <img
                                      src="images/pdf.gif"
                                      width={16}
                                      height={16}
                                    />
                                  </a>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
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

export default addonmodules
