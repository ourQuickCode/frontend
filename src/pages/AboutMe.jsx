import React, { Fragment } from "react";
import { About, Skills } from "./styles.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDatabase,
  faPalette,
  faServer,
} from "@fortawesome/free-solid-svg-icons";
import {
  faJs,
  faNode,
  faReact,
  faGitAlt,
  faGithub,
  faHtml5,
  faCss3,
  faBootstrap,
  faLinux,
} from "@fortawesome/free-brands-svg-icons";
import photo from "./../assets/me.jpg";

export const AboutMe = () => {
  return (
    <Fragment>
      <About>
        <div className="container">
          <div className="row">
            <div className="about-container">
              <div className="col foto">
                <img
                  src={photo}
                  className="rounded-circle img-fluid"
                  alt=""
                ></img>
              </div>
              <label>
                I am a fullstack developer and mentor based in Mexico
              </label>
              <p>
                Lorem Ipsum es simplemente el texto de relleno de las imprentas
                y archivos de texto. Lorem Ipsum ha sido el texto de relleno
                estándar de las industrias desde el año 1500, cuando un impresor
                (N. del T. persona que se dedica a la imprenta) desconocido usó
                una galería de textos y los mezcló de tal manera que logró hacer
                un libro de textos especimen. No sólo sobrevivió 500 años, sino
                que tambien ingresó como texto de relleno en documentos
                electrónicos, quedando esencialmente igual al original. Fue
                popularizado en los 60s con la creación de las hojas "Letraset",
                las cuales contenian pasajes de Lorem Ipsum, y más recientemente
                con software de autoedición, como por ejemplo Aldus PageMaker,
                el cual incluye versiones de Lorem Ipsum.
              </p>
            </div>
          </div>
        </div>
      </About>
      <Skills className="container">
        <div class="card">
          <div class="card-body">
            <FontAwesomeIcon className="icon" icon={faJs} />
            <h5 class="card-title">JavaScript</h5>
            <p class="card-text">
              Lorem Ipsum, y más recientemente con software de autoedición, como
              por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem
              Ipsum.
            </p>
          </div>
        </div>
        <div class="card">
          <div class="card-body">
            <FontAwesomeIcon className="icon" icon={faNode} />
            <h5 class="card-title">NodeJS</h5>
            <p class="card-text">
              Lorem Ipsum, y más recientemente con software de autoedición, como
              por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem
              Ipsum.
            </p>
          </div>
        </div>
        <div class="card">
          <div class="card-body">
            <FontAwesomeIcon className="icon" icon={faReact} />
            <h5 class="card-title">ReactJS</h5>
            <p class="card-text">
              Lorem Ipsum, y más recientemente con software de autoedición, como
              por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem
              Ipsum.
            </p>
          </div>
        </div>
        <div class="card">
          <div class="card-body">
            <h5 class="iconText">Express</h5>
            <h5 class="card-title">ExpressJS</h5>
            <p class="card-text">
              Lorem Ipsum, y más recientemente con software de autoedición, como
              por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem
              Ipsum.
            </p>
          </div>
        </div>
        <div class="card">
          <div class="card-body">
            <h5 class="iconText">JWT</h5>
            <h5 class="card-title">JSON Web Token</h5>
            <p class="card-text">
              Lorem Ipsum, y más recientemente con software de autoedición, como
              por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem
              Ipsum.
            </p>
          </div>
        </div>
        <div class="card">
          <div class="card-body">
            <h5 class="iconText">MongoDB</h5>
            <h5 class="card-title">MongoDB</h5>
            <p class="card-text">
              Lorem Ipsum, y más recientemente con software de autoedición, como
              por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem
              Ipsum.
            </p>
          </div>
        </div>
        <div class="card">
          <div class="card-body">
            <h5 class="iconText">PostgreSQL</h5>
            <h5 class="card-title">PostgreSQL</h5>
            <p class="card-text">
              Lorem Ipsum, y más recientemente con software de autoedición, como
              por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem
              Ipsum.
            </p>
          </div>
        </div>
        <div class="card">
          <div class="card-body">
            <FontAwesomeIcon className="icon" icon={faGitAlt} />
            <h5 class="card-title">Git</h5>
            <p class="card-text">
              Lorem Ipsum, y más recientemente con software de autoedición, como
              por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem
              Ipsum.
            </p>
          </div>
        </div>
        <div class="card">
          <div class="card-body">
            <FontAwesomeIcon className="icon" icon={faGithub} />
            <h5 class="card-title">Git</h5>
            <p class="card-text">
              Lorem Ipsum, y más recientemente con software de autoedición, como
              por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem
              Ipsum.
            </p>
          </div>
        </div>
        <div class="card">
          <div class="card-body">
            <FontAwesomeIcon className="icon" icon={faHtml5} />
            <h5 class="card-title">HTML</h5>
            <p class="card-text">
              Lorem Ipsum, y más recientemente con software de autoedición, como
              por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem
              Ipsum.
            </p>
          </div>
        </div>
        <div class="card">
          <div class="card-body">
            <FontAwesomeIcon className="icon" icon={faCss3} />
            <h5 class="card-title">CSS</h5>
            <p class="card-text">
              Lorem Ipsum, y más recientemente con software de autoedición, como
              por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem
              Ipsum.
            </p>
          </div>
        </div>
        <div class="card">
          <div class="card-body">
            <h5 class="iconText">Styled Components</h5>
            <h5 class="card-title">Styled Components</h5>
            <p class="card-text">
              Lorem Ipsum, y más recientemente con software de autoedición, como
              por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem
              Ipsum.
            </p>
          </div>
        </div>
        <div class="card">
          <div class="card-body">
            <FontAwesomeIcon className="icon" icon={faBootstrap} />
            <h5 class="card-title">Bootstrap</h5>
            <p class="card-text">
              Lorem Ipsum, y más recientemente con software de autoedición, como
              por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem
              Ipsum.
            </p>
          </div>
        </div>
        <div class="card">
          <div class="card-body">
            <FontAwesomeIcon className="icon" icon={faLinux} />
            <h5 class="card-title">Linux</h5>
            <p class="card-text">
              Lorem Ipsum, y más recientemente con software de autoedición, como
              por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem
              Ipsum.
            </p>
          </div>
        </div>
        <div class="card">
          <div class="card-body">
            <FontAwesomeIcon className="icon" icon={faDatabase} />
            <h5 class="card-title">Heroku y Digital Ocean</h5>
            <p class="card-text">
              Lorem Ipsum, y más recientemente con software de autoedición, como
              por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem
              Ipsum.
            </p>
          </div>
        </div>
      </Skills>
    </Fragment>
  );
};
