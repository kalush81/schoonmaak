import React, { useState } from "react"
import Icon from "../assets/asset3.svg"
import FormParticulier from "./form-particulier"
import FormZakelijk from "./form-zakelijk"

import fancyFormStyle from "./fancy-form-style.module.scss"

export default function MyFancyForm() {
  const [activeForm, toggleActiveForm] = useState(true)
  let myspan = {
      active: {
        color: '#209ecc',  
        background: 'white',
        border: '2px solid #209ecc',
        borderRadius: '17px',
        marginLeft: '2px',
        marginRight: '2px',
        //padding: '5px 10px'
      },
      noactive: {
          color: 'white'
      }

  }
  return (
    <div className="container">
      <div className={fancyFormStyle.fancyFormContainer}>
        <div className={fancyFormStyle.logoPanel}>
          <div className={fancyFormStyle.logo}>
            <Icon className={fancyFormStyle.icon} />
          </div>
          <div className={fancyFormStyle.descr}>
            <h2>Welcome</h2>
            <p>we'd love to hear from you!</p>
          </div>
        </div>
        <div className={fancyFormStyle.formWraper}>
          <div className={fancyFormStyle.switch}>
            <div className={fancyFormStyle.btnWrap}>
              <button onClick={() => toggleActiveForm(!activeForm)}>
                <span style={activeForm? myspan.active : myspan.noactive}>Particulier</span>
                <span style={activeForm? myspan.noactive : myspan.active}>Zakelijk</span>
              </button>
            </div>
          </div>

  <h2 style={{ textAlign: "center" }}>Solliciteren als {activeForm ? "Particulier" : 'Zakelijk'}</h2>

          {/* form particulier or form zakelijk*/}

          {activeForm ? <FormParticulier /> : <FormZakelijk />}
        </div>
      </div>
    </div>
  )
}
