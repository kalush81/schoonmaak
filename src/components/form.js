import React, { useState } from "react"
import formStyle from "./form.module.scss"

export default function Form() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    number: "",
  })

  const handleChange = e => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = e => {
    e.preventDefault()
    console.log("form submitted")
    return null
  }

  return (
    <div className="full-width-wrap form-full-width">
      <div className="container form-container">

        <div className={formStyle.one}>
          <h1>Vraag vrijblijvend een gesprek met ons aan</h1>
          <p className={formStyle.para}>
            VUL HIERONDER JE CONTACTGEGEVENS IN EN WIJ NEMEN CONTACT MET JE OP
          </p>
        </div>

        <div className={formStyle.two}>
          <form className={formStyle.container} onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">naam</label>
              <input
                className={formStyle.input}
                name="name"
                type="text"
                onChange={handleChange}
                value={formState.name}
              />
            </div>
            <div>
              <label htmlFor="number">telefoonnummer</label>
              <input
                name="number"
                type="number"
                onChange={handleChange}
                value={formState.number}
              />
            </div>
            <div>
              <label htmlFor="e-mail">e-mail</label>
              <input
                name="email"
                type="email"
                onChange={handleChange}
                value={formState.email}
              />
            </div>
            <button type="submit">stuur bericht </button>
          </form>
        </div>

        <div className={formStyle.three}>
          <input type="radio" />
          {'  '}
          <p style={{ display: "inline" }}>
            Ik ga akkoord met Schoonmaak Loont Privacy Beleid.
          </p>
        </div>
      </div>
    </div>
  )
}
