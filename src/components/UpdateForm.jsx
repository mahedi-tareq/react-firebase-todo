import React, { useEffect, useState } from "react";
import { db } from "../firebaseConfig";
import firebase from "firebase";
import { useHistory } from "react-router-dom";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";

export default function UpdateForm(props) {
  const history = useHistory();

  const updateData = async () => {
    const cityRef = db
      .collection("allEmploye")
      .doc(props.history.location.state.id);
    const doc = await cityRef.get();
    if (!doc.exists) {
      console.log("No such document!");
    } else {
      setUserInput(doc.data());
    }
  };

  //calling data
  useEffect(() => {
    updateData();
  }, []);

  const [userInput, setUserInput] = useState([]);
  console.log("valuee", userInput);

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
    db.collection("allEmploye")
      .doc(props.history.location.state.id)
      .set(
        {
          ...userInput,
        },
        { merge: true }
      );

    history.push("/");
  };

  return (
    <>
      <form autoComplete="off" onSubmit={handleSubmit}>
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
        <Button type="submit" variant="contained" color="#001f19">
          Update
        </Button>
      </form>
    </>
  );
}
