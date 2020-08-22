import React from 'react'
import fancyFormStyle from './fancy-form-style.module.scss'

export default function FormZakelijk() {
    return (
        <form>
            <div className={fancyFormStyle.inputs}>
              <div className={fancyFormStyle.formLeftPart}>
                <input type="text" placeholder="Voornam *" />
                <input type="text" placeholder="Achternaam *" />
                <input type="text" placeholder="Functie " />
                <input type="text" placeholder="Bedrijf *" />
                <input type="text" placeholder="Sector *" />
                <div className={fancyFormStyle.gender} style={{display: 'none'}}>
                  <input type="radio" />
                  <span> {"  "}</span>
                  <label>Heer</label>
                  
                  <span> {"  "}</span>
                  <input type="radio" />
                  <span> {"  "}</span>
                  <label>Mevrouw</label>
                </div>
              </div>
              <div className={fancyFormStyle.formRightPart}>
                <input type="text" placeholder="E-mail *" />
                <input type="text" placeholder="Telefoon *" />
                <input type="text" placeholder="Adres *" />
                <input type="text" placeholder="Postcode *" />
                <input type="text" placeholder="Plats *" />
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
                  <button>Verzenden</button>
                </div>
              </div>
            </div>
          </form>
    )
}
