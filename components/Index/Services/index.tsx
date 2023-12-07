import { FC } from "react";
import { FaLaptopCode, FaDiscord } from "react-icons/fa";
import {
  SiAdobeaftereffects,
  SiAdobeillustrator,
  SiAdobephotoshop,
} from "react-icons/si";
import { AiOutlineGlobal } from "react-icons/ai";
import Marquee from "react-fast-marquee";
import { Link } from "@components/Utils/Link";

export const Services: FC = () => {
  const Service = [
    {
      name: "Web Tabanlı Sistemler",
      text: "İstediğiniz bir websitesini tasarlar ve kodlarız ayrıca web tabanlı oyunlar, uygulamalar ve programlar kodlamaktayız.",
      icon: AiOutlineGlobal,
    },
    {
      name: "Gömülü Sistemler",
      text: "Platformu fark etmeksizin her türlü masaüstü ve mobil uygulama geliştirmekteyiz.",
      icon: FaLaptopCode,
    },
    {
      name: "Discord Uygulamaları",
      text: "Discord için uygulama ve botlar geliştirmekteyiz.",
      icon: FaDiscord,
    },
    {
      name: "Photoshop Hizmeti",
      text: "İstediğiniz fotoğrafları veya tasarımları istediğiniz şekillerde düzenleyebiliriz.",
      icon: SiAdobephotoshop,
    },
    {
      name: "Tasarım Hizmeti",
      text: "İstediğiniz bir logoyu, banneri, veya herhangi bir tasarımı sizin için tasarlayabiliriz.",
      icon: SiAdobeillustrator,
    },
    {
      name: "After Effects Hizmeti",
      text: "İstediğiniz bir gifi tasarlayabiliriz veya istediğiniz bir videoya efekt eklemesi ve düzenlemesi yapabiliriz.",
      icon: SiAdobeaftereffects,
    },
  ];

  return (
    <div className="page-content">
      <Marquee className="theme-bg marqueeData">
        <h1>
          Top Tally Solutions Dealers and Partners across New Delhi - Gurgaon -
          Noida - Faridabad - NCR | Tally Software Dealers and Solution Provides
          - Across New Delhi - NCR - Gurgaon - Noida
        </h1>
      </Marquee>
      <section
        className="services theme-bg"
        style={{ backgroundColor: '#3143ef' }}
      >
        <div className="container ">
          <div className="row">
            <div className="col-md-12 col-lg-12 service-item">
              <div className="section-title textAlign:center">
                <h5 className="text-rgba">
                  India’s Top Tally Solution Providers - Our Brand provides
                  Complete Tally Solutions across Delhi - NCR - India.
                </h5>
                <div className="d-flex justify-content-center flex-flow-wrap">
                  <div className="featured-item style-3 product-item m-3 p-3">
                    <div className="featured-title">
                      <h5> Tally Customizations</h5>
                    </div>
                  </div>

                  <div className="featured-item style-3 product-item m-3 p-3">
                    <div className="featured-title">
                      <h5>Tally Software Sales & Support</h5>
                    </div>
                  </div>

                  <div className="featured-item style-3 product-item m-3 p-3">
                    <div className="featured-title">
                      <h5> Tally Integration & Synchronizations</h5>
                    </div>
                  </div>

                  <div className="featured-item style-3 product-item m-3 p-3">
                    <div className="featured-title">
                      <h5> Tally On Cloud Services</h5>
                    </div>
                  </div>

                  <div className="featured-item style-3 product-item m-3 p-3">
                    <div className="featured-title">
                      <h5>Tally Development Support </h5>
                    </div>
                  </div>

                  <div className="featured-item style-3 product-item m-3 p-3">
                    <div className="featured-title">
                      <h5>Tally AMC</h5>
                    </div>
                  </div>

                  <div className="featured-item style-3 product-item m-3 p-3">
                    <div className="featured-title">
                      <h5>Tally Corporate-Trainings</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="section-title">
              <h1 className="title text-center">Our Services</h1>
            </div>
            <div className="col-md-3 col-lg-3 service-item">
              <div className="service-top-svg">
                <svg
                  className="front"
                  viewBox="0 0 180 320"
                  preserveAspectRatio="none"
                >
                  <path d="M0,0C0,0,0,171.14385,0,171.14385C24.580441,186.61523,55.897012,195.90157,90,195.90157C124.10299,195.90157,155.41956,186.61523,180,171.14385C180,171.14385,180,0,180,0C180,0,0,0,0,0C0,0,0,0,0,0"></path>
                  <desc>Created with Codemix</desc>
                  <defs></defs>
                </svg>
                <svg
                  className="back"
                  viewBox="0 0 180 320"
                  preserveAspectRatio="none"
                >
                  <path d="m 0,0 0,47.7775 c 24.580441,3.12569 55.897012,-8.199417 90,-8.199417 34.10299,0 65.41956,11.325107 90,8.199417 L 180,0 z"></path>
                  <desc>Created with Codemix</desc>
                  <defs></defs>
                </svg>
                <div className="service-content-item">
                  <h5 className="pt-3">Implementation for Tally</h5>
                  <p>
                    FOR MAKING TALLY SOFTWARE, TAILORMADE, TO SUIT YOUR
                    ENTERPRISE NEED.
                  </p>
                </div>
                <div className="service-content-item2">
                  <h5>
                    {' '}
                    Office
                    <a> Implementation Unit</a>{' '}
                  </h5>
                </div>
                <img
                  src="https://www.tallysolution.net/assets/images/1.png"
                  alt="Tally Customization in Delhi India"
                />
              </div>
            </div>
            <div className="col-md-3 col-lg-3 service-item">
              <div className="service-top-svg">
                <svg
                  className="front"
                  viewBox="0 0 180 320"
                  preserveAspectRatio="none"
                >
                  <path d="M0,0C0,0,0,171.14385,0,171.14385C24.580441,186.61523,55.897012,195.90157,90,195.90157C124.10299,195.90157,155.41956,186.61523,180,171.14385C180,171.14385,180,0,180,0C180,0,0,0,0,0C0,0,0,0,0,0"></path>
                  <desc>Created with Codemix</desc>
                  <defs></defs>
                </svg>
                <svg
                  className="back"
                  viewBox="0 0 180 320"
                  preserveAspectRatio="none"
                >
                  <path d="m 0,0 0,47.7775 c 24.580441,3.12569 55.897012,-8.199417 90,-8.199417 34.10299,0 65.41956,11.325107 90,8.199417 L 180,0 z"></path>
                  <desc>Created with Codemix</desc>
                  <defs></defs>
                </svg>
                <div className="service-content-item">
                  <h5 className="pt-3">Customisation</h5>
                  <p>
                    FOR MAKING TALLY SOFTWARE, TAILORMADE, TO SUIT YOUR
                    ENTERPRISE NEED.
                  </p>
                </div>
                <div className="service-content-item2">
                  <h5>
                    {' '}
                    Office
                    <a> Implementation Unit</a>{' '}
                  </h5>
                </div>
                <img
                  src="https://www.tallysolution.net/assets/images/2.png"
                  alt="Tally Customization in Delhi India"
                />
              </div>
            </div>
            <div className="col-md-3 col-lg-3 service-item">
              <div className="service-top-svg">
                <svg
                  className="front"
                  viewBox="0 0 180 320"
                  preserveAspectRatio="none"
                >
                  <path d="M0,0C0,0,0,171.14385,0,171.14385C24.580441,186.61523,55.897012,195.90157,90,195.90157C124.10299,195.90157,155.41956,186.61523,180,171.14385C180,171.14385,180,0,180,0C180,0,0,0,0,0C0,0,0,0,0,0"></path>
                  <desc>Created with Codemix</desc>
                  <defs></defs>
                </svg>
                <svg
                  className="back"
                  viewBox="0 0 180 320"
                  preserveAspectRatio="none"
                >
                  <path d="m 0,0 0,47.7775 c 24.580441,3.12569 55.897012,-8.199417 90,-8.199417 34.10299,0 65.41956,11.325107 90,8.199417 L 180,0 z"></path>
                  <desc>Created with Codemix</desc>
                  <defs></defs>
                </svg>
                <div className="service-content-item">
                  <h5 className="pt-3">Solution</h5>
                  <p>
                    FOR MAKING TALLY SOFTWARE, TAILORMADE, TO SUIT YOUR
                    ENTERPRISE NEED.
                  </p>
                </div>
                <div className="service-content-item2">
                  <h5>
                    {' '}
                    Office
                    <a> Implementation Unit</a>{' '}
                  </h5>
                </div>
                <img
                  src="https://www.tallysolution.net/assets/images/3.png"
                  alt="Tally Customization in Delhi India"
                />
              </div>
            </div>
            <div className="col-md-3 col-lg-3 service-item">
              <div className="service-top-svg">
                <svg
                  className="front"
                  viewBox="0 0 180 320"
                  preserveAspectRatio="none"
                >
                  <path d="M0,0C0,0,0,171.14385,0,171.14385C24.580441,186.61523,55.897012,195.90157,90,195.90157C124.10299,195.90157,155.41956,186.61523,180,171.14385C180,171.14385,180,0,180,0C180,0,0,0,0,0C0,0,0,0,0,0"></path>
                  <desc>Created with Codemix</desc>
                  <defs></defs>
                </svg>
                <svg
                  className="back"
                  viewBox="0 0 180 320"
                  preserveAspectRatio="none"
                >
                  <path d="m 0,0 0,47.7775 c 24.580441,3.12569 55.897012,-8.199417 90,-8.199417 34.10299,0 65.41956,11.325107 90,8.199417 L 180,0 z"></path>
                  <desc>Created with Codemix</desc>
                  <defs></defs>
                </svg>
                <div className="service-content-item">
                  <h5 className="pt-3">Solution</h5>
                  <p>
                    FOR MAKING TALLY SOFTWARE, TAILORMADE, TO SUIT YOUR
                    ENTERPRISE NEED.
                  </p>
                </div>
                <div className="service-content-item2">
                  <h5>
                    {' '}
                    Office
                    <a> Implementation Unit</a>{' '}
                  </h5>
                </div>
                <img
                  src="https://www.tallysolution.net/assets/images/4.png"
                  alt="Tally Customization in Delhi India"
                />
              </div>
            </div>
            <div className="col-md-3 col-lg-3 service-item">
              <div className="service-top-svg">
                <svg
                  className="front"
                  viewBox="0 0 180 320"
                  preserveAspectRatio="none"
                >
                  <path d="M0,0C0,0,0,171.14385,0,171.14385C24.580441,186.61523,55.897012,195.90157,90,195.90157C124.10299,195.90157,155.41956,186.61523,180,171.14385C180,171.14385,180,0,180,0C180,0,0,0,0,0C0,0,0,0,0,0"></path>
                  <desc>Created with Codemix</desc>
                  <defs></defs>
                </svg>
                <svg
                  className="back"
                  viewBox="0 0 180 320"
                  preserveAspectRatio="none"
                >
                  <path d="m 0,0 0,47.7775 c 24.580441,3.12569 55.897012,-8.199417 90,-8.199417 34.10299,0 65.41956,11.325107 90,8.199417 L 180,0 z"></path>
                  <desc>Created with Codemix</desc>
                  <defs></defs>
                </svg>
                <div className="service-content-item">
                  <h5 className="pt-3">Solution</h5>
                  <p>
                    FOR MAKING TALLY SOFTWARE, TAILORMADE, TO SUIT YOUR
                    ENTERPRISE NEED.
                  </p>
                </div>
                <div className="service-content-item2">
                  <h5>
                    {' '}
                    Office
                    <a> Implementation Unit</a>{' '}
                  </h5>
                </div>
                <img
                  src="https://www.tallysolution.net/assets/images/5.png"
                  alt="Tally Customization in Delhi India"
                />
              </div>
            </div>
            <div className="col-md-3 col-lg-3 service-item">
              <div className="service-top-svg">
                <svg
                  className="front"
                  viewBox="0 0 180 320"
                  preserveAspectRatio="none"
                >
                  <path d="M0,0C0,0,0,171.14385,0,171.14385C24.580441,186.61523,55.897012,195.90157,90,195.90157C124.10299,195.90157,155.41956,186.61523,180,171.14385C180,171.14385,180,0,180,0C180,0,0,0,0,0C0,0,0,0,0,0"></path>
                  <desc>Created with Codemix</desc>
                  <defs></defs>
                </svg>
                <svg
                  className="back"
                  viewBox="0 0 180 320"
                  preserveAspectRatio="none"
                >
                  <path d="m 0,0 0,47.7775 c 24.580441,3.12569 55.897012,-8.199417 90,-8.199417 34.10299,0 65.41956,11.325107 90,8.199417 L 180,0 z"></path>
                  <desc>Created with Codemix</desc>
                  <defs></defs>
                </svg>
                <div className="service-content-item">
                  <h5 className="pt-3">Solution</h5>
                  <p>
                    FOR MAKING TALLY SOFTWARE, TAILORMADE, TO SUIT YOUR
                    ENTERPRISE NEED.
                  </p>
                </div>
                <div className="service-content-item2">
                  <h5>
                    {' '}
                    Office
                    <a> Implementation Unit</a>{' '}
                  </h5>
                </div>
                <img
                  src="https://www.tallysolution.net/assets/images/6.png"
                  alt="Tally Customization in Delhi India"
                />
              </div>
            </div>
            <div className="col-md-3 col-lg-3 service-item">
              <div className="service-top-svg">
                <svg
                  className="front"
                  viewBox="0 0 180 320"
                  preserveAspectRatio="none"
                >
                  <path d="M0,0C0,0,0,171.14385,0,171.14385C24.580441,186.61523,55.897012,195.90157,90,195.90157C124.10299,195.90157,155.41956,186.61523,180,171.14385C180,171.14385,180,0,180,0C180,0,0,0,0,0C0,0,0,0,0,0"></path>
                  <desc>Created with Codemix</desc>
                  <defs></defs>
                </svg>
                <svg
                  className="back"
                  viewBox="0 0 180 320"
                  preserveAspectRatio="none"
                >
                  <path d="m 0,0 0,47.7775 c 24.580441,3.12569 55.897012,-8.199417 90,-8.199417 34.10299,0 65.41956,11.325107 90,8.199417 L 180,0 z"></path>
                  <desc>Created with Codemix</desc>
                  <defs></defs>
                </svg>
                <div className="service-content-item">
                  <h5 className="pt-3">Solution</h5>
                  <p>
                    FOR MAKING TALLY SOFTWARE, TAILORMADE, TO SUIT YOUR
                    ENTERPRISE NEED.
                  </p>
                </div>
                <div className="service-content-item2">
                  <h5>
                    {' '}
                    Office
                    <a> Implementation Unit</a>{' '}
                  </h5>
                </div>
                <img
                  src="https://www.tallysolution.net/assets/images/7.png"
                  alt="Tally Customization in Delhi India"
                />
              </div>
            </div>
            <div className="col-md-3 col-lg-3 service-item">
              <div className="service-top-svg">
                <svg
                  className="front"
                  viewBox="0 0 180 320"
                  preserveAspectRatio="none"
                >
                  <path d="M0,0C0,0,0,171.14385,0,171.14385C24.580441,186.61523,55.897012,195.90157,90,195.90157C124.10299,195.90157,155.41956,186.61523,180,171.14385C180,171.14385,180,0,180,0C180,0,0,0,0,0C0,0,0,0,0,0"></path>
                  <desc>Created with Codemix</desc>
                  <defs></defs>
                </svg>
                <svg
                  className="back"
                  viewBox="0 0 180 320"
                  preserveAspectRatio="none"
                >
                  <path d="m 0,0 0,47.7775 c 24.580441,3.12569 55.897012,-8.199417 90,-8.199417 34.10299,0 65.41956,11.325107 90,8.199417 L 180,0 z"></path>
                  <desc>Created with Codemix</desc>
                  <defs></defs>
                </svg>
                <div className="service-content-item">
                  <h5 className="pt-3">Solution</h5>
                  <p>
                    FOR MAKING TALLY SOFTWARE, TAILORMADE, TO SUIT YOUR
                    ENTERPRISE NEED.
                  </p>
                </div>
                <div className="service-content-item2">
                  <h5>
                    {' '}
                    Office
                    <a> Implementation Unit</a>{' '}
                  </h5>
                </div>
                <img
                  src="https://www.tallysolution.net/assets/images/8.png"
                  alt="Tally Customization in Delhi India"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
};
