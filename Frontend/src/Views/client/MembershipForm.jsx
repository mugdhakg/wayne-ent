import React, { useState } from "react";

const styles = {
  Heading: {
    textAlign: "center",
    fontFamily: "Poppins",
  },

  Form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    fontFamily: "Poppins",
    fontSize: ".90rem",
    border: "1px solid #ddd",
    borderRadius: "10px",
    padding: "20px",
    width: "80%",
    margin: "auto",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#fff",
  },
  LabelContainer: {
    display: "flex",
    flexDirection: "column",
    marginBottom: "0.3rem",
    marginLeft: "1rem",
    textAlign: "left",
  },
  Labels: {
    marginBottom: "1rem",
  },
  Input: {
    marginBottom: "1rem",
    padding: "3px",
    width: "100%",
    boxSizing: "border-box",
    border: "1px solid #ccc",
    borderRadius: "5px",
  },
  CheckboxContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "1rem",
  },
  CheckboxLabel: {
    fontSize: "0.90rem",
    marginRight: "1rem",
  },
  CheckboxInput: {
    marginRight: "0.5rem",
    marginLeft: "0.5rem",
  },
  ButtonContainer: {
    display: "flex",
    justifyContent: "center",
    marginTop: "1rem",
  },
  Button: {
    marginTop: "1rem",
    padding: "10px",
    backgroundColor: "#0E050F",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

const MembershipForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    birthdate: "",
    phonenumber: "",
    dateofjoining: "",
    agreeToTerms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  return (
    <div>
      <p style={styles.Heading}>
        Hi, *name*. Please fill the registration form below to become a member of *club name*! {/*Gotta change this line to match each club. And maybe add more info (or whatever needs to be added). Can be done after the clubs are created.*/}
      </p>
      <div style={styles.Form}>
        <form onSubmit={handleSubmit}>
          <div style={styles.LabelContainer}>
            <label style={styles.Labels}>
              Name:
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                style={styles.Input}
              />
            </label>
          </div>
          <div style={styles.LabelContainer}>
            <label style={styles.Labels}>
              Email:
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                style={styles.Input}
              />
            </label>
          </div>
          <div style={styles.LabelContainer}>
            <label style={styles.Labels}>
              Birthdate:
              <input
                type="date"
                name="birthdate"
                value={formData.birthdate}
                onChange={handleChange}
                style={styles.Input}
              />
            </label>
          </div>
          <div style={styles.LabelContainer}>
            <label style={styles.Labels}>
              Phone Number:
              <input
                type="tel"
                name="phonenumber"
                value={formData.phonenumber}
                onChange={handleChange}
                style={styles.Input}
              />
            </label>
          </div>
          <div style={styles.LabelContainer}>
            <label style={styles.Labels}>
              Date:
              <input
                type="date"
                name="dateofjoining"
                value={formData.dateofjoining}
                onChange={handleChange}
                style={styles.Input}
              />
            </label>
          </div>
          <div style={styles.LabelContainer}>
            <div style={styles.CheckboxContainer}>
              <label style={styles.CheckboxLabel}>
                Agree to Terms:
                <input
                  type="checkbox"
                  name="agreeToTerms"
                  checked={formData.agreeToTerms}
                  onChange={handleChange}
                  required
                  style={styles.CheckboxInput}
                />
              </label>
            </div>
          </div>
          <div style={styles.ButtonContainer}>
            <button type="submit" style={styles.Button}>
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MembershipForm;
