import React from 'react';

export default function Tweet(props) {
    return (
        <div>
            <h1>{props.name}</h1>
            <p>{props.tweet}</p>
        </div>
    )
}
