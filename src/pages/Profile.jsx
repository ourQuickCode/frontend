import React, { Fragment } from "react";
import Posts from "./../modules/Post/posts";
import Form from "./../components/form";

export const Profile = () => {
  return (
    <Fragment>
      <Form />

      <Posts />
    </Fragment>
  );
};
