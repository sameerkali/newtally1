import { CustomImage } from "@components/Utils/CustomImage";
import { Link } from "@components/Utils/Link";
import { PROJECTS } from "@libs/config/projects";
import { FC } from "react";

export const Project: FC = () => {
  return (
    <>
    
    <section>
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-lg-8 col-md-12">
            <div className="section-title">
              <h1 className="title">Tally Products

              </h1>
            </div>
          </div>
          <div className="col-md-3 mt-minus-220">
                <div className="position-relative rotating1">
                    <svg className="circleArea circleAreaanim2" viewBox="0 0 100 100" width="220" height="220">
                        <defs>
                            <path id="circle" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="red">
                            </path>
                        </defs>
                        <text font-size="10" fill="black">
                            <textPath href="#circle">Tally Solutions - New Delhi - NCR - India </textPath>
                        </text>
                    </svg>
                    <img src="https://www.tallysolution.net/assets/images/roraring-arrow.png" alt="" className="animation-arrow" />
                </div>
            </div>
        </div>
        <div className="row justify-content-center text-center">
          <div className="col-lg-3 col-md-6 col-6">
            <div className="featured-item style-3 product-item">
              <div className="featured-icon">
                <img src="https://www.tallysolution.net/assets/images/icons/accounts.png"/>
              </div>
              <div className="featured-title">
                <a>
                  <h5> Tally .ERP 9 </h5>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-6">
            <div className="featured-item style-3 product-item">
              <div className="featured-icon">
                <img src="https://www.tallysolution.net/assets/images/bar-grafh.gif"/>
              </div>
              <div className="featured-title">
                <a>
                  <h5> Tally .ERP 9 - Auditors' Edition </h5>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-6">
            <div className="featured-item style-3 product-item">
              <div className="featured-icon">
                <img src="https://www.tallysolution.net/assets/images/bar-grafh.gif"/>
              </div>
              <div className="featured-title">
                <a>
                  <h5>  Tally Shoper 9 </h5>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-6">
            <div className="featured-item style-3 product-item">
              <div className="featured-icon">
                <img src="https://www.tallysolution.net/assets/images/bar-grafh.gif"/>
              </div>
              <div className="featured-title">
                <a>
                  <h5> Tally Developer </h5>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-6">
            <div className="featured-item style-3 product-item">
              <div className="featured-icon">
                <img src="https://www.tallysolution.net/assets/images/bar-grafh.gif"/>
              </div>
              <div className="featured-title">
                <a>
                  <h5> Tally Addon Modules </h5>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-6">
            <div className="featured-item style-3 product-item">
              <div className="featured-icon">
                <img src="https://www.tallysolution.net/assets/images/icons/accounts.png"/>
              </div>
              <div className="featured-title">
                <a>
                  <h5> Tally ERP-9 Rental </h5>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-6">
            <div className="featured-item style-3 product-item">
              <div className="featured-icon">
                <img src="https://www.tallysolution.net/assets/images/icons/accounts.png"/>
              </div>
              <div className="featured-title">
                <a>
                  <h5> Our Quotations </h5>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  
    </>
  );
};
