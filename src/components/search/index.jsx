import React, { Fragment } from "react";
import { Formik, Form, Field } from "formik";
import { FormContainer } from "./styles.jsx";
import { connect } from "react-redux";
import {
  loadAllPostRequest,
  searchRequest,
} from "./../../modules/Post/post.redux";

const Search = (props) => {
  return (
    <Fragment>
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm col-md col-xl-12">
            <FormContainer className="form-container">
              <Formik
                initialValues={{
                  search: "",
                }}
                onSubmit={(valores, { resetForm }) => {
                  props.searchRequest(valores);
                  resetForm();
                }}
              >
                {({}) => (
                  <Form className="form">
                    <div className="form-group input-search">
                      <Field
                        type="text"
                        className="form-control"
                        id="search"
                        name="search"
                        placeholder="Nombre del post"
                        minlength="1"
                        maxlength="40"
                      ></Field>
                    </div>
                    <button type="submit" className="btn btn-primary">
                      Buscar
                    </button>
                  </Form>
                )}
              </Formik>
            </FormContainer>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

const mapDispatchToProps = {
  searchRequest,
  loadAllPostRequest,
};

export default connect(null, mapDispatchToProps)(Search);
