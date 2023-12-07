import React, { useState } from 'react'
import { Navbar } from '@components/Layout/Navbar'
import { Footer } from '@components/Layout/Footer'
import Hero from '@components/Index/Hero'

import Card from 'react-bootstrap/Card'

// function ImageCard({ imageSrc, text }) {
//   return (
//     <Card style={{ width: '22rem', padding:'2rem'}}>
//       <Card.Img variant="top" src={imageSrc} style={{height:'18rem'}} />
//       <Card.Body>
//         <Card.Title>{text}</Card.Title>
//         <Card.Text></Card.Text>
//       </Card.Body>
//     </Card>
//   )
// }

function ImageCard({ imageSrc, text }) {
  const [isHovered, setIsHovered] = useState(false)

  const cardStyle = {
    width: '22rem',
    height: '26rem',
    padding: '2rem',
    transition: 'transform 0.3s ease-in-out',
    transform: isHovered ? 'scale(1.05)' : 'scale(1)',
    boxShadow: isHovered ? '0 4px 8px rgba(0, 0, 0, 0.1)' : 'none',
  }

  const imageStyle = {
    height: '18rem',
  }

  return (
    <Card
      className="m-3"
      style={cardStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Card.Img variant="top" src={imageSrc} style={imageStyle} />
      <Card.Body>
        <Card.Title>{text}</Card.Title>
        <Card.Text></Card.Text>
      </Card.Body>
    </Card>
  )
}

const tallyinternational = () => {
  const handleSubmit = (event) => {
    console.log(event)
  }
  const cards = [
    {
      img: '/images/111.jpg',
      text: 'Dedicated Solutions',
    },
    {
      img: '/images/22.jpg',
      text: 'Tally ERP Trainings',
    },
    {
      img: '/images/33.jpg',
      text: 'Developing Solutions',
    },
    {
      img: '/images/122.jpg',
      text: 'ERP Development',
    },
    {
      img: '/images/5.jpg',
      text: 'Implementing Tally ERP',
    },
    {
      img: '/images/66.jpg',
      text: 'Seamless Integration',
    },
    {
      img: '/images/77.jpg',
      text: 'Use Tally Globally',
    },
    {
      img: '/images/88.jpg',
      text: 'Complete Tally Services',
    },
    {
      img: '/images/99.jpg',
      text: 'Solutions For All Industry',
    },
    {
      img: '/images/100.jpg',
      text: '24*7 Support',
    },
    {
      img: '/images/111.jpg',
      text: 'Synchronizing Globally',
    },
    {
      img: '/images/44.jpg',
      text: 'Tally ERP-9 Packages',
    },
  ]

  const cards2 = [
    {
      img: '/images/DEVELOPER.jpg',
      text: 'DEVELOPER',
    },
    {
      img: '/images/director.jpg',
      text: 'DIRECTOR',
    },
    {
      img: '/images/ENTERPRISE-CONSULTANTS.jpg',
      text: 'ENTERPRISE CONSULTANTS',
    },

    {
      img: '/images/IMPLEMENT.jpg',
      text: 'IMPLEMENT',
    },
    {
      img: '/images/integrate-seamlessly.jpg',
      text: 'Integrate Seamlessly',
    },
    {
      img: '/images/JOIN-US.jpg',
      text: 'JOIN US',
    },
    {
      img: '/images/SUPPORT.jpg',
      text: 'SUPPORT',
    },
    {
      img: '/images/TRAINING.jpg',
      text: 'TRAINING',
    },
  ]

  const cards3 = [
    {
      img: '/images/11.jpg',
      text: 'Manage School Accounting',
    },
    {
      img: '/images/22.jpg',
      text: 'All Industry Specific Solutions',
    },
    {
      img: '/images/33.jpg',
      text: 'A Module For Every Org.',
    },
    {
      img: '/images/44.jpg',
      text: 'Implement Your Tally ERP 9.',
    },
  ]
  return (
    <>
      <Navbar />
      <Hero />
      <section className="services theme-bg">
        <div className="container">
          <div className="row">
            <div className="section-title">
              <h1 className="title text-center">Our Work</h1>
              <h5 className="text-rgba">
                Our Team endeavours to meticuolously understand the nuicense of
                financial misdemers faced by common people in various industry
                sects . The Tally ERP-9 Software has considerably solved big
                time issues in our cross country run . Being An Official
                Solution Unit , we have worked with MNC's in Europe , Africa
                &amp; Uk . Our dedicated team has provided customized Solutions
                to the enterprises using the Tally Platform . Tally ERP-9
                Software has been most widely used financial software in India
                &amp; gaining international presence through advance
                developments and country specific work-approch . With expats in
                many countries &amp; having International Offices, We Aim to
                partner with our clients by building and nurturing holistic
                approch towards work. We believe and work by ethics and are
                driven by principle-led policies . Our Team Members strive to
                achieve sucess on moral &amp; fair grounds , giving the right
                solution at the right moment .
              </h5>
            </div>
          </div>
        </div>
      </section>

      <section className=" pt-0 z-index-1 mt-80-mobile" id="service-form">
        {/* cards section */}
        <div className="container">
          <div className="row">
            {cards.map((card) => {
              return <ImageCard imageSrc={card.img} text={card.text} />
            })}
          </div>
        </div>
      </section>

      <section className="p-0">
        <div className="container-fluid p-0">
          <div className="row">
            <div className="col-md-12">
              <img src="images/1.jpg" alt="" width="100%" />
            </div>
          </div>
        </div>
      </section>

      <section className="services theme-bg" id="about">
        <div className="container">
          <div className="row">
            <div className="section-title">
              <h4 className="title text-center mt-4 d-block">About Us</h4>
              <h5 className="text-rgba">
                We are Trusted , we are experienced . Once At the Helm , we
                assure to take you on a fruitful journey .
              </h5>
            </div>
            <div className="col-md-6">
              <h5 className="text-rgba">
                We are Professionals in Enterprise Consulting and Tally ERP
                Implementations catering to customers across the globe. We
                assist our customers in advancing their financial processes by
                organizing plans , regularizing trainings &amp; developing
                software to solve or re-structure the financial structure .
              </h5>
              <h5 className="text-rgba">
                Our Team with a rich experience in the Implementation &amp;
                Development of Enterprise business solutions on Tally enterprise
                framework - offers a complete solution, which includes
                consultancy, design, development, implementation and training.
                We enhance value to our customers by bringing to the table an
                excellent understanding of business processes.
              </h5>
              <h5 className="text-rgba">
                At GLOWIPS we follow a well-defined methodology that enables
                customers to exploit the benefits of Tally ERP quickly, and in
                most cost-effective manner possible. The secret of GLOWIPS
                success lies in its flexibility, responsiveness to customers,
                encouragement and reward to employees and well satisfied
                business partners.
              </h5>
            </div>
            <div className="col-md-6">
              <h5 className="text-rgba">
                GLOWIPS has an excellent track record in IT consultancy and
                services, serving customers in varied sectors such as Servicing
                , Manufacturing, Bulk Drugs &amp; Chemicals, Engineering,
                Packaging, Pharmaceuticals, Distribution, NGO , Trading &amp;
                Government , etc . With our Experienced Team Members , we
                Provide Ready Solutions for your business . Whatever be your
                nature of Business , we have a Solution for flawless finacial
                management . Our Team has catered Clients , Govt Bodies ,
                Industries and Corporate Enterprises worldwide . Sp mention to
                countries where we have strong presence are Ghana , Nigeria ,
                Niger , Burundi , Bangladesh , United Kingdom , Dubai , United
                States , Bharain , etc .
              </h5>
              <h5 className="text-rgba">
                To Mention our Specialized Services in Tally ERP- 9 Solutions .
              </h5>
              <h5 className="text-rgba">Tally Customization.</h5>
              <h5 className="text-rgba">Tally Software Solutions.</h5>
              <h5 className="text-rgba">
                Tally Corpotate Trainings Worldwide.
              </h5>
              <h5 className="text-rgba">
                Tally Synchronization Services to Connect Accounting across
                Borders.
              </h5>
              <h5 className="text-rgba">
                Tally Integration with any other Softwares like SAP , busy ,
                quickbooks , etc.
              </h5>
              <h5 className="text-rgba">
                Tally Vertical Solutions for Specific Businesses.
              </h5>
              <h5 className="text-rgba">Tally Upgradation.</h5>
              <h5 className="text-rgba">
                Complete Tally ERP-9 Technical Solutions.
              </h5>
              <h5 className="text-rgba">Tally ERP 9 AMC for Tally Users.</h5>
            </div>
          </div>
          <div className="row">
            <div className="section-title">
              <h4 className="title text-center mt-4 d-block">
                WHAT CAN WE HELP WITH
              </h4>
            </div>
            <div className="col-md-3">
              <h5 className="text-rgba">- Enterprise Consulting</h5>
              <h5 className="text-rgba">- Tally ERP-9 Implementation</h5>
              <h5 className="text-rgba">- Corporate Finance</h5>
              <h5 className="text-rgba">
                - Tally Software Sales &amp; Service
              </h5>
            </div>
            <div className="col-md-3">
              <h5 className="text-rgba">- ERP Development</h5>
              <h5 className="text-rgba"> - Tally ERP Customization</h5>
              <h5 className="text-rgba"> - Software Designing &amp; Web Sol</h5>
              <h5 className="text-rgba">
                {' '}
                - Integrating Tally &amp; any other package
              </h5>
            </div>
            <div className="col-md-3">
              <h5 className="text-rgba">- Tally Data Solutions</h5>
              <h5 className="text-rgba">- Book Keeping &amp; Audit Services</h5>
              <h5 className="text-rgba">- Tally ERP-9 Corporate Trainings</h5>
              <h5 className="text-rgba">- Tally Remote Implementation</h5>
            </div>
            <div className="col-md-3">
              <h5 className="text-rgba"> - Tally ERP SYnchronizations</h5>
              <h5 className="text-rgba"> - Annual Support &amp; Solutions</h5>
              <h5 className="text-rgba"> - Customizing Modules</h5>
              <h5 className="text-rgba"> - Country Wise Implementation</h5>
            </div>
          </div>
          {/* old card design */}
          {/* <div className="row">
            <div className="section-title">
              <h4 className="title text-center mt-4 d-block">
                Our Colourful Team Comprises
              </h4>
            </div>
            <div className="col-md-3">
              <div className="international-service">
                <img
                  src="assets/files/DEVELOPER-FRONT.jpg"
                  alt=""
                  width="100%"
                />
                <div className="international-service-item">
                  <img src="assets/files/DEVELOPER.jpg" alt="" width="100%" />
                  <h1>DEVELOPER</h1>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="international-service">
                <img src="assets/files/director.jpg" alt="" width="100%" />
                <div className="international-service-item">
                  <img src="assets/files/Director.jpg" alt="" width="100%" />
                  <h1>Director</h1>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="international-service">
                <img
                  src="assets/files/ENTERPRISE-CONSULTANTS-FRONT.jpg"
                  alt=""
                  width="100%"
                />
                <div className="international-service-item">
                  <img
                    src="assets/files/ENTERPRISE-CONSULTANTS.jpg"
                    alt=""
                    width="100%"
                  />
                  <h1>ENTERPRISE CONSULTANTS</h1>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="international-service">
                <img
                  src="assets/files/IMPLEMENT-FRONT.jpg"
                  alt=""
                  width="100%"
                />
                <div className="international-service-item">
                  <img src="assets/files/IMPLEMENT.jpg" alt="" width="100%" />
                  <h1>IMPLEMENT</h1>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="international-service">
                <img
                  src="assets/files/INTEGRATE-FRONT.jpg"
                  alt=""
                  width="100%"
                />
                <div className="international-service-item">
                  <img
                    src="assets/files/integrate-seamlessly.jpg"
                    alt=""
                    width="100%"
                  />
                  <h1>integrate seamlessly</h1>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="international-service">
                <img src="assets/files/JOIN-US-FRONT.jpg" alt="" width="100%" />
                <div className="international-service-item">
                  <img src="assets/files/JOIN-US.jpg" alt="" width="100%" />
                  <h1>JOIN-US</h1>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="international-service">
                <img src="assets/files/support-front.jpg" alt="" width="100%" />
                <div className="international-service-item">
                  <img src="assets/files/SUPPORT.jpg" alt="" width="100%" />
                  <h1>Support</h1>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="international-service">
                <img
                  src="assets/files/TRAINING-FRONT.jpg"
                  alt=""
                  width="100%"
                />
                <div className="international-service-item">
                  <img src="assets/files/TRAINING.jpg" alt="" width="100%" />
                  <h1>TRAINING</h1>
                </div>
              </div>
            </div>
          </div> */}

          {/* add new cards here */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gridGap: '10px',
              justifyContent: 'center',
            }}
          >
            {cards2.map((card, index) => (
              <div key={index} style={{ width: '100%' }}>
                <ImageCard imageSrc={card.img} text={card.text} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pt-0">
        <div className="container-fluid p-0">
          <div className="row">
            <div className="col-md-12">
              <img src="images/2.jpg" alt="" width="100%" />
            </div>
          </div>
        </div>
      </section>

      <section className="pt-0" id="expertise">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-title">
                <h4 className="title text-center mt-4 d-block">Expertise</h4>
                <h5 className="text-000">
                  Dedication is our Mantra . We spend long hard hours in
                  understanding our clients requirement , before concluding on
                  the work-flow . Our Analytic team ensures that you get the
                  exact layout of your financial structure . We mantain complete
                  privacy in our dealing with every client . Our Developments in
                  Tally ERp-9 have been sucessfully implemented in India and
                  Abroad , we work with integrity &amp; passion .
                </h5>
              </div>
            </div>
            <div className="col-md-3">
              <h4>
                <a>Strategy</a>
              </h4>
              <span className="d-block">Designing The Layout</span>
              <span className="d-block">Manifesting Ideas</span>
              <span className="d-block">Strategic Country Wise-Module</span>
              <span className="d-block">Financial Implications</span>
              <span className="d-block">Statutory Compliances</span>
              <span className="d-block">Developing a Time Table</span>
              <span className="d-block">Information Architecture</span>
            </div>
            <div className="col-md-3">
              <h4>
                <a>Innovation</a>
              </h4>
              <span className="d-block">Out of the Box</span>
              <span className="d-block">Conceptual Ideas</span>
              <span className="d-block">Fitting Loopholes</span>
              <span className="d-block">Unique MIS</span>
              <span className="d-block">Effective Brainstorming</span>
              <span className="d-block">Calculative Risks</span>
              <span className="d-block">Creating Financial Structures</span>
            </div>
            <div className="col-md-3">
              <h4>
                <a>Development</a>
              </h4>
              <span className="d-block">Module Wise developments</span>
              <span className="d-block">Target Customizations</span>
              <span className="d-block">Advance Customizations</span>
              <span className="d-block">Developing Verticle Solutions</span>
              <span className="d-block">Industrial Developments</span>
              <span className="d-block">Case Studies</span>
              <span className="d-block">ERP Development</span>
            </div>
            <div className="col-md-3">
              <h4>
                <a>Implementation</a>
              </h4>
              <span className="d-block">Incremental Implementation</span>
              <span className="d-block">
                Implementing Tally ERP-9 Project Wise
              </span>
              <span className="d-block">Guided Implementations</span>
              <span className="d-block">Currency Mode Implementations</span>
              <span className="d-block">Implementing Developments</span>
              <span className="d-block">ERP Implementations</span>
            </div>
            <div className="col-md-12">
              <div className="section-title">
                <h4 className="title text-center mt-4 d-block">
                  Brands &amp; Clients
                </h4>
              </div>
            </div>
            <div className="col-md-12">
              <div className="row justify-content-between mt-4 mb-4">
                <div className="col-md-2">
                  <img
                    src="images/e63174ff4ac3f2805508dfcf503959be.png"
                    alt=""
                    width="100%"
                  />
                </div>
                <div className="col-md-2">
                  <img
                    src="assets/files/large/b485ba885a40d0e37ede709963f831f9.png"
                    alt=""
                    width="100%"
                  />
                </div>
                <div className="col-md-2">
                  <img
                    src="images/10c05092570ef0208eaab3180a48af84.png"
                    alt=""
                    width="100%"
                  />
                </div>
                <div className="col-md-2">
                  <img
                    src="images/db709e9f9a3cb6e01887f9bd55878e38.png"
                    alt=""
                    width="100%"
                  />
                </div>
              </div>
              <div className="row justify-content-between mt-4 mb-4">
                <div className="col-md-2">
                  <img
                    src="images/af52c79df6fa319d6df2baba08c9563c.png"
                    alt=""
                    width="100%"
                  />
                </div>
                <div className="col-md-2">
                  <img
                    src="images/539110fe85b7f0555cef6fa4b0051270.png"
                    alt=""
                    width="100%"
                  />
                </div>
                <div className="col-md-2">
                  <img
                    src="assets/files/large/479290bc9b10ec7ba74436373409761d.png"
                    alt=""
                    width="100%"
                  />
                </div>
                <div className="col-md-2">
                  <img
                    src="images/020ea635ccce1cb572c0709e5a44c173.png"
                    alt=""
                    width="100%"
                  />
                </div>
              </div>
              <div className="row justify-content-between mt-4 mb-4">
                <div className="col-md-2">
                  <img
                    src="images/38a438ea8e18b5aec68697042955c75c.png"
                    alt=""
                    width="100%"
                  />
                </div>
                <div className="col-md-2">
                  <img
                    src="assets/files/large/28f5ec8650cbc04dc2726ae745ffb508.png"
                    alt=""
                    width="100%"
                  />
                </div>
                <div className="col-md-2">
                  <img
                    src="images/c008d8d8c8bef6a0296214cbabd8a4df.png"
                    alt=""
                    width="100%"
                  />
                </div>
                <div className="col-md-2">
                  <img
                    src="images/ea0f576ce1e35de38e167cc1d2c45713.png"
                    alt=""
                    width="100%"
                  />
                </div>
              </div>
              <div className="row justify-content-between mt-4 mb-4">
                <div className="col-md-2">
                  <img
                    src="images/dfa01504bba9426883c9f3c54adf194b.png"
                    alt=""
                    width="100%"
                  />
                </div>
                <div className="col-md-2">
                  <img
                    src="images/43eacce3528f61fcb3c2ea500a36c412.png"
                    alt=""
                    width="100%"
                  />
                </div>
                <div className="col-md-2">
                  <img
                    src="images/df99fb80629a3d878eeb0fb05528bcd4.png"
                    alt=""
                    width="100%"
                  />
                </div>
                <div className="col-md-2">
                  <img
                    src="images/b28c58665ef70c4a551cacbb78851148.png"
                    alt=""
                    width="100%"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-0">
        <div className="container-fluid p-0">
          <div className="row">
            <div className="col-md-12">
              <img src="assets/files/3.jpg" alt="" width="100%" />
            </div>
          </div>
        </div>
      </section>

      <section className="pt-0" id="updates">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-title">
                <h4 className="title text-center mt-4 d-block">UPDATES</h4>
                <h5 className="text-000">
                  TALLY ERP-9 FINANCIAL ACCOUNTING PROJECTS
                </h5>
              </div>
            </div>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                gridGap: '10px',
                justifyContent: 'center',
              }}
            >
              {cards3.map((card, index) => (
                <div key={index} style={{ width: '100%' }}>
                  <ImageCard imageSrc={card.img} text={card.text} />
                </div>
              ))}
            </div>
            {/* <div className="col-md-3">
              <a href="http://tallysolution.net/School and college accounts management - by Glowips.pdf">
                <div className="international-service">
                  <img src="assets/images/addons/1.jpg" alt="" width="100%" />
                  <div className="international-service-item">
                    <img
                      src="assets/images/addons/11.jpg"
                      alt=""
                      width="100%"
                    />
                    <h1>Manage School Accounting</h1>
                    <h4>Across Globe</h4>
                  </div>
                </div>
              </a>
            </div> */}
            {/* <div className="col-md-3">
              <a href="http://tallysolution.net/Tally-Customization-Solutions-Delhi-NCR-India-International.php">
                <div className="international-service">
                  <img src="assets/images/addons/2.jpg" alt="" width="100%" />
                  <div className="international-service-item">
                    <img
                      src="assets/images/addons/22.jpg"
                      alt=""
                      width="100%"
                    />
                    <h1>All Industry Specific Solutions</h1>
                    <h4>Developed in Tally</h4>
                  </div>
                </div>
              </a>
            </div> */}
            {/* <div className="col-md-3">
              <a href="http://tallysolution.net/Tally-Customization-Solutions-Delhi-NCR-India-International.php">
                <div className="international-service">
                  <img src="assets/images/addons/3.jpg" alt="" width="100%" />
                  <div className="international-service-item">
                    <img
                      src="assets/images/addons/33.jpg"
                      alt=""
                      width="100%"
                    />
                    <h1>A Module for Every Org.</h1>
                    <h4>Used World Wide by Tally Users</h4>
                  </div>
                </div>
              </a>
            </div> */}
            {/* <div className="col-md-3">
              <a href="http://tallysolution.net/Tally-Implementation-Service-Delhi-India-International.php">
                <div className="international-service">
                  <img src="assets/images/addons/4.jpg" alt="" width="100%" />
                  <div className="international-service-item">
                    <img
                      src="assets/images/addons/44.jpg"
                      alt=""
                      width="100%"
                    />
                    <h1>Implement Your Tally ERP-9</h1>
                    <h4>Country/Business Specific Implementation</h4>
                  </div>
                </div>
              </a>
            </div> */}
          </div>
        </div>
      </section>

      <section className="pt-0">
        <div className="container-fluid p-0">
          <div className="row">
            <div className="col-md-12">
              <img src="images/1.jpg" alt="" width="100%" />
            </div>
          </div>
        </div>
      </section>

      <section className=" pt-0 z-index-1 mt-80-mobile" id="service-form">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="row g-0 box-shadow">
                <div className="col-lg-5 col-md-12 theme-bg p-5">
                  <div className="section-title mb-4">
                    <h2 className="title">Ask for a service</h2>
                  </div>
                  <p className="line-h-3 text-rgba">
                    Consulterz have facility to produce adipisicing elit,
                    changes and industrial systems.
                  </p>
                  <form
                    method="post"
                    onSubmit={handleSubmit()}
                    action="mail.php"
                    id="formArea"
                  >
                    <input
                      type="hidden"
                      defaultValue=""
                      id="recapta_token"
                      name="recapta_token"
                    />
                    <div id="formmessage" />
                    <div className="form-group">
                      <input
                        id="form_name"
                        type="text"
                        name="name"
                        className="form-control"
                        placeholder="Your Name"
                        required={true}
                        data-error="Name is required."
                      />
                      <div className="help-block with-errors" />
                    </div>
                    <div className="form-group">
                      <input
                        id="form_email"
                        type="email"
                        name="email"
                        className="form-control"
                        placeholder="Your Email"
                        required={true}
                        data-error="Valid email is required."
                      />
                      <div className="help-block with-errors" />
                    </div>
                    <div className="form-group">
                      <input
                        id="form_number"
                        type="text"
                        name="phone"
                        className="form-control"
                        placeholder="Phone Number"
                        required={true}
                      />
                    </div>
                    <div className="form-group">
                      <select
                        name="select"
                        className="form-control"
                        style={{ display: 'none' }}
                      >
                        <option>- Select Service</option>
                        <option>Consulting</option>
                        <option>Finance</option>
                        <option>Marketing</option>
                        <option>Avanced Analytics</option>
                        <option>planning</option>
                      </select>
                      <div className="nice-select form-control" tabIndex={0}>
                        <span className="current">- Select Service</span>
                        <ul className="list">
                          <li
                            data-value="- Select Service"
                            className="option selected focus"
                          >
                            - Select Service
                          </li>
                          <li data-value="Consulting" className="option">
                            Consulting
                          </li>
                          <li data-value="Finance" className="option">
                            Finance
                          </li>
                          <li data-value="Marketing" className="option">
                            Marketing
                          </li>
                          <li data-value="Avanced Analytics" className="option">
                            Avanced Analytics
                          </li>
                          <li data-value="planning" className="option">
                            planning
                          </li>
                        </ul>
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="btn btn-2 btn-border white mt-5 g-recaptcha"
                    >
                      {' '}
                      <span className="btn-icon btn-arrow" />
                      <span className="btn-text">Submit</span>
                    </button>
                  </form>
                </div>
                <div className="col-lg-7 col-md-12 white-bg d-flex align-items-center">
                  <div className="p-3 p-md-5 w-100">
                    <div className="section-title">
                      <h2 className="title">
                        Welcome to the World of Tally ERP-9 Solutions 123
                      </h2>
                      <p className="pt-5">
                        We are proficient in providing Tally Solutions, Tally
                        Software Sales, Tally customization &amp; Integration,
                        tally Implementation &amp; support in Delhi - NCR -
                        India - International. Our Team has provided Solutions
                        in Tally softwares for clients across India &amp; Globe.
                        With Dexterous staff working round the clock, we are
                        leading and trusted Solution Partners to many corporate
                        &amp; government bodies.
                      </p>
                      <p className="pt-5">
                        We have years of experience in implementation of
                        Enterprise business solutions on Tally ERP-9 framework
                        :- We offer complete Tally Solutions, which includes
                        Tally Development, Synchronization, Integration,
                        Implementation &amp; Corporate trainings. We are
                        Authorised Tally Solution Service providers &amp;
                        enhance value to our customers, by high quality Services
                        &amp; Support in Tally Softwares.
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
    </>
  )
}

export default tallyinternational
