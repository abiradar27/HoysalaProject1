import React from 'react'
import './styles.scss'

const Button = ({children,...otherPros}) => {
    return (
        <button className="btn"{...otherPros}>
            {children}
        </button>
    )
}

export default Button
