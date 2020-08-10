import React from "react"
import { Link } from "gatsby"
import footerStyle from "./footer.module.scss"
import Logo from "../../static/Asset3.svg"

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
          <div>
            <img src={Logo}/>
          </div>
          <div>Address</div>
          <div>
            <ul>
              {links.map(link => {
                return (
                  <li>
                    <Link to={`/${link === "home" ? "" : link}`}>{link}</Link>
                  </li>
                )
              })}
            </ul>
          </div>
          <div>
            <ul>
              <li>
                <Link>linkedin</Link>
              </li>
              <li>
                <Link>facebook</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
