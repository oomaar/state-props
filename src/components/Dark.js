import React from 'react'

export default function Dark(props) {
    return (
        <div>
            <h1>Dark Mode</h1>
            <button onClick={props.setDarkMode}>Dark</button>
        </div>
    )
}
