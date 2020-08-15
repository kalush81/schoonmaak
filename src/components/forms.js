import React from "react"
import formsStyle from "./forms.module.scss"

export default function Forms() {
  return (
    <div className="container">
      <div className={formsStyle.container}>
        <div className={formsStyle.formParticulier}></div>
        <div className={formsStyle.formZakelijk}></div>
      </div>
    </div>
  )
}
