import React from "react"
import formsStyle from "./forms.module.scss"

export default function Forms() {
  return (
    <div className="container">
      <div className={formsStyle.container}>
        <div className={formsStyle.formParticulier}>
          <form>
            <h1>Particulier</h1>
            <div className={formsStyle.sexStyleRow}>
              <p style={{marginRight: '15px'}}>Aanhef * </p>
              <div>
                <input
                  type="radio"
                  id="male"
                  name="gender"
                  value="male"
                  required
                />
                <label style={{ display: "inline" }} htmlFor="male">
                  Male
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  id="female"
                  name="gender"
                  value="female"
                  required
                />
                <label style={{ display: "inline" }} htmlFor="female">
                  Female
                </label>
              </div>
            </div>
            <div className={formsStyle.firstAndLastName}>
              <div>
                <label htmlFor="firstName">Voornaam</label>
                <input
                  type="text"
                  name="firstName"
                  
                  value=""
                  required
                />
              </div>
              <div>
                <label htmlFor="lastName">Achternaam</label>
                <input
                  type="text"
                  name="lastName"
                  
                  value=""
                  required
                />
              </div>
            </div>
            <div className={formsStyle.firstAndLastName}>
              <div>
                <label htmlFor="email">E-mail</label>
                <input
                  type="text"
                  name="email"
                  
                  value=""
                  required
                />
              </div>
              <div>
                <label htmlFor="phone">Telefoon</label>
                <input
                  type="number"
                  name="phone"
                  
                  value=""
                  required
                />
              </div>
            </div>
            
            <div className={formsStyle.lastContainer}>
              <div className={formsStyle.bedrijf}>
                <label htmlFor="company">Bedrijf</label>
                <input
                  type="text"
                  name="company"
                  
                  value=""
                  required
                />
              </div>
              <div className={formsStyle.sector}>
              <label htmlFor="sector">Sector</label>
                <input
                  type="text"
                  name="sector"
                 
                  value=""
                  required
                />
              </div>
              
              <div className={formsStyle.message}>
              <label htmlFor="message">Waar kunnen we u mee helpen</label>
                <textarea
                  rows='5'
                  type="text"
                  name="message"
                  
                  value=""
                  required
                />
              </div>
              <div className={formsStyle.agreement}>
              <input
              
                  type="radio"
                  
                  name="agreement"
                  value="male"
                  required
                />
                <label htmlFor="agreement">
                  <span>Ja, ik ben graag scherp op het laatste nieuws en meld me aan voor de nieuwsbrief van Schoonmaak Loont</span>
                </label>
              </div>
              <div className={formsStyle.sendBtnAndRequireNote}>
                <button type="submit">Verzenden</button>
                <span>* Verplicht veld</span>
              </div>
            </div>
          </form>
        </div>
        <div className={formsStyle.formZakelijk}>
        <form>
            <h1>Particulier</h1>
            <div className={formsStyle.sexStyleRow}>
              <p style={{marginRight: '15px'}}>Aanhef * </p>
              <div>
                <input
                  type="radio"
                  id="male"
                  name="gender"
                  value="male"
                  required
                />
                <label style={{ display: "inline" }} htmlFor="male">
                  Male
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  id="female"
                  name="gender"
                  value="female"
                  required
                />
                <label style={{ display: "inline" }} htmlFor="female">
                  Female
                </label>
              </div>
            </div>
            <div className={formsStyle.firstAndLastName}>
              <div>
                <label htmlFor="firstName">Voornaam</label>
                <input
                  type="text"
                  name="firstName"
                 
                  value=""
                  required
                />
              </div>
              <div>
                <label htmlFor="lastName">Achternaam</label>
                <input
                  type="text"
                  name="lastName"
                 
                  value=""
                  required
                />
              </div>
            </div>
            <div className={formsStyle.firstAndLastName}>
              <div>
                <label htmlFor="email">E-mail</label>
                <input
                  type="text"
                  name="email"
                
                  value=""
                  required
                />
              </div>
              <div>
                <label htmlFor="phone">Telefoon</label>
                <input
                  type="number"
                  name="phone"
                  
                  value=""
                  required
                />
              </div>
            </div>
           
            <div className={formsStyle.lastContainer}>
              <div className={formsStyle.bedrijf}>
                <label htmlFor="company">Bedrijf</label>
                <input
                  type="text"
                  name="company"
                 
                  value=""
                  required
                />
              </div>
              <div className={formsStyle.sector}>
              <label htmlFor="sector">Sector</label>
                <input
                  type="text"
                  name="sector"
               
                  value=""
                  required
                />
              </div>
              
              <div className={formsStyle.message}>
              <label htmlFor="message">Waar kunnen we u mee helpen</label>
                <textarea
                  type="text"
                  name="message"
                  rows='5'
                  value=""
                  required
                />
              </div>
              <div className={formsStyle.agreement}>
              <input
              
                  type="radio"
                  
                  name="agreement"
                  value="male"
                  required
                />
                <label htmlFor="agreement">
                  <span>Ja, ik ben graag scherp op het laatste nieuws en meld me aan voor de nieuwsbrief van Schoonmaak Loont</span>
                </label>
              </div>
              <div className={formsStyle.sendBtnAndRequireNote}>
                <button type="submit">Verzenden</button>
                <span>* Verplicht veld</span>
              </div>
            </div>
          </form>
        </div>
      </div>

      
    </div>
  )
}
