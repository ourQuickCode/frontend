import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "./styles.css";

const Card = (props) => {
  const { data } = props;
  return (
    <Fragment>
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-6 col-md">
            {data?.response?.data &&
              data.response.data.map((x) => (
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">{x.title}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">
                      {x.publicationDate}
                    </h6>
                    <p className="card-text">{x.text}</p>
                    <Link
                      to={`/post/${x._id}`}
                      type="button"
                      className="btn btn-dark"
                    >
                      Leeper post
                    </Link>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Card;
