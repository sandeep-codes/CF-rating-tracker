import { useEffect, useState } from 'react';
import './App.css';
import User from './User';
import './User_css.css';

function App() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");

  const addUser = async () => {
    console.log("hello");
    const foundObject = users.find(obj => obj["username"].toLowerCase() === name.toLowerCase());
    if (foundObject) {
      alert("Username is already taken!");
      return;
    }


    let api = `https://codeforces.com/api/user.info?handles=${name}`;
    const res = await fetch(api);
    if (res.ok) {
      const d = await res.json();
      const data = d.result[0];
      const userDetail = {
        username: data.handle,
        firstName: data.firstName,
        lastName: data.lastName,
        rating: data.rating,
        maxRating: data.maxRating,
        avatar: data.avatar,
        rank: data.rank
      }
      setUsers([userDetail, ...users]);
      setName("");
    } else {
      alert('Enter a valid username!');
    }
  }

  const renderData = users.map((Data, index) => (
    <User key={index} Data={Data} />
  ));
  const style = { margin: "0", fontSize: "20px" };
  return (
    <>
      <form onSubmit={(e) => {
        e.preventDefault();
        addUser();
      }}>
        <input
          type="text"
          placeholder='Enter username'
          value={name}
          style={style}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit" style={style}>Add User</button>
      </form>
      <div id="main">
        {renderData}
      </div>
    </>
  );
}

export default App;
