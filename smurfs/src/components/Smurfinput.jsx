import React, { useState } from "react";
import { connect } from "react-redux";
import { addSmurf } from "../actions/Actions";
import "./App.css";

const Form = props => {
  const [smurf, setsmurf] = useState({ name: "", age: "", height: "" });

  const changeHandler = e => {
    setsmurf({ ...smurf, [e.target.name]: e.target.value });
  };

  const submitHandler = e => {
    e.preventDefault();
    props.addSmurf(smurf);
    setsmurf({ name: "", age: "", height: "" });
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="name"> Name: </label>
          <input
            onChange={changeHandler}
            name="name"
            type="text"
            placeholder="Type Name"
            value={smurf.name}
          />
        </div>
        <div>
          <label htmlFor="email">Age: </label>
          <input
            onChange={changeHandler}
            name="age"
            type="text"
            placeholder="Type Age"
            value={smurf.age}
          />
        </div>
        <div>
          <label htmlFor="position">Height: </label>
          <input
            onChange={changeHandler}
            name="height"
            type="text"
            placeholder="Type Height"
            value={smurf.height}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs
  };
};

export default connect(
  mapStateToProps,
  { addSmurf }
)(Form); 