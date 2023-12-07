import React from 'react'
import { Navbar } from '@components/Layout/Navbar'
import { Footer } from '@components/Layout/Footer'
import Marquee from 'react-fast-marquee'
import Accordian from '@components/Accordian'
const supportcover = () => {
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
                <h2 className="title">Annual Support Cover</h2>
                <div className="row">
                  <div className="col-md-12 col-12">
                    <div className="client-border-2 mt-3 mb-3">
                      <div className="client-heading">
                        <p>
                          At GLOWIPS: We provide annual, half yearly and
                          Quarterly contracts for Tally AMC services.
                        </p>
                      </div>
                      <div className="row justify-content-center align-items-start">
                        <div className="col-md-12">
                          <p>
                            Through Support by experts get the most out of the
                            software you rely on . With Our Varied Plans, select
                            the one that suits you the most. We have Tally AMC
                            for specific categories along with detailed plans:
                          </p>
                          <ul className="ms-5">
                            <li>Synchronization/Implementations AMC</li>
                            <li>Customization AMC</li>
                            <li>Complete Coverage</li>
                          </ul>
                          <p>
                            Get Tally Annual Support Cover from the people who
                            know Tally best! Starting with as low as Rs 4500 for
                            full term.
                          </p>
                          <p>
                            Whether you are new to Tally or an experienced user,
                            and regardless of the size of your organization,
                            GLOWIPS has the right Annual Support Cover Plan that
                            work for you.
                          </p>
                          <p>
                            The following are the services which are included in
                            the Tally AMC services:{' '}
                          </p>
                          <ul className="ms-5">
                            <li>Tally Upgradation</li>
                            <li>Tally Password Recovery</li>
                            <li>Tally Data Recovery</li>
                            <li>Tally Debugging</li>
                            <li>Tally Training on Latest Features</li>
                            <li>Tally Customization AMC</li>
                            <li>Tally ERP, .Net Training</li>
                            <li>Tally at Site Solutions</li>
                            <li>Tally Franchise Supporting</li>
                            <li>
                              Tally Up-Dations on SMS/Email from Our Team.
                            </li>
                          </ul>
                          <p>
                            Many other basic and advanced / technical supporting
                            services are included in the AMC contract.{' '}
                          </p>
                          <p>
                            For more details call on our offical No.: +91
                            9582827928.{' '}
                          </p>
                          <p>
                            GLOWIPS-Authorized Tally Solution, Sales And Service
                            Partners - Delhi-NCR(India){' '}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="client-border-2 mt-3 mb-3">
                      <div className="client-heading">
                        <p>Alpha Plan</p>
                      </div>
                      <p>
                        A must for any multilocation company where regular
                        synchronization of data from branches or factories to
                        the head office is highly important for their operation.
                        Apart from our regular services we are ready for
                        specific service demand and we promise to deliver the
                        same within your time and budget.
                      </p>
                      <ul className="ms-5">
                        <li>Unlimited Remote Support</li>
                        <li>Unlimited Email Support.</li>
                        <li>Unlimited Telephone Support.</li>
                        <li>Onsite visit on request.</li>
                        <li>Unlimited support through Tally Support Centre.</li>
                      </ul>
                    </div>
                    <div className="client-border-2 mt-3 mb-3">
                      <div className="client-heading">
                        <p>Beta Plan</p>
                      </div>
                      <p>
                        A good choice for a company with a multiuser environment
                        looking forward to enhance the value of the software.
                        The changing staff need to be updated and give in-depth
                        knowledge to help them become proficient with Tally and
                        keep the software running smoothly.
                      </p>
                      <ul className="ms-5">
                        <li>Unlimited Remote Support</li>
                        <li>Unlimited Email Support.</li>
                        <li>Unlimited Telephone Support.</li>
                        <li>Onsite visit on request.</li>
                        <li>Unlimited support through Tally Support Centre.</li>
                      </ul>
                    </div>
                    <div className="client-border-2 mt-3 mb-3">
                      <div className="client-heading">
                        <p>Gamma Plan</p>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <p>
                            Well suited for single user customers who require
                            instant help on telephone and an occasional visit
                            for troubleshooting.
                          </p>
                        </div>
                        <div className="col-md-6">
                          <ul className="ms-5">
                            <li>Unlimited Remote Support</li>
                            <li>Unlimited Email Support.</li>
                            <li>Unlimited Telephone Support.</li>
                            <li>Onsite visit on request.</li>
                            <li>
                              Unlimited support through Tally Support Centre.
                            </li>
                          </ul>
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

export default supportcover