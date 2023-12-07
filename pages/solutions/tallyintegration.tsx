import React from 'react'
import { Navbar } from '@components/Layout/Navbar'
import { Footer } from '@components/Layout/Footer'
import Marquee from 'react-fast-marquee'
import Accordian from '@components/Accordian'
const tallyintegration = () => {
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
                <h2 className="title">TALLY INTEGRATION</h2>
                <p className="p-3">
                  <strong>
                    Through the dedicated efforts of our valued developing unit
                    , Our Team has successfully integrated Tally ERP-9 software
                    for all major Industry types . Be it any industry, we have a
                    solution for you in Tally Systems .{' '}
                  </strong>
                </p>
                <p className="p-3">
                  <strong>
                    From Complete Projects to basic integration with other
                    software or compatible structure or any other value add on's
                    addition , Our Unit can provide you all solutions .
                  </strong>
                </p>
                <p className="p-3">
                  Tally.ERP 9 has been developed keeping in mind that some users
                  will require features and capabilities that are not delivered
                  out of the box. This calls for the ability to reach out to
                  other software applications.
                </p>
                <p className="p-3">
                  The many strengths of Tally.ERP 9 also make it an ideal
                  product for integration with other products - which calls for
                  the ability to provide the necessary APIs for read and write.
                </p>
                <p className="p-3">
                  Tally.ERP 9 as a complete business solution provides different
                  ways to integrate data. The various API's available in Tally
                  are
                  <br />
                  <img
                    style={{ padding: 10 }}
                    src="assets/images/inti_under.png"
                    width={400}
                    height={274}
                    alt="Tally Academy Glow IPS-Delhi"
                  />
                  <br />• <strong>XML</strong>
                  <br />• <strong>ODBC</strong>
                  <br />• <strong>DLL</strong>
                  <br />
                </p>
                <p className="p-3">
                  These allows seamless integration between application/database
                  in two modes
                </p>
                <strong>Online Mode</strong>
                <ul className="akm">
                  <li> Tally to Tally using Synchronisation</li>
                  <li>
                    Tally to External Application and vice versa using the
                    Interfaces Available
                  </li>
                  <li>Tally to Web Service using HTTP Interface </li>
                </ul>
                <br />
                <strong>Offline Mode</strong>
                <br />
                <p className="p-3">
                  • Tally to External Applications using Export <br />• Data
                  from External Application in XML using Import
                </p>
                <p className="p-3">
                  The various terminologies stated above are described as below
                </p>
                <strong>Synchronisation</strong>
                <p className="p-3">
                  Tally.ERP 9 to Tally.ERP 9 integration is done through
                  synchronisation. All the branches can periodically synchronise
                  their data with the head office. Data Synchronisation refers
                  to a process where data is replicated between two or more
                  locations. It enables the branch offices to send data to the
                  head office and vice versa, over a network with a dynamic IP
                  address or static IP address. Data Synchronisation flows both
                  ways, i.e., data flows from the Client to the Server and
                  vice-versa.<u>Import</u>
                  <br />
                  If the masters and transactions is available in Tally.ERP 9
                  compatibly XML format, they can be directly imported in
                  Tally.ERP 9.
                  <br />
                  <br />
                  Export
                  <br />
                  Tally.ERP 9 allows the export of reports in four standard
                  formats, viz. ASCII (Comma Delimited), Excel, HTML, and XML.
                  <br />
                  <br />
                  Tally API's
                  <strong>
                    <u>
                      <br />
                    </u>
                  </strong>
                  Tally.ERP 9 communicates with External Application using these
                  interfaces:
                  <br />
                  <br />
                  &nbsp;&nbsp;&nbsp;• <strong>XML Interface(Get/Post)</strong>
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Using this interface Tally.ERP 9
                  can behave as a Server handing XML Request from <br />
                  &nbsp;&nbsp;&nbsp;&nbsp; external Applications. Tally as a
                  Client can also send an XML Request to a Web Service
                  <br />
                  <br />
                  &nbsp;&nbsp;&nbsp;• <strong>ODBC Interface(Read Only)</strong>
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp; External Applications can retrieve
                  data from the Tally.ERP 9 database by making an <br />
                  &nbsp;&nbsp;&nbsp;&nbsp; ODBC/SQL call. In the same way
                  Tally.ERP 9 can retrieve data from External Data Source <br />
                  &nbsp;&nbsp;&nbsp;&nbsp; using an ODBC/SQL call.
                  <br />
                  <br />
                  &nbsp;&nbsp;&nbsp;• <strong>DLL</strong>
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp; The DLLs developed using other
                  application can be used to perform operations that are <br />
                  &nbsp;&nbsp;&nbsp;&nbsp; not available in the product. These
                  external DLLs can be called from Tally.ERP 9 using the <br />
                  &nbsp;&nbsp;&nbsp;&nbsp; TDL language.
                  <br />
                  <br />
                  With these capabilities you get to use Tally.ERP 9 as a single
                  window application across all software products in your
                  enterprise.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default tallyintegration