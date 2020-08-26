import React from 'react'
import fancyFormStyle from './fancy-form-style.module.scss'

export default function FormParticulier() {
    return (
        <form>
            <div className={fancyFormStyle.inputs}>
              <div className={fancyFormStyle.formLeftPart}>
                <div className={fancyFormStyle.gender}>
                  <input type="radio" />
                  <span> {"  "}</span>
                  <label>Heer</label>
                  <span> {"  "}</span>
                  <input type="radio" />
                  <span> {"  "}</span>
                  <label>Mevrouw</label>
                </div>
                <input type="text" placeholder="Voornaam *" />
                <input type="text" placeholder="Achternaam *" />
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
