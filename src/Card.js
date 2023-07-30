import React, { useEffect } from 'react'

export default function Card(props) {
    useEffect(() => {
        console.log(props.detail.name);
    }, [])
    return (
        <>
            <div>{props.detail.name}</div>
        </>
    )
}
