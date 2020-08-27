import React, { useState } from "react"
import formStyle from "./form.module.scss"
import encode from "../helpers/encode"

export default function Form() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    number: "",
    checked: false
  })

  const handleRadioClick = e => {
    console.log('radio event test: ', e.target.checked)
    setFormState({
      ...formState,
      checked: true
    })
    
  }

  const handleChange = e => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  
  const handleSubmit = e => {
    //console.log({...formState})
    if (formState.checked) {
      console.log('form can be send', formState)
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...formState })
    })
      .then(() => alert("Success!"))
      .catch(error => alert(error));

    //e.preventDefault();
    setFormState({
      name: '',
      email: '',
      number: '',
      checked: false
    })
    }
  };

  return (
    <div className="full-width-wrap form-full-width">
      <div className="container form-container">
        <div className={formStyle.one}>
          <h2>Vraag vrijblijvend een gesprek met ons aan</h2>
          <p className={formStyle.para}>
            VUL HIERONDER JE CONTACTGEGEVENS IN EN WIJ NEMEN CONTACT MET JE OP
          </p>
        </div>

        <div className={formStyle.two}>
          <form 
          name="contact"
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          className={formStyle.container} 
          onSubmit={handleSubmit}>
            <input type="hidden" name="form-name" value="contact" />
            <div>
              <label htmlFor="name">naam</label>
              <input
                className={formStyle.input}
                name="name"
                type="text"
                onChange={handleChange}
                value={formState.name}
                required
              />
            </div>
            <div>
              <label htmlFor="number">telefoonnummer</label>
              <input
                name="number"
                type="number"
                onChange={handleChange}
                value={formState.number}
                required
              />
            </div>
            <div>
              <label htmlFor="e-mail">e-mail</label>
              <input
                name="email"
                type="email"
                onChange={handleChange}
                value={formState.email}
                required
              />
            </div>
            <button type="submit" disabled={!formState.checked}>stuur bericht </button>
          </form>
        </div>

        <div className={formStyle.three}>
          <input type="radio" onClick={handleRadioClick} required/>
          <span>&nbsp;&nbsp;</span>
          <p style={{ display: "inline" }}>
          <span>&nbsp;&nbsp;</span>
            Ik ga akkoord met Schoonmaak Loont Privacy Beleid.
          </p>
        </div>
      </div>
    </div>
  )
}
