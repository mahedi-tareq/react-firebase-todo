import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { db } from "../firebaseConfig";
import EditIcon from "@material-ui/icons/Edit";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";

export default function EmployeeList() {
  const history = useHistory();

  const getData = async () => {
    db.collection("allEmploye").onSnapshot((data) => {
      let employee = [];
      data.docs.forEach((doc) => {
        employee.push({
          todoId: doc.id,
          name: doc.data().name,
          email: doc.data().email,
          designation: doc.data().designation,
        });
      });
      setEmployes(employee);
    });
  };
  //Import data from Firestore
  useEffect(() => {
    getData();
  }, []);

  //State
  const [employes, setEmployes] = useState([""]);

  //Delete
  const handleDelete = (id) => {
    db.collection("allEmploye").doc(id).delete();
  };

  //Update
  const handleUpdate = (id) => {
    history.push("/update-todo", { id: id });
  };

  return (
    <div className="list_wraper">
      {/* custom table */}
      <ul class="responsive-table">
        <li class="table-header">
          <div class="col col-1">Name</div>
          <div class="col col-2">Email</div>
          <div class="col col-3">Designation</div>
          <div class="col col-4">Update</div>
          <div class="col col-4">Delete</div>
        </li>

        {employes.map((em, indx) => {
          return (
            <li class="table-row" key={indx}>
              <div class="col col-1" data-label="Job Id">
                {em.name}
              </div>
              <div class="col col-2" data-label="Customer Name">
                {em.email}
              </div>
              <div class="col col-3" data-label="Amount">
                {em.designation}
              </div>
              <div class="col col-4 update-btn" data-label="Payment Status">
                <EditIcon onClick={() => handleUpdate(em.todoId)} />
              </div>
              <div class="col col-5 delete-btn" data-label="Amount">
                <DeleteForeverIcon onClick={() => handleDelete(em.todoId)} />
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
