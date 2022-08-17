import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import { donationCardGetOneRequest } from "./../../modules/Post/post.redux";
import { useParams } from "react-router-dom";
import "./styles.css";

const Post = (props) => {
  const { view } = props;
  let location = useParams();

  useEffect(() => {
    props.donationCardGetOneRequest(location.id);
  }, []);

  return (
    <Fragment>
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-6 col-md">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{view?.response?.data?.title}</h5>
                <h6 className="card-subtitle mb-2 text-muted">
                  {view?.response?.data?.publicationDate}
                </h6>
                <p className="card-text">{view?.response?.data?.text}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

const mapStateToProps = ({ card }) => ({ view: card.view });

const mapDispatchToProps = {
  donationCardGetOneRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(Post);
