import React, { useEffect, useState } from 'react';
import './User_css.css';

export default function User(props) {
    let Data = props.Data;
    console.log(Data);
    let color = "red";
    if (Data.rating < 1200) color = "black";
    else if (Data.rating < 1400) color = "#0fb40c";
    else if (Data.rating < 1600) color = "cyan";
    else if (Data.rating < 1800) color = "blue";
    else if (Data.rating < 2000) color = "#9204d9";

    const handleClick = () => {
        window.open(`https://codeforces.com/profile/${Data.username}`, '_blank');
    };

    return (
        <div className='content' style={{ border: `2px solid ${color}`, cursor: "pointer" }} onClick={handleClick}>
            <div>User Details</div>
            <img src={Data.avatar} style={{ height: "100px" }} alt="profile_pic" />
            <p style={{ color: color, opacity: "0.7", fontSize: "25px" }}>{Data.rank}</p>
            <p style={{ overflow: "hidden" }}>Name: {Data.firstName}  {Data.lastName}</p>
            <p>Username: {Data.handle}</p>
            <p>Rating: {Data.rating} (Max: {Data.maxRating})</p>
        </div>
    );
}
