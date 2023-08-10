import { useEffect, useState } from 'react';
import './App.css';
import User from './User';
import './User_css.css';

function App() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");

  const addUser = async () => {
    const index = users.indexOf(name);
    if (index !== -1) {
      alert("Username is already taken!");
      return;
    }

    let api = `https://codeforces.com/api/user.info?handles=${name}`;
    const res = await fetch(api);

    if (res.ok) {
      const newUserList = [name, ...users];
      setUsers([name, ...users]);
      // console.log(newUserList);
    } else {
      alert('Enter a valid username!');
    }
    setName("");
  }

  const renderData = users.map((user, index) => (
    <User key={index} username={user} />
  ));
  const style = { margin: "0", fontSize: "20px", borderRadius: "2px", cursor: "pointer" };
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
          onChange={(e) => setName(e.target.value.toLowerCase())}
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
