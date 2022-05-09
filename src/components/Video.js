import React from 'react'

export default function Video(props) {
    return (
        <div>
            <h1>{props.nr}</h1>
            <button onClick={props.setToggleShow}>Toggle</button>
        </div>
    )
}
