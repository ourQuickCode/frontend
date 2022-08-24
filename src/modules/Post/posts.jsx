import React, { Fragment, useEffect } from "react";
import { loadAllPostRequest } from "./post.redux";
import { connect } from "react-redux";
import Card from "../../components/card";

function Post(props) {
  const { list } = props;

  useEffect(() => {
    props.loadAllPostRequest();
  }, [props.loadAllPostRequest]);

  return (
    <Fragment>
      <Card data={list} />
    </Fragment>
  );
}

const mapStateToProps = ({ post }) => ({
  list: post.list,
});

const mapDispatchToProps = {
  loadAllPostRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(Post);
