import React, { Fragment } from "react";
import { Form as FormStyled, Button1 } from "./styles.jsx";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { connect } from "react-redux";
import { contactRequest } from "./../modules/Post/post.redux";

const Contact = (props) => {
  return (
    <Fragment>
      <div className="container">
        <div className="row">
          <div className="col">
            <FormStyled>
              <h1>¡Hablemos!</h1>
              <h6>
                Si estás interesado en mi trabajo o tienes alguna inquietud, no
                dudes en escribirme!
              </h6>

              <Formik
                initialValues={{
                  name: "",
                  number: "",
                  email: "",
                  message: "",
                }}
                validate={(valores) => {
                  let errores = {};

                  if (!valores.name) {
                    errores.name = "El nombre es obligatorio.";
                  } else if (
                    !/^[a-zA-ZÀ-ÿ0-9\\s\\,\\.\\-\\(\\)\\ \\]{1,40}$/.test(
                      valores.name
                    )
                  ) {
                    errores.name =
                      "El nombre es obligatorio. Caracteres permitidos [A-Z Ñ 0-9 , . - ( )].";
                  }

                  if (!valores.number) {
                    errores.number = "El numero de contacto es obligatorio.";
                  } else if (!/^\d{10}$/.test(valores.number)) {
                    errores.number =
                      "El numero es obligatorio. Caracteres permitidos [0-9].";
                  }

                  if (!valores.email) {
                    errores.email = "El correo es obligatorio.";
                  } else if (
                    !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
                      valores.email
                    )
                  ) {
                    errores.email = "El correo ingresado no es valido.";
                  }

                  if (!valores.message) {
                    errores.message = "El mensaje es obligatorio.";
                  }

                  return errores;
                }}
                onSubmit={(valores, { resetForm }) => {
                  console.log("Estamos activando el formulario", valores);
                  props.contactRequest(valores);
                  resetForm();
                }}
              >
                {({ errors }) => (
                  <Form>
                    <div className="form-group">
                      <label for="formGroupExampleInput">Nombre</label>
                      <Field
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        minlength="1"
                        maxlength="40"
                      ></Field>
                      <ErrorMessage
                        name="name"
                        component={() => (
                          <p className="text-danger">{errors.name}</p>
                        )}
                      />
                    </div>
                    <div className="form-group">
                      <label for="formGroupExampleInput2">
                        Numero de contacto
                      </label>
                      <Field
                        type="text"
                        className="form-control"
                        id="number"
                        name="number"
                        minlength="10"
                        maxlength="10"
                      ></Field>
                      <ErrorMessage
                        name="number"
                        component={() => (
                          <p className="text-danger">{errors.number}</p>
                        )}
                      />
                    </div>
                    <div className="form-group">
                      <label for="formGroupExampleInput2">
                        Correo electronico
                      </label>
                      <Field
                        type="text"
                        className="form-control"
                        id="email"
                        name="email"
                        minlength="6"
                        maxlength="60"
                      ></Field>
                      <ErrorMessage
                        name="email"
                        component={() => (
                          <p className="text-danger">{errors.email}</p>
                        )}
                      />
                    </div>
                    <div className="form-group">
                      <label for="exampleFormControlTextarea1">Mensaje</label>
                      <Field
                        as="textarea"
                        className="form-control"
                        id="message"
                        name="message"
                        rows="7"
                        minlength="1"
                        maxlength="1500"
                      ></Field>
                      <ErrorMessage
                        name="message"
                        component={() => (
                          <p className="text-danger">{errors.message}</p>
                        )}
                      />
                    </div>
                    <Button1
                      className="contactButton"
                      name="button"
                      type="submit"
                    >
                      Enviar
                    </Button1>
                  </Form>
                )}
              </Formik>
            </FormStyled>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

const mapDispatchToProps = { contactRequest };

export default connect(null, mapDispatchToProps)(Contact);
