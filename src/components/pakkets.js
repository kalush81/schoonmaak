import React, { useState } from "react"
import packetsStyle from "./packets.module.scss"

export default function Pakkets({ packets, packetsName, style }) {
  //console.log("packets:", packets)
  //console.log("packet name:", packetsName)

  const [isOpen, setOpen] = useState(false)
  const subItem = packets => {
    return (
      <ul>
        {packets.map(packet => {
          return <li key={packet}>{packet}</li>
        })}
      </ul>
    )
  }

  if (packetsName === "ONZE KERNWAARDES") {
    console.log("packets in kernwaardes: ", packets)
    return (
      <div className="container" style={{ width: !style ? "80%" : "100%" }}>
        <div className={packetsStyle.container}>
          <h3 className={packetsStyle.header} onClick={() => setOpen(!isOpen)}>
            {isOpen ? "-" : "+"}{" "}
            {packetsName !== "ONZE KERNWAARDES"
              ? packetsName + " pakket"
              : packetsName}
          </h3>
          {isOpen ? (
            <ul className={`${packetsStyle.list} ${packetsStyle.listKern}`}>
              {packets.map(packet => {
                return (
                  // <li className={packetsStyle.listItem}>
                  //   {!Array.isArray(packet) ? packet : subItem(packet)}
                  // </li>
                  <li key={packet.id}>
                    <h3 style={{marginBottom: 10}}>{packet.title}</h3>
                    <p>{packet.text}</p>
                  </li>
                )
              })}
            </ul>
          ) : null}
        </div>
      </div>
    )
  }

  return (
    <div className="container" style={{ width: !style ? "80%" : "100%" }}>
      <div className={packetsStyle.container}>
        <h3 className={packetsStyle.header} onClick={() => setOpen(!isOpen)}>
          {isOpen ? "-" : "+"}{" "}
          {packetsName !== "ONZE KERNWAARDES"
            ? packetsName + " pakket"
            : packetsName}
        </h3>
        {isOpen ? (
          <ul className={packetsStyle.list}>
            {packets.map(packet => {
              return (
                <li className={packetsStyle.listItem}>
                  {!Array.isArray(packet) ? packet : subItem(packet)}
                </li>
              )
            })}
          </ul>
        ) : null}
      </div>
    </div>
  )
}
