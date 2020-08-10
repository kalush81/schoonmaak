import React from "react"

export default function MyMain(props) {
  return (
    <main className='full-width-wrap'>
      {props.children}
    </main>
  )
}
