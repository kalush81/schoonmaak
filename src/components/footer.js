import React from "react"
import { Link } from "gatsby"
import footerStyle from "./footer.module.scss"
import navStyle from "./nav.module.scss"
import Icon from "../assets/asset3.svg"
//import { FaBeer } from "react-icons/fa"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faDownload } from "@fortawesome/free-solid-svg-icons"
import fb from "../../static/images/social-icons/fb.png"
import linkedin from "../../static/images/social-icons/linkedin.png"
import whatsapp from "../../static/images/social-icons/whatsapp.png"

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
          <div className={footerStyle.logoAndBtnsSvgBlock}>
            <div className={footerStyle.logo}>
              <Icon />
            </div>
            <div
              className={footerStyle.socialSvgBtns}
              style={{ margin: "0 auto" }}
            >
              <Link to="/">
                <img src={fb} className={footerStyle.socialBtn} />
              </Link>

              <Link to="/">
                <img src={linkedin} className={footerStyle.socialBtn} />
              </Link>
              <Link to="/">
                <img src={whatsapp} className={footerStyle.socialBtn} />
              </Link>

              {/*<In />
              <Wa /> */}
            </div>
          </div>
          <div className={footerStyle.contactBlock}>
            <address style={{ fontStyle: "normal" }}>
              <b>NEDERLAND</b>
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
            <div className={footerStyle.mail}>
              <span style={{ display: "block" }}>CONTACT</span>

              <a
                href="mailto:hallo@schoonmaakloon.nl"
                style={{ display: "block" }}
              >
                hallo@schoonmaakloon.nl
              </a>
            </div>
          </div>
          <div className={footerStyle.pageLinksBlock}>
            <ul>
              {links.map(link => {
                return (
                  <li key={link}>
                    <Link
                      to={`/${
                        link === "home"
                          ? ""
                          : link === "offerte"
                          ? "contact"
                          : link
                      }`}
                    >
                      {link}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
          <div className={footerStyle.socialLinksBlock}>
            <ul>
              <li>
                <Link to="/">linkedin</Link>
              </li>
              <li>
                <Link to="/">facebook</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={footerStyle.disclaimer}>
        <span>
          SCHOONMAAK LOONT © 2020 |
          <a
            href="/Àlgemene_voorwaarden_Schoonmaak_Loont.pdf"
            target="_blank"
            download
          >
            <FontAwesomeIcon
              icon={faDownload}
              style={{ margin: "0 10px" }}
            ></FontAwesomeIcon>
            ALGEMENE VOORWAARDEN
          </a>{" "}
          | <Link to="/privacybeleid">PRIVACY BELEID </Link>|{" "}
          <Link to="/disclaimer">DISCLAIMER</Link>
        </span>
      </div>
    </footer>
  )
}
