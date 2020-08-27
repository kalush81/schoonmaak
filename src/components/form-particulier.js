import React, { useState } from "react"
import fancyFormStyle from "./fancy-form-style.module.scss"
import encode from "../helpers/encode"

const initialFormState = {
  name: "",
  lastName: "",
  companyName: "",
  sector: "",
  email: "",
  phonenumber: "",
  message: "",
  gender: "Heer",
}

export default function FormParticulier() {
  const [formState, setFormState] = useState(initialFormState)
  const handleGenderChange = e => {
    setFormState({
      ...formState,
      gender: e.target.value,
    })
  }
  const handleInputChange = e => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }
  const handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "fancy-contact-particulier", ...formState }),
    })
      .then(() => {
        console.log("sent from fancy contact: ", formState)
        alert("Successfuly sent!")
      })
      .catch(error => alert(error))
    e.preventDefault()
    setFormState(initialFormState)

  }
  return (
    <form
      name="fancy-contact-particulier"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
    >
      <div className={fancyFormStyle.inputs}>
        <div className={fancyFormStyle.formLeftPart}>
          <div className={fancyFormStyle.gender}>
            <input
              name='gender'
              type="radio"
              value="Heer"
              checked={formState.gender === "Heer"}
              onChange={handleGenderChange}
            />
            <span> {"  "}</span>
            <label>Heer</label>
            <span> {"  "}</span>
            <input
              name='gender'
              type="radio"
              value="Mevrouw"
              checked={formState.gender === "Mevrouw"}
              onChange={handleGenderChange}
            />
            <span> {"  "}</span>
            <label>Mevrouw</label>
          </div>
          <input
            type="text"
            name="name"
            placeholder="Voornaam *"
            onChange={handleInputChange}
            value={formState.name}
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder="Achternaam *"
            onChange={handleInputChange}
            value={formState.lastName}
            required
          />
          <input
            type="text"
            name="companyName"
            placeholder="Bedrijf"
            onChange={handleInputChange}
            value={formState.companyName} 
          />
          <input
            type="text"
            name="sector"
            placeholder="Sector"
            onChange={handleInputChange}
            value={formState.sector}
          />
        </div>
        <div className={fancyFormStyle.formRightPart}>
          <div
            className={fancyFormStyle.gender}
            style={{ visibility: "hidden" }}
          >
            <input type="radio" />
            <span> {"  "}</span>
            <label>Heer</label>
            <span> {"  "}</span>
            <input type="radio" />
            <span> {"  "}</span>
            <label>Mevrouw</label>
          </div>
          <input
            type="text"
            name="email"
            placeholder="E-mail *"
            onChange={handleInputChange}
            value={formState.email}
            required
          />
          <input
            type="number"
            name="phonenumber"
            placeholder="Telefoon"
            onChange={handleInputChange}
            value={formState.phonenumber}
          />
          <div className={fancyFormStyle.textAreaDiv}>
            <textarea
              name="message"
              style={{ width: "100%" }}
              rows="3"
              type="text"
              placeholder="Waar kunnen we u mee helpen?"
              onChange={handleInputChange}
              value={formState.message}
            />
          </div>
          {/* <input type="text" placeholder="Enter Your Answer *" /> */}
          <div className={fancyFormStyle.buttonDiv}>
            <button type="submit">Verzenden</button>
          </div>
        </div>
      </div>
    </form>
  )
}
