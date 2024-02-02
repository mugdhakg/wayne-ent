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
  ProfilePhotoContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: "0.3rem",
    marginLeft: "1rem",
    textAlign: "left",
  },
  ProfilePhotoLabel: {
    marginBottom: "1rem",
  },
  ProfilePhotoInput: {
    display: "none",
  },
  ProfilePhotoButton: {
    backgroundColor: "#525252",
    color: "#fff",
    padding: "10px",
    width: "8rem", 
    height: "8rem",
    borderRadius: "50%", 
    cursor: "pointer",
    border: "none",
    outline: "none",
    textAlign: "center",
    minWidth: "120px",
  },
  ProfilePhotoButtonLabel: {
    fontSize: "0.90rem",
    display: "block",
    marginBottom: "0.5rem", 
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

const Registration = () => {
  const [formData, setFormData] = useState({
    profilePhoto: null,
    name: "",
    email: "",
    birthdate: "",
    phonenumber: "",
    dateofjoining: "",
    agreeToTerms: false,
  });

  const handleChange = (e) => {
    const { files, name, value, type, checked } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
      profilePhoto: name === "profilePhoto" ? files[0] : prevData.profilePhoto,
    }));
  };

  const handleButtonClick = () => {
    document.getElementById("profilePhotoInput").click();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  return (
    <div>
      <p style={styles.Heading}>
        Hi, *name*. Please fill the details below to complete your registration!
      </p>
      <div style={styles.Form}>
        <form onSubmit={handleSubmit}>
          <span style={styles.ProfilePhotoButtonLabel}>
                Profile Photo:
              </span>
          <div style={styles.ProfilePhotoContainer}>
            <label style={styles.ProfilePhotoLabel}>
              <button
                type="button"
                style={styles.ProfilePhotoButton}
                onClick={handleButtonClick}
              >
                Choose File
              </button>
              <input
                type="file"
                id="profilePhotoInput"
                name="profilePhoto"
                onChange={handleChange}
                accept="image/*"
                style={styles.ProfilePhotoInput}
              />
            </label>
          </div>
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
                required
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
                required
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
                required
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

export default Registration;
