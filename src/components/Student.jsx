import { useState, useEffect } from "react";
import axios from "axios";

function Student() {
  const [student, setStudent] = useState({
    id: "",
    name: "",
    age: "",
    dob: "",
    email: "",
  });

  useEffect(() => {
    getStudentDetails();
  }, []);

  const getStudentDetails = () => {
    axios
      .get("http://localhost:8080/api/v1/student")
      .then((response) => {
        const data = response.data[0]; // Assuming you only receive one student's data
        setStudent({
          id: data.id,
          name: data.name,
          age: data.age,
          dob: data.dob,
          email: data.email,
        });
      })
      .catch((error) => console.log(error));
  };

  return (
    <div
      style={{
        backgroundColor: "lavender",
        padding: "20px",
      }}
    >
      <h2
        style={{
          textAlign: "center",
        }}
      >
        Student Details
      </h2>
      <h5>Name: {student.name}</h5>
      <h5>Id: {student.id}</h5>
      <h5>Age: {student.age}</h5>
      <h5>Dob: {student.dob}</h5>
      <h5>Email: {student.email}</h5>
    </div>
  );
}

export default Student;
