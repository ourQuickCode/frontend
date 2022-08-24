import React, { Fragment } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import "./styles.css";
import { connect } from "react-redux";
import {
  loadAllPostRequest,
  createPostRequest,
} from "./../../modules/Post/post.redux";

const BusinessCard = (props) => {
  //opcion numero 1 para el manejo de formularios con formik sin el uso de componentes
  {
    /* <Fragment>
    <div className="container">
      <div className="row">
        <div className="col-12 col-sm col-md col-xl-12">
          <div className="form-container">
            <Formik
              initialValues={{
                title: "",
                text: "",
              }}
              validate={(valores) => {
                let errores = {};

                if (valores.title !== "" && !valores.title) {
                  errores.title = "El titulo es obligatorio";
                } else if (!/^[a-zA-ZÀ-ÿ\s]{1,35}$/.test(valores.title)) {
                  errores.title = "El titulo no puede contener numeros";
                }

                if (valores.text !== "" && !valores.text) {
                  errores.text = "El texto es obligatorio";
                } else if (!/^[a-zA-ZÀ-ÿ\s]{1,35}$/.test(valores.text)) {
                  errores.text = "El texto no puede contener numeros";
                }

                return errores;
              }}
              onSubmit={(valore, { resetForm }) => {
                resetForm();
                console.log("formulario enviado");
              }}
            >
              {({
                values,
                errors,
                handleSubmit,
                handleChange,
                handleBlur,
                touched,
              }) => (
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      id="title"
                      name="title"
                      placeholder="Titulo"
                      value={values.title}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    ></input>
                    {touched.title && errors.title && (
                      <p className="text-danger">{errors.title}</p>
                    )}
                  </div>
                  <div className="form-group">
                    <textarea
                      className="form-control"
                      id="text"
                      name="text"
                      rows="3"
                      value={values.text}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    ></textarea>
                    {touched.title && errors.text && (
                      <p className="text-danger">{errors.text}</p>
                    )}
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Crear post
                  </button>
                </form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  </Fragment>; */
  }
  return (
    <Fragment>
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm col-md col-xl-12">
            <div className="form-container">
              <Formik
                initialValues={{
                  title: "",
                  text: "",
                }}
                validate={(valores) => {
                  let errores = {};

                  if (!valores.title) {
                    errores.title = "El titulo es obligatorio";
                  } else if (!/^[a-zA-ZÀ-ÿ\s]{1,35}$/.test(valores.title)) {
                    errores.title = "El titulo no puede contener numeros";
                  }

                  if (!valores.text) {
                    errores.text = "El texto es obligatorio";
                  }

                  return errores;
                }}
                onSubmit={(valores, { resetForm }) => {
                  props.createPostRequest(valores);
                  props.loadAllPostRequest();
                  props.loadAllPostRequest();
                  resetForm();
                }}
              >
                {({ errors }) => (
                  <Form>
                    <div className="form-group">
                      <Field
                        type="text"
                        className="form-control"
                        id="title"
                        name="title"
                        placeholder="Titulo"
                      ></Field>
                      <ErrorMessage
                        name="title"
                        component={() => (
                          <p className="text-danger">{errors.title}</p>
                        )}
                      />
                    </div>
                    <div className="form-group">
                      <Field
                        as="textarea"
                        className="form-control"
                        id="text"
                        name="text"
                        rows="3"
                      ></Field>
                      <ErrorMessage
                        name="text"
                        component={() => (
                          <p className="text-danger">{errors.text}</p>
                        )}
                      />
                    </div>
                    <button type="submit" className="btn btn-primary">
                      Crear post
                    </button>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

const mapDispatchToProps = {
  createPostRequest,
  loadAllPostRequest,
};

export default connect(null, mapDispatchToProps)(BusinessCard);
