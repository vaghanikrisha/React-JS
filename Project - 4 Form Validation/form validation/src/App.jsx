import { useState } from "react";
import './App.css'; // Add this import statement for the CSS

function App() {
  const [input, setInput] = useState([
    { id: Math.floor(Math.random() * 10000), name: "", email: "", salary: "", isEditing: true },
  ]);

  const addMore = () => {
    let newfield = {
      id: Math.floor(Math.random() * 10000),
      name: "",
      email: "",
      salary: "",
      isEditing: true,
    };
    setInput([...input, newfield]);
  };

  const removeBtn = (id) => {
    let deleteData = input.filter((val) => val.id !== id);
    setInput(deleteData);
  };


  const toggleEdit = (id, index) => {
    setInput(
      input.map((val, i) =>
        val.id === id && i !== 0 // Skip the first input
          ? {
            ...val,
            isEditing: val.name.trim() === "" || val.email.trim() === "" || val.salary.trim() === "" ? true : !val.isEditing,
          }
          : val
      )
    );
  };

  const handleInputChange = (id, field, value) => {
    setInput(
      input.map((val) =>
        val.id === id ? { ...val, [field]: value } : val
      )
    );
  };

  const canAddMore = input[input.length - 1].name.trim() !== "" &&
                     input[input.length - 1].email.trim() !== "" &&
                     input[input.length - 1].salary.trim() !== "";
  return (
    <div align="center" className="form-container">
      <h2>Employee Details Form</h2>

      {input.map((val, index) => (
        <div key={val.id} className="input-wrapper">
          <div>
            Name:{" "}
            <input
              type="text"
              value={val.name}
              onChange={(e) => handleInputChange(val.id, "name", e.target.value)}
              disabled={index !== 0 && !val.isEditing} // First input always editable
            />{" "}
             &nbsp; Email:{" "}
            <input
              type="email"
              value={val.email}
              onChange={(e) => handleInputChange(val.id, "email", e.target.value)}
              disabled={index !== 0 && !val.isEditing} // First input always editable
            />{" "}
             &nbsp; Salary:{" "}
            <input
              type="number"
              value={val.salary}
              onChange={(e) => handleInputChange(val.id, "salary", e.target.value)}
              disabled={index !== 0 && !val.isEditing} // First input always editable
            />{" "}
            &nbsp;
            {index !== 0 && (
              <>
                <button onClick={() => toggleEdit(val.id, index)}>
                  {val.isEditing ? "Done" : "Edit"}
                </button>
                &nbsp;
                <button onClick={() => removeBtn(val.id)}>Remove</button>
              </>
            )}
          </div>
        </div>
      ))}
      <button className="add-btn" onClick={addMore} disabled={!canAddMore}>
        Add
      </button>
    </div>
  );
}

export default App;
