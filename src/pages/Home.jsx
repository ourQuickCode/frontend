import React, { Fragment } from "react";
import { Presentation, Button1, Button2, Icons } from "./styles.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedinIn,
  faGithub,
  faFacebook,
  faTwitter,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

export const Home = () => {
  return (
    <Fragment>
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-6 col-md">
            <Presentation>
              <div>
                <h1 className="presentationText1">
                  Soy <label>Orlando Castañeda</label>
                </h1>
                <h1 className="presentationText1">Desarrollador de software</h1>
                <h6 className="presentationText2">
                  Este es mi portafolio web!
                </h6>
              </div>
              <div>
                <Button1 className="" name="button">
                  Ver proyectos
                </Button1>
                <Button2 name="button">
                  {" "}
                  <FontAwesomeIcon icon={faDownload} /> Descargar CV
                </Button2>
              </div>
              <Icons>
                <div className="row social-media justify-content-center">
                  <div className="col-auto">
                    <a
                      href="https://www.linkedin.com/in/luis-orlando-casta%C3%B1eda-espinoza-758426161/"
                      className="icono linkedin"
                    >
                      <FontAwesomeIcon icon={faLinkedinIn} />
                    </a>
                    <a
                      href="https://github.com/orlandCasta"
                      className="icono github"
                    >
                      <FontAwesomeIcon icon={faGithub} />
                    </a>
                    <a
                      href="https://www.facebook.com/orlando.castaneda.75"
                      className="icono facebook"
                    >
                      <FontAwesomeIcon icon={faFacebook} />
                    </a>
                    <a
                      href="https://twitter.com/explore"
                      className="icono twitter"
                    >
                      <FontAwesomeIcon icon={faTwitter} />
                    </a>
                    <a
                      href="https://www.instagram.com/orlandcasta/?hl=es-la"
                      className="icono instagram"
                    >
                      <FontAwesomeIcon icon={faInstagram} />
                    </a>
                    <a
                      href="https://www.youtube.com/channel/UCUoh4plhdSvcSChUD0kZK2w?view_as=subscriber"
                      className="icono youtube"
                    >
                      <FontAwesomeIcon icon={faYoutube} />
                    </a>
                  </div>
                </div>
              </Icons>
            </Presentation>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
