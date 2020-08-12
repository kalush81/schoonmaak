import React from 'react'

export default function MenuToggleButton({setVisibility, isOn}) {
    //const [isOn, setVisibility] = useState(false)
    //console.log('isOn', isOn)
    return (
        <button className='mobile-button' onClick={() => setVisibility(!isOn)}>
           show mobile nav bar
        </button>
    )
}
