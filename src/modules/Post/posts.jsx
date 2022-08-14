import React, { Fragment, useEffect } from "react";
import { loadCountersCardRequest } from "./post.redux";
import { connect } from "react-redux";
import Card from "../../components/card";

function Post(props) {
  const { info } = props;

  useEffect(() => {
    props.loadCountersCardRequest();
  }, [props.loadCountersCardRequest]);

  return (
    <Fragment>
      <Card data={info} />
    </Fragment>
  );
}

const mapStateToProps = ({ card }) => ({
  info: card.info,
});

const mapDispatchToProps = {
  loadCountersCardRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(Post);
