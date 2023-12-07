import React from 'react'
import { Navbar } from '@components/Layout/Navbar';
import { Footer } from '@components/Layout/Footer';

import Marquee from "react-fast-marquee";
import Accordian from '@components/Accordian';


const developer = () => {
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
              <h1>About Tally Erp9 Software</h1>
              <nav aria-label="breadcrumb" className="page-breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="index.php">Home</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    About Tally Erp9 Softwarex
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
                  Tally Developer - The Development Platform of Tally.ERP 9
                </h2>
                <p className="p-3">
                  The language used to build Tally.ERP 9 is called TDL - Tally
                  Definition Language, briefly touched upon in Internal
                  Architecture &amp; Design.
                </p>
                <p className="p-3">
                  As a Tally Service Partner, a Tally Integrator, an internal IT
                  'shop' at a customer location or a free lancer developing
                  extensions to Tally.ERP 9, we make available Tally.Developer
                  9, an Integrated Development Environment (IDE) along with the
                  full TDL source code.
                </p>
                <p className="p-3">
                  TDL has been designed to provide the following features:
                </p>
                <div className="row">
                  <div className="col-md-12 col-12">
                    <div className="client-border-2 mt-3 mb-3">
                      <div className="client-heading">
                        <p>Rapid Development</p>
                      </div>
                      <p className="p-3">
                        TDL is a language based on definitions. A definition
                        language provides the users with 'Definitions' that can
                        be used to specify the task to be performed. It is
                        possible to reuse the existing definitions and deploy
                        applications quickly. This is a language meant for rapid
                        development. It is possible to develop complex reports
                        within minutes. User can extend the default
                        functionalities of the product by writing only a few
                        lines of code.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-12 col-12">
                    <div className="client-border-2 mt-3 mb-3">
                      <div className="client-heading">
                        <p>
                          Action Driven Language with Procedural Capabilities
                        </p>
                      </div>
                      <p className="p-3">
                        TDL is an Action Driven language where the programmer
                        can only control as to what happens when a particular
                        event takes place. The action thus triggered can either
                        be a platform defined action or an Action created by TDL
                        programmer using User Defined Functions. The fundamental
                        aspects of conditional evaluation and looping have been
                        introduced into the language. The non-procedural
                        elements are largely towards presentation layers and
                        data gathering. The procedural elements can be used for
                        flow control, computation and object data manipulation.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-12 col-12">
                    <div className="client-border-2 mt-3 mb-3">
                      <div className="client-heading">
                        <p>Multiple Output Capability</p>
                      </div>
                      <p className="p-3">
                        Using the same language it is possible to output to
                        multiple output devices and formats .Whenever an output
                        is generated this can be displayed on the screen,
                        printed ,transferred to a file in particular format,
                        mailed or transferred to a webpage using Http protocol.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-12 col-12">
                    <div className="client-border-2 mt-3 mb-3">
                      <div className="client-heading">
                        <p>Data Management Capability</p>
                      </div>
                      <p className="p-3">
                        Tally follows a hierarchical object oriented data
                        structure. TDL provides the capability of creating and
                        manipulating these objects with ease. Apart from the
                        predefined objects user can also store and manipulate
                        data as required by him.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-12 col-12">
                    <div className="client-border-2 mt-3 mb-3">
                      <div className="client-heading">
                        <p>Integration Capability</p>
                      </div>
                      <p className="p-3">
                        To meet the challenges of business environment it
                        becomes absolutely mandatory to share information
                        seamlessly across applications. Integration becomes a
                        crucial factor in avoiding the duplication of data
                        entry. The available Tally API's ODBC, XML and DLL allow
                        integration between
                      </p>
                      <p className="p-3">
                        Tally to Tally using Synchronisation
                      </p>
                      <p className="p-3">
                        Tally to External Application and vice versa using the
                        Interfaces Available
                      </p>
                      <p className="p-3">
                        Tally to Web Service using HTTP Interface
                      </p>
                      <p className="p-3">
                        Tally to External Applications using Export
                      </p>
                      <p className="p-3">
                        Data from External Application in XML using Import
                      </p>
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

export default developer