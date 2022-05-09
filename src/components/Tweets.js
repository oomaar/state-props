import React from 'react';
import Tweet from "./Tweet";

export default function Tweets(props) {
    const tweets = [
        {
            name: 'omar',
            tweet: 'learrrrnnnnsnnafsdfnasnf'
        },
        {
            name: 'Angela YU',
            tweet: 'A DR. In computer Scince'
        }
    ]
    return (
        <section>
            {tweets.map(tweet => (
                <Tweet name={tweet.name} tweet={tweet.tweet} />
            ))}
        </section>
    )
}
