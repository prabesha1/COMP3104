import './App.css';
import React, { useState } from "react";
import StudentForm from "./components/StudentForm.js";
import StudentList from "./components/StudentList.js";

const App = () => {
  const [students, setStudents] = useState([]);

  const addStudent = (student) => {
    setStudents([...students, student]);
  };

  return (
    <div className="App">
      <h1>Student Information System</h1>
      <h2>Student Name: Prabesh Shrestha</h2>
      <h3>Student ID: 101538718</h3>
      <StudentForm addStudent={addStudent} />
      <StudentList students={students} />
    </div>
  );
};

export default App;
