import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Card as CardStyle } from "./styles.jsx";
import photo from "./../../assets/me.jpg";

const Card = (props) => {
  const { data } = props;
  return (
    <Fragment>
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-6 col-md">
            {data?.response?.data &&
              data.response.data.map((x) => (
                <CardStyle className="card">
                  <div className="card-body">
                    <div className="body-top">
                      <div className="foto">
                        <img
                          src={photo}
                          className="rounded-circle img-fluid"
                          alt=""
                        ></img>
                      </div>
                      <div className="body-top2">
                        <h6 className="card-title title-name">
                          Orlando Castañeda
                        </h6>
                        <label className="label-date card-subtitle mb-2 text-muted">
                          Agosto 2, 2022
                        </label>
                      </div>
                    </div>
                    <div className="body-body">
                      <h5 className="card-title">{x.title}</h5>
                      <p className="card-text">{x.text}</p>
                    </div>
                    <div className="body-button">
                      <div>
                        <label className="label1">#javascript</label>
                        <label className="label1">#node</label>
                        <label className="label1">#mongodb</label>
                        <label className="label1">#express</label>
                      </div>
                      <div>
                        <label>1 minuto</label>
                        <Link
                          to={`/post/${x._id}`}
                          type="button"
                          className="btn btn-dark"
                        >
                          Leeper post
                        </Link>
                      </div>
                    </div>
                  </div>
                </CardStyle>
              ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Card;
