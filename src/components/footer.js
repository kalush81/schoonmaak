import React from "react"
import { Link } from "gatsby"
import footerStyle from "./footer.module.scss"
import navStyle from "./nav.module.scss"
import Icon from "../assets/asset3.svg"

export default function Footer() {
  const links = [
    "home",
    "particulier",
    "zakelijk",
    "ramenwassen",
    "desinfecteren",
    "contact",
    "over ons",
    "offerte",
  ]
  return (
    <footer className="full-width-wrap">
      <div className="container">
        <div className={footerStyle.container}>
          <div className={navStyle.logo}>
            <Icon />
          </div>
          <div>
            <address style={{ fontStyle: "normal" }}>
              <b>NEDERLANDS</b>
              <br />
              DAMWOUDESTRAAT 5
              <br />
              5043 EH, Tilburg
              <br />
              +31 (0) 6 29 26 27 99
              <br />
              KvK 12345678
              <br />
            </address>
          </div>
          <div>
            <ul>
              {links.map(link => {
                return (
                  <li key={link}>
                    <Link to={`/${link === "home" ? "" : link}`}>{link}</Link>
                  </li>
                )
              })}
            </ul>
          </div>
          <div>
            <ul>
              <li>
                <Link to='/'>linkedin</Link>
              </li>
              <li>
                <Link to='/'>facebook</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={footerStyle.disclaimer}>
        <span>SCHOONMAAK LOONT © 2020 | ALGEMENE VOORWAARDEN | PRIVACY BELEID | DISCLAIMER</span>
      </div>
    </footer>
  )
}
