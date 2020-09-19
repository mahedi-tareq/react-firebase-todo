import React, { useEffect, useState } from "react";
import { db } from "../firebaseConfig";
import firebase from "firebase";
import { useHistory } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

export default function EmplyeForm(props) {
  const history = useHistory();

  const [userInput, setUserInput] = useState([
    {
      name: "",
      email: "",
      designation: "",
    },
  ]);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setUserInput({
      ...userInput,
      [name]: value,
    });
  };

  //Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    db.collection("allEmploye").add({
      ...userInput,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    history.push("/");
  };

  return (
    <>
      <form className="form_wraper" onSubmit={handleSubmit}>
        <TextField
          onChange={handleInput}
          name="name"
          type="text"
          value={userInput.name}
          placeholder="Name"
          variant="outlined"
        />
        <TextField
          onChange={handleInput}
          name="email"
          type="email"
          value={userInput.email}
          placeholder="Email"
          variant="outlined"
        />
        <TextField
          onChange={handleInput}
          name="designation"
          type="text"
          value={userInput.designation}
          placeholder="Designation"
          variant="outlined"
        />
        <Button type="submit" variant="contained" color="secondary">
          Add
        </Button>
      </form>
    </>
  );
}
