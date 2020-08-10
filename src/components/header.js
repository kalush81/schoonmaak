import React from 'react'
import headerStyle from './header.module.scss'

export default function Header({page, title}) {
    return (
        <figure className='full-width-wrap nomargin'>
            <img src={`images/${page}.jpg`} alt={page}/>
            <figcaption className={headerStyle.figcap}>{title}</figcaption>
        </figure>
    )
}
