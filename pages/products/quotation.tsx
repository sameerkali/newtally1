import React from 'react'
import { Navbar } from '@components/Layout/Navbar';
import { Footer } from '@components/Layout/Footer';

import Marquee from "react-fast-marquee";
import Accordian from '@components/Accordian';

const quotation = () => {
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
          backgroundPosition: 'center 120.63px',
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col">
              <h1>
                Glow IPS Tally ERP.9 Sales &amp; Service Partener Delhi/NCR
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
          </div>
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
                <h2 className="title">
                  Tally Software/Upgradation/Rental Quotes
                </h2>
                <div className="row">
                  <div className="col-md-12 col-12">
                    <div className="client-border-2 mt-3 mb-3">
                      <div className="client-heading">
                        <p>Tally Package:</p>
                      </div>
                      <div className="row justify-content-center align-items-center">
                        <div className="col-md-9">
                          <table width="100%" className="p-2">
                            <tbody>
                              <tr>
                                <td className="p-2">Tally.ERP 9 Silver</td>
                                <td className="p-2">18,000.00 </td>
                              </tr>
                              <tr>
                                <td className="p-2">Tally.ERP 9 Gold </td>
                                <td className="p-2">54,000.00</td>
                              </tr>
                              <tr>
                                <td className="p-2">
                                  Tally ERP-9 Auditor Edition
                                </td>
                                <td className="p-2">10,800.00</td>
                              </tr>
                              <tr>
                                <td className="p-2">Tally Shoper 9 Silver</td>
                                <td className="p-2">18,000.00</td>
                              </tr>
                              <tr>
                                <td className="p-2">Tally Shoper 9 Gold</td>
                                <td className="p-2">54,000.00</td>
                              </tr>
                              <tr>
                                <td className="p-2">Tally Shoper 9 Diamond</td>
                                <td className="p-2">2,70,000.00</td>
                              </tr>
                              <tr>
                                <td className="p-2">
                                  Tally ERP 9 Silver (International)
                                </td>
                                <td className="p-2">
                                  $630($ varies, details as per 1/6/11)
                                </td>
                              </tr>
                              <tr>
                                <td className="p-2">
                                  Tally ERP-9 Gold (International)
                                </td>
                                <td className="p-2">$1890</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <div className="col-md-3">
                          <img
                            src="assets/images/Tally_erp_quotation_glowips_delhi.jpg"
                            alt=""
                            style={{ filter: 'invert(0)' }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12 col-12">
                    <div className="client-border-2 mt-3 mb-3">
                      <div className="client-heading">
                        <p>Tally Package for Rent:</p>
                      </div>
                      <div className="row justify-content-center align-items-center">
                        <div className="col-md-9">
                          <table width="100%" className="p-2">
                            <tbody>
                              <tr>
                                <td className="p-2">
                                  Tally.ERP 9 Silver on rent (Quarterly){' '}
                                </td>
                                <td className="p-2">1,800.00 </td>
                              </tr>
                              <tr>
                                <td className="p-2">
                                  Tally.ERP 9 Gold on rent (Quarterly){' '}
                                </td>
                                <td className="p-2">5,400.00 </td>
                              </tr>
                              <tr>
                                <td className="p-2">
                                  Tally Shoper 9 Silver on rent (Quarterly){' '}
                                </td>
                                <td className="p-2">1,800.00 </td>
                              </tr>
                              <tr>
                                <td className="p-2">
                                  Tally Shoper 9 Gold on rent (Quarterly){' '}
                                </td>
                                <td className="p-2">5,400.00 </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12 col-12">
                    <div className="client-border-2 mt-3 mb-3">
                      <div className="client-heading">
                        <p>Tally Upgrade:</p>
                      </div>
                      <div className="row justify-content-center align-items-center">
                        <div className="col-md-12">
                          <table width="100%" className="p-2">
                            <tbody>
                              <tr>
                                {' '}
                                <td className="p-2">
                                  Tally 9 Gold to ERP-9 Gold
                                </td>{' '}
                                <td className="p-2">10,800.00</td>
                              </tr>
                              <tr>
                                {' '}
                                <td className="p-2">
                                  Tally 9 Silver to Tally ERP-9 Silver{' '}
                                </td>{' '}
                                <td className="p-2">3,600.00</td>
                              </tr>
                              <tr>
                                {' '}
                                <td className="p-2">
                                  Tally 7.2 Silver to Tally.ERP 9 Silver
                                </td>{' '}
                                <td className="p-2"> 7,200.00</td>
                              </tr>
                              <tr>
                                {' '}
                                <td className="p-2">
                                  Tally 7.2 Gold to Tally.ERP 9 Gold
                                </td>{' '}
                                <td className="p-2"> 21,600.00</td>
                              </tr>
                              <tr>
                                {' '}
                                <td className="p-2">
                                  Tally 6.3 Gold to Tally.ERP 9 Gold{' '}
                                </td>
                                <td className="p-2"> 21,600.00</td>
                              </tr>
                              <tr>
                                {' '}
                                <td className="p-2">
                                  Tally 9/Tally.ERP 9 Silver To Tally.ERP 9 Gold{' '}
                                </td>
                                <td className="p-2"> 36,000.00</td>
                              </tr>
                              <tr>
                                {' '}
                                <td className="p-2">
                                  Tally 7.2 Single to Tally ERP-9 Gold{' '}
                                </td>
                                <td className="p-2">43,200.00</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12 col-12">
                    <div className="client-border-2 mt-3 mb-3">
                      <div className="client-heading">
                        <p>Tally.NET Subscription:</p>
                      </div>
                      <div className="row justify-content-center align-items-center">
                        <div className="col-md-12">
                          <table width="100%" className="p-2">
                            <tbody>
                              <tr>
                                <td className="p-2">
                                  Tally.NET Subscription - Silver{' '}
                                </td>{' '}
                                <td className="p-2">3,600.00</td>{' '}
                              </tr>
                              <tr></tr>
                              <tr>
                                {' '}
                                <td className="p-2">
                                  Tally.NET Subscription - Gold{' '}
                                </td>{' '}
                                <td className="p-2">10,800.00</td>{' '}
                              </tr>
                              <tr></tr>
                              <tr>
                                {' '}
                                <td className="p-2">
                                  Tally.NET Auditor 1 Year Subscription{' '}
                                </td>{' '}
                                <td className="p-2"> 5,400.00</td>{' '}
                              </tr>
                              <tr></tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="text-justify pt-3 pb-3">
                    {' '}
                    The Quotes of Software's, .NET, Upgradations are provided
                    with complete services **. For a detailed Quote please mail
                    us at: -
                    <a href="mailto:tallyproducts@gmail.com">
                      tallyproducts@gmail.com
                    </a>
                  </p>
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

export default quotation