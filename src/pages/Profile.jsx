import React, { Fragment } from "react";
import Posts from "./../modules/Post/posts";
import Search from "./../components/search";

export const Profile = () => {
  return (
    <Fragment>
      <Search />
      <Posts />
    </Fragment>
  );
};
