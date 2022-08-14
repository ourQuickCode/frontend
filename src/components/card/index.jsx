import React, { Fragment } from "react";

const Card = (props) => {
  const { data } = props;
  return (
    <Fragment>
      <div class="container">
        <div class="row">
          <div class="col-12 col-sm-6 col-md">
            {data?.response?.data &&
              data.response.data.map((x) => (
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">{x.title}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">
                      {x.publicationDate}
                    </h6>
                    <p class="card-text">{x.text}</p>
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
