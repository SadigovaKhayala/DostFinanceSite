import React, { useState } from "react";

// Function to download the db as a JSON file
const downloadDB = (db) => {
  const blob = new Blob([JSON.stringify(db, null, 2)], {
    type: "application/json",
  });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "db.json"; // File name
  link.click();
};

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [message, setMessage] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    if (!email || !password || !fullName) {
      setMessage("Please enter all fields.");
      return;
    }

    const newUser = { email, password, fullName };
    let db;

    try {
      // Fetch the current database from db.json
      const response = await fetch("/db.json");
      db = await response.json();

      // Check if the email already exists
      const existingUser = db.users.find((user) => user.email === email);
      if (existingUser) {
        setMessage("Email already exists.");
        return;
      }

      // Add the new user to the database
      db.users.push(newUser);

      // Download the updated db as db.json
      downloadDB(db);

      setMessage(
        "Registration successful! You can download the updated db.json file."
      );
    } catch (error) {
      setMessage("Error loading or saving database.");
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Full Name:</label>
          <input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        </div>
        <button type="submit">Register</button>
      </form>

      {message && <p>{message}</p>}
    </div>
  );
};

export default Register;
