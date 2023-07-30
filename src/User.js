import React, { useEffect, useState } from 'react'
import Card from './Card';
import './User_css.css';
export default function User(props) {
    let [Data, setData] = useState({});
    // let api = "https://codeforces.com/api/contest.list?before"
    let api = `https://codeforces.com/api/user.info?handles=${props.username}`
    const [name, setName] = useState("city--");
    const fetchApi = async (url) => {
        try {
            const res = await fetch(url);
            const d = await res.json();
            const data = d.result[0];
            // console.log(data);
            setData(data);
        }
        catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        fetchApi(api);
    }, []);
    let color = "red";
    if (Data.rating < 1200) color = "black"
    else if (Data.rating < 1400) color = "green"
    else if (Data.rating < 1600) color = "cyan"
    else if (Data.rating < 1800) color = "blue"
    return (
        <div className='content'>
            <div>User Details</div>
            <img src={Data.avatar} style={{ height: "100px" }} alt="profile_pic" />
            <p style={{ color: color, opacity: "0.6", fontSize: "25px" }}>{Data.rank}</p>
            <p>Name: {Data.firstName}  {Data.lastName}</p>
            <p>Username: {Data.handle}</p>
            <p>Rating: {Data.rating} (Max: {Data.maxRating})</p>

        </div>
    )
}
