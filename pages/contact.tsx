import React from 'react'
import { Navbar } from '@components/Layout/Navbar'
import { Footer } from '@components/Layout/Footer'
import Marquee from 'react-fast-marquee'
const contact = () => {
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
      {/* form */}
      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-title mb-0">
                <h2 className="title">
                  Glowips - Authorized Tally Solution , Sales , Development
                  &amp; Enterprise Unit - Delhi - NCR - India - International
                </h2>
                <h6 className="mt-4">
                  For all Tally Sales, Support &amp; Service (Customization,
                  Integration, Synchronization, .Net Capabilities, Upgradation –
                  Technical Support) –{' '}
                </h6>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mt-5 mt-lg-0">
              <div className="contact-media">
                <h4 className="text-theme">Contact Person</h4>
                <p className="mb-3"> Saurabh Behal (Director)</p>
                <a href="mailto:saurabhbehal@gmail.com">
                  {' '}
                  saurabhbehal@gmail.com
                </a>
                <a href="mailto:tallyproducts@gmail.com">
                  tallyproducts@gmail.com
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mt-5 mt-lg-0">
              <div className="contact-media">
                <h4 className="text-theme">Call Us</h4>
                <a href="tel:+91 9582827928">+91 9582827928</a>
                <a href="tel:+91 9899264978">+91 9899264978.</a>
              </div>
            </div>
            <div className="col-md-12">
              <div className="section-title mt-5 mb-0">
                <h6>For Admissions, Enquiry and Seats</h6>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mt-2 mt-lg-0">
              <div className="contact-media">
                <h4 className="text-theme">Contact Person</h4>
                <p className="mb-3">Mr Varun Rohilla, M: +91 9810292752</p>
                <p className="mb-3"> Mr Om Prakash (Handling Academy Office)</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="container-fluid">
        <div className="row ">
          <div className="col-md-6">
            <div className="map iframe-h-2">
              <h6>Corp Customization Office</h6>
              <h6>Arya Samaj Road , Karol Bagh</h6>
              <iframe
                src="http://maps.google.co.in/maps?f=q&source=s_q&hl=en&geocode=&q=Arya+Samaj+Road+,+Karol+Bagh&sll=28.648222,77.193616&sspn=0.001156,0.001725&vpsrc=6&ie=UTF8&hq=&hnear=Arya+Samaj+Rd,+Beadonpura,+Karol+Bagh,+New+Delhi,+Delhi+110005&ll=28.652878,77.191808&spn=0.009246,0.013797&t=m&z=14&output=embed"
               
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="map iframe-h-2">
              <h6>Industrial Office</h6>
              <h6>G-984 , DSIDC , Narela - Delhi - 110040</h6>
              <iframe
                src="http://maps.google.co.in/maps?f=q&source=s_q&hl=en&geocode=&q=G-984+,+DSIDC+,+Narela+-+Delhi+-+40&aq=&sll=21.125498,81.914063&sspn=39.551647,56.513672&vpsrc=6&ie=UTF8&hq=&hnear=Narela+Industrial+Area,+New+Delhi,+Delhi&t=m&ll=28.832193,77.099304&spn=0.026317,0.036478&z=14&output=embed"
               
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="map iframe-h-2">
              <h6>Academy Office (Mr. Om Prakash)</h6>
              <h6>Dilshad Colony - Sahibabad</h6>
              <iframe
                src="http://maps.google.co.in/maps?f=q&source=s_q&hl=en&geocode=&q=Sahibabad,+uttar+pradesh&aq=&sll=28.572547,77.222819&sspn=0.296082,0.441513&vpsrc=0&ie=UTF8&hq=&hnear=Sahibabad,+Ghaziabad,+Uttar+Pradesh&ll=28.671582,77.370485&spn=0.036975,0.055189&t=m&z=14&output=embed"
               
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="map iframe-h-2">
              <h6>Registered Office / Development Unit M: +91 9899264978</h6>
              <h6>
                WZ-30 S , Street No. 1 , Opposite Flyover Pillar No. 61 , Sadh
                Nagar, Palam Colony – 110045, 10 Minutes From Dwarka Sector -10
                Metro Station
              </h6>
              <iframe
                src="http://maps.google.co.in/maps?f=q&source=s_q&hl=en&geocode=&q=Palam+Colony,+delhi-110045&aq=&sll=28.583457,77.08114&sspn=0.004626,0.006899&vpsrc=0&ie=UTF8&hq=&hnear=Gali+No.+8,+Raj+Nagar+II,+New+Delhi,+Delhi+110045&ll=28.583172,77.080965&spn=0.009252,0.013797&t=m&z=14&output=embed"
                
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="map iframe-h-2">
              <h6>ERP Consultants Office</h6>
              <h6>Copenhagen , Denmark, Contact No.: 004550107050</h6>
              <iframe
                src="http://maps.google.co.in/maps?f=q&source=s_q&hl=en&geocode=&q=COPENHAGEN+,+DENMARK+&aq=&sll=28.591003,77.093124&sspn=0.037004,0.055189&vpsrc=0&ie=UTF8&hq=&hnear=Copenhagen,+Denmark&t=m&z=11&ll=55.676097,12.568337&output=embed"
               
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="map iframe-h-2">
              <h6>Branch Office (Mr Charles)</h6>
              <h6>
                GLOWIPS Solution Office , P.O Box 3932 KN Accra, Ghana , Africa
              </h6>
              <iframe
                src="https://maps.google.com/maps?f=q&source=s_q&hl=en&geocode=&q=Accra,+Ghana+,+Africa&sll=37.0625,-95.677068&sspn=37.735377,86.572266&ie=UTF8&hq=&hnear=Accra,+Accra+Metropolis,+Greater+Accra,+Ghana&t=m&iwloc=A&ll=5.555717,-0.196306&spn=0.225427,0.271934&output=embed"
                
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="map iframe-h-2">
              <h6>Branch Office - (Mr Sumit)</h6>
              <h6>
                GLOWIPS Solution Office , 202 , Sikaria Complex , S.J Road ,
                Athgaon , Guwahati - 781001
              </h6>
              <iframe
                src="https://maps.google.com/maps?f=q&source=s_q&hl=en&geocode=&q=Athgaon+,+Guwahati&aq=&sll=26.179781,91.756268&sspn=0.08365,0.169086&t=h&ie=UTF8&hq=&hnear=Athgaon+Pukhur&z=14&iwloc=A&ll=26.169491,91.738179&output=embed"
                
              />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default contact