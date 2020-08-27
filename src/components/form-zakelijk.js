import React from 'react'
import fancyFormStyle from './fancy-form-style.module.scss'

export default function FormZakelijk() {
  const handleSubmit = e => {
    console.log('you clicked submit button on zakelijk')
  }
    return (
        <form onSubmit={handleSubmit}>
            <div className={fancyFormStyle.inputs}>
              <div className={fancyFormStyle.formLeftPart}>
                <div className={fancyFormStyle.gender} >
                  <input type="radio" value="Heer"/>
                  <span> {"  "}</span>
                  <label>Heer</label>
                  <span> {"  "}</span>
                  <input type="radio" value="Mevrouw"/>
                  <span> {"  "}</span>
                  <label>Mevrouw</label>
                </div>
                <input type="text" placeholder="Voornaam *" />
                <input type="text" placeholder="Achternaam *" />
                <input type="text" placeholder="Functie " />
                <input type="text" placeholder="Bedrijf *" />
                <input type="text" placeholder="Sector *" />
              </div>
              <div className={fancyFormStyle.formRightPart}>
              <div className={fancyFormStyle.gender} style={{visibility: 'hidden'}}>
                  <input type="radio" />
                  <span> {"  "}</span>
                  <label>Heer</label>            
                  <span> {"  "}</span>
                  <input type="radio" />
                  <span> {"  "}</span>
                  <label>Mevrouw</label>
                </div>
                <input type="text" placeholder="E-mail *" />
                <input type="text" placeholder="Telefoon *" />
                <input type="text" placeholder="Adres *" />
                <input type="text" placeholder="Postcode *" />
                <input type="text" placeholder="Plaats *" />
                <div className={fancyFormStyle.textAreaDiv}>
                  <textarea
                    style={{ width: "100%" }}
                    rows="3"
                    type="text"
                    placeholder="Waar kunnen we u mee helpen? *"
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
