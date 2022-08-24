import React, { Fragment } from "react";
import { Footer as FooterStyled } from "./styles.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedinIn,
  faGithub,
  faFacebook,
  faTwitter,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <Fragment>
      <FooterStyled class="text-center text-lg-start bg-white text-muted">
        <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom border-top">
          <div class="me-5 d-none d-lg-block">
            <span>Get connected with us on social networks:</span>
          </div>
          <div>
            <a
              href="https://www.linkedin.com/in/luis-orlando-casta%C3%B1eda-espinoza-758426161/"
              class="me-4 link-grayish icono"
            >
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
            <a
              href="https://github.com/orlandCasta"
              class="me-4 link-grayish icono"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
              href="https://www.facebook.com/orlando.castaneda.75"
              class="me-4 link-grayish icono"
            >
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a
              href="https://twitter.com/explore"
              class="me-4 link-grayish icono"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a
              href="https://www.instagram.com/orlandcasta/?hl=es-la"
              class="me-4 link-grayish icono"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a
              href="https://www.youtube.com/channel/UCUoh4plhdSvcSChUD0kZK2w?view_as=subscriber"
              class="me-4 link-grayish icono"
            >
              <FontAwesomeIcon icon={faYoutube} />
            </a>
          </div>
        </section>
        <section class="">
          <div class="container text-center text-md-start mt-5">
            <div class="row mt-3">
              <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 class="text-uppercase fw-bold mb-4">
                  <i class="fas fa-gem me-3 text-grayish"></i>Company name
                </h6>
                <p>
                  Here you can use rows and columns to organize your footer
                  content. Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit.
                </p>
              </div>
              <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 class="text-uppercase fw-bold mb-4">Products</h6>
                <p>
                  <a href="#!" class="text-reset">
                    Angular
                  </a>
                </p>
                <p>
                  <a href="#!" class="text-reset">
                    React
                  </a>
                </p>
                <p>
                  <a href="#!" class="text-reset">
                    Vue
                  </a>
                </p>
                <p>
                  <a href="#!" class="text-reset">
                    Laravel
                  </a>
                </p>
              </div>
              <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 class="text-uppercase fw-bold mb-4">Useful links</h6>
                <p>
                  <a href="#!" class="text-reset">
                    Pricing
                  </a>
                </p>
                <p>
                  <a href="#!" class="text-reset">
                    Settings
                  </a>
                </p>
                <p>
                  <a href="#!" class="text-reset">
                    Orders
                  </a>
                </p>
                <p>
                  <a href="#!" class="text-reset">
                    Help
                  </a>
                </p>
              </div>
              <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
                <p>
                  <i class="fas fa-home me-3 text-grayish"></i> New York, NY
                  10012, US
                </p>
                <p>
                  <i class="fas fa-envelope me-3 text-grayish"></i>
                  info@example.com
                </p>
                <p>
                  <i class="fas fa-phone me-3 text-grayish"></i> + 01 234 567 88
                </p>
                <p>
                  <i class="fas fa-print me-3 text-grayish"></i> + 01 234 567 89
                </p>
              </div>
            </div>
          </div>
        </section>
        <div class="text-center p-4 url-text">
          © 2022 Copyright:
          <a class="text-reset fw-bold ">orlandoce.com</a>
        </div>
      </FooterStyled>
    </Fragment>
  );
};

export default Footer;
