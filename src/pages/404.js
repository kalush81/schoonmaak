import React from 'react'
import myImg from '../images/slider-pics/Corona_Virus_Schoonmaak.jpg'

export default function _404() {
    return (
        <div>
            <h1>page Not found</h1>
            <p>Keep looking for :-)</p>
            <img src={myImg} alt='coronavirus'/>
        </div>
    )
}
