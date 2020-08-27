import React, { useState } from "react"
import fancyFormStyle from "./fancy-form-style.module.scss"
import encode from "../helpers/encode"

const initialFormState = {
  name: "",
  lastName: "",
  companyName: "",
  function: "",
  sector: "",
  email: "",
  address: "",
  postcode: "",
  city: "",
  phonenumber: "",
  message: "",
  gender: "Heer",
}

export default function FormZakelijk() {
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
      body: encode({ "form-name": "fancy-contact", ...formState }),
    })
      .then(() => {
        alert("Successfuly sent!")
      })
      .catch(error => alert(error))

    e.preventDefault()
    setFormState(initialFormState)
  }
  return (
    <form
      name="fancy-contact"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
    >
      <div className={fancyFormStyle.inputs}>
        <div className={fancyFormStyle.formLeftPart}>
          <div className={fancyFormStyle.gender}>
            <input
              type="radio"
              value="Heer"
              name="gender"
              onChange={handleGenderChange}
              checked={formState.gender === "Heer"}
            />
            <span> {"  "}</span>
            <label>Heer</label>
            <span> {"  "}</span>
            <input
              type="radio"
              value="Mevrouw"
              name="gender"
              onChange={handleGenderChange}
              checked={formState.gender === "Mevrouw"}
            />
            <span> {"  "}</span>
            <label>Mevrouw</label>
          </div>
          <input
            type="text"
            placeholder="Voornaam *"
            name="name"
            value={formState.name}
            required
            onChange={handleInputChange}
          />
          <input
            type="text"
            placeholder="Achternaam *"
            name="lastName"
            value={formState.lastName}
            required
            onChange={handleInputChange}
          />
          <input
            type="text"
            placeholder="Bedrijf *"
            name="companyName"
            value={formState.companyName}
            required
            onChange={handleInputChange}
          />
          <input
            type="text"
            placeholder="Functie"
            name="function"
            value={formState.function}
            onChange={handleInputChange}
          />
          <input
            type="text"
            placeholder="Sector"
            name="sector"
            value={formState.sector}
            onChange={handleInputChange}
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
            placeholder="E-mail *"
            name="email"
            value={formState.email}
            onChange={handleInputChange}
          />
          <input
            type="number"
            placeholder="Telefoon *"
            name="phonenumber"
            value={formState.phonenumber}
            onChange={handleInputChange}
          />
          <input
            type="text"
            placeholder="Adres *"
            name="address"
            value={formState.address}
            onChange={handleInputChange}
          />
          <input
            type="text"
            placeholder="Postcode *"
            name="postcode"
            value={formState.postcode}
            onChange={handleInputChange}
          />
          <input
            type="text"
            placeholder="Plaats *"
            name="city"
            value={formState.city}
            onChange={handleInputChange}
          />
          <div className={fancyFormStyle.textAreaDiv}>
            <textarea
              name="message"
              style={{ width: "100%" }}
              rows="3"
              type="text"
              placeholder="Waar kunnen we u mee helpen?"
              value={formState.message}
              onChange={handleInputChange}
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
