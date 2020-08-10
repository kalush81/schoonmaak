import React, { useState } from "react"
import packetsStyle from "./packets.module.scss"

export default function Pakkets({ packets, packetsName }) {
  const [isOpen, setOpen] = useState(false)
  const subItem = (packets) => {
    return <ul>
      {packets.map(packet => {
        return <li>{packet}</li>
      })}
    </ul>
  }
  return (
    <div className="container">
      <div className={packetsStyle.container}>
        <h3 className={packetsStyle.header} onClick={() => setOpen(!isOpen)}>
          {isOpen ? "-" : "+"} {packetsName + " pakket"}
        </h3>
        {isOpen ? (
          <ul className={packetsStyle.list}>
            {packets.map(packet => {
              return <li className={packetsStyle.listItem}>{!Array.isArray(packet) ? packet : subItem(packet)}</li>
            })}
          </ul>
        ) : null}
      </div>
    </div>
  )
}
