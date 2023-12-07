import React from 'react'
import { Navbar } from '@components/Layout/Navbar';
import { Footer } from '@components/Layout/Footer';

import Marquee from "react-fast-marquee";
import Accordian from '@components/Accordian';



const clientage = () => {
  return (
    <div>
      <Navbar />

      <section
        className="page-title parallaxie"
        data-bg-img="https://www.tallysolution.net/https://www.tallysolution.net/assets/images/08.jpg"
        style={{
          backgroundImage:
            'url("https://www.tallysolution.net/https://www.tallysolution.net/assets/images/08.jpg")',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center 44.79px',
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col">
              <h1>Tallyerp 9 Featured Projects</h1>
              <nav aria-label="breadcrumb" className="page-breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="index.php">Home</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Tallyerp 9 Featured Projects
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
                <h2 className="title">Customers</h2>
                <h6 className="title">Our Clients from various Industries :</h6>
                <div className="row">
                  <div className="col-md-3 col-6">
                    <div className="client-border-2">
                      <img
                        src="https://www.tallysolution.net/assets/images/logos/mmtc.jpeg"
                        width="100%"
                        alt="MMTC Limited"
                      />
                      <div className="client-heading">
                        <p>MMTC Limited</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 col-6">
                    <div className="client-border-2">
                      <img
                        src="https://www.tallysolution.net/assets/images/logos/altech.jpg"
                        width="100%"
                        alt="Altech Aluminium"
                      />
                      <div className="client-heading">
                        <p>Altech Aluminium</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 col-6">
                    <div className="client-border-2">
                      <img
                        src="https://www.tallysolution.net/assets/images/logos/pl.jpeg"
                        width="100%"
                        alt="Jindal Group (CP)"
                      />
                      <div className="client-heading">
                        <p>Pearey Lal and Sons</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 col-6">
                    <div className="client-border-2">
                      <img
                        src="https://www.tallysolution.net/assets/images/logos/maharishiAyurveda.jpeg"
                        width="100%"
                        alt="Maharishi Ayurvedic India"
                      />
                      <div className="client-heading">
                        <p>Maharishi Ayurvedic India</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 col-6">
                    <div className="client-border-2">
                      <img
                        src="https://www.tallysolution.net/assets/images/logos/contec global.jpeg"
                        width="100%"
                        alt="Jindal Group (CP)"
                      />
                      <div className="client-heading">
                        <p>Contect Global</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 col-6">
                    <div className="client-border-2">
                      <img
                        src="https://www.tallysolution.net/assets/images/logos/panasonic.jpeg"
                        width="100%"
                        alt="Panasonic India Pvt Ltd"
                      />
                      <div className="client-heading">
                        <p>Panasonic India Pvt Ltd</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 col-6">
                    <div className="client-border-2">
                      <img
                        src="https://www.tallysolution.net/assets/images/logos/classteacher.jpeg"
                        width="100%"
                        alt="Class Teacher Learning Systems (Mindshapers Tech.)"
                      />
                      <div className="client-heading">
                        <p>
                          Class Teacher Learning Systems (Mindshapers Tech.)
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 col-6">
                    <div className="client-border-2">
                      <img
                        src="https://www.tallysolution.net/assets/images/logos/PCI.jpeg"
                        width="100%"
                        alt="Press Council of India"
                      />
                      <div className="client-heading">
                        <p>Press Council of India</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 col-6">
                    <div className="client-border-2">
                      <img
                        src="https://www.tallysolution.net/assets/images/logos/continental.jpeg"
                        width="100%"
                        alt="Continental India Pvt Ltd"
                      />
                      <div className="client-heading">
                        <p>Continental India Pvt Ltd</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 col-6">
                    <div className="client-border-2">
                      <img
                        src="https://www.tallysolution.net/assets/images/logos/easybill.jpeg"
                        width="100%"
                        alt="Easy Bill"
                      />
                      <div className="client-heading">
                        <p>Easy Bill</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 col-6">
                    <div className="client-border-2">
                      <img
                        src="https://www.tallysolution.net/assets/images/logos/genex logistics.jpeg"
                        width="100%"
                        alt="Genex Logistics"
                      />
                      <div className="client-heading">
                        <p>Genex Logistics</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 col-6">
                    <div className="client-border-2">
                      <img
                        src="https://www.tallysolution.net/assets/images/logos/montain adventures.jpeg"
                        width="100%"
                        alt="Mountain Adventures India Pvt Ltd"
                      />
                      <div className="client-heading">
                        <p>Mountain Adventures India Pvt Ltd</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 col-6">
                    <div className="client-border-2">
                      <img
                        src="https://www.tallysolution.net/assets/images/logos/oscar.jpeg"
                        width="100%"
                        alt="Oscar Group – Noida"
                      />
                      <div className="client-heading">
                        <p>Oscar Group – Noida</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 col-6">
                    <div className="client-border-2">
                      <img
                        src="https://www.tallysolution.net/assets/images/logos/imphynyt.jpeg"
                        width="100%"
                        alt="Inphynyt Solutions"
                      />
                      <div className="client-heading">
                        <p>Inphynyt Solutions</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 col-6">
                    <div className="client-border-2">
                      <img
                        src="https://www.tallysolution.net/assets/images/logos/g4s.jpeg"
                        width="100%"
                        alt="G-4 Mobile Group"
                      />
                      <div className="client-heading">
                        <p>G-4 Mobile Group</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 col-6">
                    <div className="client-border-2">
                      <img
                        src="https://www.tallysolution.net/assets/images/logos/bioworld.jpeg"
                        width="100%"
                        alt="Bioworld Merchandizing"
                      />
                      <div className="client-heading">
                        <p>Bioworld Merchandizing</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 col-6">
                    <div className="client-border-2">
                      <img
                        src="https://www.tallysolution.net/assets/images/logos/sunderdiamond.jpegg"
                        width="100%"
                        alt="Sunder Jewellers"
                      />
                      <div className="client-heading">
                        <p>Sunder Jewellers</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 col-6">
                    <div className="client-border-2">
                      <img
                        src="https://www.tallysolution.net/assets/images/logos/minda.jpeg"
                        width="100%"
                        alt="Minda Group"
                      />
                      <div className="client-heading">
                        <p>Minda Group</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 col-6">
                    <div className="client-border-2">
                      <img
                        src="https://www.tallysolution.net/assets/images/logos/safeguard.jpeg"
                        width="100%"
                        alt="Safegate Airport Systems India Pvt Ltd"
                      />
                      <div className="client-heading">
                        <p>Safegate Airport Systems India Pvt Ltd</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 col-6">
                    <div className="client-border-2">
                      <img
                        src="https://www.tallysolution.net/assets/images/logos/shalcot.jpeg"
                        width="100%"
                        alt="Shalcot Mechanique Pvt Ltd"
                      />
                      <div className="client-heading">
                        <p>Shalcot Mechanique Pvt Ltd</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 col-6">
                    <div className="client-border-2">
                      <img
                        src="https://www.tallysolution.net/assets/images/logos/siemens.jpeg"
                        width="100%"
                        alt="Siemens"
                      />
                      <div className="client-heading">
                        <p>Siemens</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 col-6">
                    <div className="client-border-2">
                      <img
                        src="https://www.tallysolution.net/assets/images/logos/dalmia.jpeg"
                        width="100%"
                        alt="Dalmiya Continental"
                      />
                      <div className="client-heading">
                        <p>Dalmiya Continental</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 col-6">
                    <div className="client-border-2">
                      <img
                        src="https://www.tallysolution.net/assets/images/logos/jindal.jpg"
                        width="100%"
                        alt="Jindal Group (CP)"
                      />
                      <div className="client-heading">
                        <p>Jindal Group (CP)</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 col-6">
                    <div className="client-border-2">
                      <img
                        src="https://www.tallysolution.net/assets/images/logos/abhyas Institute.jpeg"
                        width="100%"
                        alt="Abhyas Institute"
                      />
                      <div className="client-heading">
                        <p>Abhyas Institute</p>
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

export default clientage