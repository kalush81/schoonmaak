import React from "react"
import { Link } from "gatsby"
import sectionStyle from "./section.module.scss"

export default function Section() {
  return (
    <section className="container section-container">
      <h2>Wat bieden wij aan?</h2>
      <div className={sectionStyle.section}>
        <Link to="/zakelijk" className={sectionStyle.card}>
          <h4 className={sectionStyle.description}>
            ZAKELIJK, REINIGING VAN KANTOREN EN MAGAZIJNEN
          </h4>
        </Link>

        <Link to="/particulier" className={sectionStyle.card}>
          <h4 className={sectionStyle.description}>
            PARTICULIER, REINIGING VAN HUIZEN
          </h4>
        </Link>

        <Link to="/ramenwassen" className={sectionStyle.card}>
          <h4 className={sectionStyle.description}>
            GLAZENWASSEN, VENSTERS EN WINKELSITES
          </h4>
        </Link>
      </div>
    </section>
  )
}
