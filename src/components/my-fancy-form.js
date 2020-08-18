import React from "react"
import Icon from "../assets/asset3.svg"
import fancyFormStyle from "./fancy-form-style.module.scss"

export default function MyFancyForm() {
  return (
    <div className="container">
      <div className={fancyFormStyle.fancyFormContainer}>
        <div className={fancyFormStyle.logoPanel}>
            <div className={fancyFormStyle.logo}>
                <Icon  className={fancyFormStyle.icon}/>
            </div>
            <div className={fancyFormStyle.descr}>
                <h2>Welcome</h2>
                <p>we'd love to hear from you!</p>
            </div>
        </div>
        <div className={fancyFormStyle.formWraper}>
          <div className={fancyFormStyle.switch}>
            <div className={fancyFormStyle.btnWrap}>
              <button className={fancyFormStyle.active}>Particulier</button>
              <button>Zakelijk</button>
            </div>
          </div>

          <h2 style={{ textAlign: "center" }}>Solliciteren als Particulier</h2>

          <form>
            <div className={fancyFormStyle.inputs}>
              <div className={fancyFormStyle.formLeftPart}>
                <input type="text" placeholder="Voornam *" />
                <input type="text" placeholder="Achternaam *" />
                <input type="text" placeholder="Bedrijf *" />
                <input type="text" placeholder="Sector *" />
                <div className={fancyFormStyle.gender}>
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
        </div>
      </div>
    </div>
  )
}
