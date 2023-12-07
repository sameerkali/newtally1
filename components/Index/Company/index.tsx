import { FC } from 'react'
import Accordian from '../../Accordian'

export const Company: FC = () => {
  return (
    <>
      <section
        className="page-title parallaxie"
        data-bg-img="assets/images/08.jpg"
        style={{
          backgroundImage: 'url("assets/images/08.jpg")',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center 39.435px',
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
                <h2 className="title">Tally.ERP 9</h2>
                <div className="row">
                  <div className="col-md-12 col-12">
                    <div className="client-border-2 mt-3 mb-3">
                      <div className="client-heading">
                        <p>Tally.ERP 9</p>
                      </div>
                      <p className="p-3">
                        At Tally, we have a hard-earned reputation for
                        empowering businesses with stable, effective software
                        products and Tally.ERP 9 takes this further. Tally.ERP 9
                        has all the features required for high-performance
                        business management.
                      </p>
                      <a
                        className="p-3 d-block"
                        href="about-tally-erp9-software.php"
                      >
                        Read More &gt;&gt;
                      </a>
                    </div>
                  </div>
                  <div className="col-md-12 col-12">
                    <div className="client-border-2 mt-3 mb-3">
                      <div className="client-heading">
                        <p>Tally.ERP 9 - Auditors' Edition</p>
                      </div>
                      <p className="p-3">
                        A growing economy, widening tax net and increasing
                        compliance requirements make an Auditor's role critical.
                        For a Chartered Accountant like yourself, this could
                        mean time is at a premium. Travel and people costs
                        escalate by the day. Manpower is in short supply.
                        Instead of an ideal level workload across the year, you
                        have short periods of intense work. You can turn all
                        this around. Presenting Tally.ERP 9 - Auditors' Edition,
                        a powerful tool exclusively for CAs...
                      </p>
                      <a
                        className="p-3 d-block"
                        href="about-tally-erp9-Auditor-edition.php"
                      >
                        Read More &gt;&gt;
                      </a>
                    </div>
                  </div>
                  <div className="col-md-12 col-12">
                    <div className="client-border-2 mt-3 mb-3">
                      <div className="client-heading">
                        <p>Tally.ERP 9 - Rental</p>
                      </div>
                      <p className="p-3">
                        With over 90% (estimated) businesses in India using
                        Tally.ERP 9 (and earlier versions), there falls on us a
                        tremendous responsibility to further ease availability
                        and affordability. Your feedback has reached us - We
                        hear you!...
                      </p>
                      <a
                        className="p-3 d-block"
                        href="tally-erp9-software-on-rent.php"
                      >
                        Read More &gt;&gt;
                      </a>
                    </div>
                  </div>
                  <div className="col-md-12 col-12">
                    <div className="client-border-2 mt-3 mb-3">
                      <div className="client-heading">
                        <p>Tally Shoper 9</p>
                      </div>
                      <p className="p-3">
                        When it comes to retail/point-of-sale (POS) business
                        management, there's very little choice beyond Shoper 9.
                        A culmination of intensive R&amp;D, this mature,
                        ready-to-go product which incorporates the smartest
                        ideas, provides quick implementation and intuitive
                        usage. A host of retail verticals rely on Shoper 9. It
                        can scale and will provide
                        'information-at-the-fingertips' to managers of chain
                        stores. The affordable Shoper 9-the latest product from
                        Tally-can be adapted to meet unique requirements and
                        will save time, increase accuracy and provide real time
                        reports...
                      </p>
                      <a
                        className="p-3 d-block"
                        href="Tally-Shoper-features-details.php"
                      >
                        Read More &gt;&gt;
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
