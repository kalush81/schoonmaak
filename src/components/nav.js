import React from "react"
import { Link } from "gatsby"
import navStyle from "./nav.module.scss"
import Icon from "../assets/asset3.svg"

export default function Nav({ isOn }) {
  return (
    <nav className="full-width-wrap nav">
      <div className="container">
        <div className={`${navStyle.test} ${isOn ? navStyle.open : navStyle.close}`}>
          <div className={`${navStyle.mobileNav} ${navStyle.navContainer}`}>
            {/* <button >close</button> */}
            <div className={navStyle.logo}>
              <Icon />
            </div>
            <div className={navStyle.menu}>
              <ul className={navStyle.navList}>
                <li>
                  <Link to="/" activeClassName={navStyle.active}>
                    home
                  </Link>
                </li>
                <li>
                  <Link to="/particulier" activeClassName={navStyle.active}>
                    particulier
                  </Link>
                </li>
                <li>
                  <Link to="/zakelijk" activeClassName={navStyle.active}>
                    zakelijke
                  </Link>
                </li>
                <li>
                  <Link to="/ramenwassen" activeClassName={navStyle.active}>
                    ramenwassen
                  </Link>
                </li>
                <li>
                  <Link to="/desinfecteren" activeClassName={navStyle.active}>
                    desinfecteren
                  </Link>
                </li>
                <li>
                  <Link to="/offerte" activeClassName={navStyle.active}>
                    offerte
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
