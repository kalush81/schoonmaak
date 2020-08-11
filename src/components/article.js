import React from "react"
import { text } from "../../static/text"

export default function Article({children, tekst, textSize}) {
  
  return (
    <article className="text">
      <div className="container">
        <h3 style={{textTransform: textSize}}>{tekst === 'particulier2' ? '' : tekst}</h3>
        <p style={{marginBottom: '0'}}>{text[tekst]}</p>
        {children}
      </div>
    </article>
  )
}
