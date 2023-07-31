import { useEffect, useState } from 'react';
import './App.css';
import User from './User';
import './User_css.css';
function App() {
  // const users = ["Sandeep_coding", "invictus109", "tohr.maaal.ke.ch_do"];
  const [users, setUsers] = useState([]);
  const renderData = users.map((user) => {
    return <User username={user} />
  })

  const [name, setName] = useState("");
  const addUser = async () => {
    const index = users.indexOf(name);
    if (index !== -1) {
      alert("Username is already taken!")
      return
    }

    let api = `https://codeforces.com/api/user.info?handles=${name}`
    const res = await fetch(api);
    if (res.ok) { setUsers([...users, name]); }
    else {
      alert('Enter valid username!')
    }
    // setName("");
    console.log(users);
  }
  const style = { margin: "0", fontSize: "20px", borderRadius: "2px", cursor: "pointer" };
  return (
    <>
      <form onSubmit={(e) => {
        e.preventDefault()
        addUser();
      }
      }>
        <input type="text" placeholder='Enter username' style={style} value={name} onChange={(e) => setName(e.target.value.toLowerCase())}></input>
        <button style={style} type="submit">Add User</button>
      </form>
      <div id="main">
        {renderData}
      </div>
    </>
  );
}

export default App;
