import React, { Fragment, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import {
  loadOnePostRequest,
  deletePostRequest,
  loadAllPostRequest,
  updatePostRequest,
} from "./../../modules/Post/post.redux";
import { useParams } from "react-router-dom";
import "./styles.css";
import { Formik, Form, Field, ErrorMessage } from "formik";

const Post = (props) => {
  const { view } = props;

  const [updateState, setUpdateState] = useState(false);

  let location = useParams();
  const history = useNavigate();

  useEffect(() => {
    props.loadOnePostRequest(location.id);
  }, []);

  const handleClickDeletePost = (value) => {
    props.deletePostRequest(value);
    props.loadAllPostRequest();
    history("/profile");
  };

  return (
    <Fragment>
      {updateState === true ? (
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm col-md col-xl-12">
              <div className="form-container">
                <Formik
                  initialValues={{
                    title: view?.response?.data?.title,
                    text: view?.response?.data?.text,
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
                    props.updatePostRequest(view.response.data._id, valores);
                    resetForm();
                    setUpdateState(false);
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
                      <button
                        type="submit"
                        className="btn btn-primary"
                        onClick={(e) => {
                          e.preventDefault();
                          setUpdateState(false);
                        }}
                      >
                        Cancelar
                      </button>
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        </div>
      ) : (
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
          <button
            type="button"
            className="btn btn-primary"
            onClick={(e) => {
              e.preventDefault();
              setUpdateState(true);
            }}
          >
            Actualizar
          </button>
          <button
            type="button"
            className="btn btn-danger"
            onClick={(e) => {
              e.preventDefault();
              handleClickDeletePost(view.response.data._id);
            }}
          >
            Borrar
          </button>
        </div>
      )}
    </Fragment>
  );
};

const mapStateToProps = ({ post }) => ({ view: post.view });

const mapDispatchToProps = {
  loadOnePostRequest,
  deletePostRequest,
  loadAllPostRequest,
  updatePostRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(Post);
