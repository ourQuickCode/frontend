import React, { Fragment, useState } from "react";
import "./styles.css";

const BusinessCard = (e) => {
  /* const [inputTitle, setInputTitle] = useState("");
  const [inputText, setInputText] = useState(""); */

  /* const handleSumbit = () => {
    e.preventDefault();
    console.log("Formulario enviado");
  }; */

  return (
    <Fragment>
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm col-md col-xl-12">
            <div className="form-container">
              <form>
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    id="title"
                    placeholder="Titulo"
                  ></input>
                </div>
                <div class="form-group">
                  <textarea
                    class="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                  ></textarea>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default BusinessCard;
