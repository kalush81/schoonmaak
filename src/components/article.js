import React from "react"
import { text } from "../../static/text"

export default function Article({children, tekst}) {
  
  return (
    <article className="text">
      <div className="container">
        <h2>{tekst === 'particulier2' ? '' : tekst}</h2>
        <p>{text[tekst]}</p>
        {children}
      </div>
    </article>
  )
}
