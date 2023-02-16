import { useState } from "react";
import "./App.css";
import { useEffect } from "react";
import axios from "axios";

function App() {
  const [count, setCount] = useState(0);
  const [user, setUser] = useState([]);
  const client_id = import.meta.env.VITE_CLIENT_ID;
  const client_secret = import.meta.env.VITE_CLIENT_SECRET;

  useEffect(() => {
    login();
  }, []);

  const login = () => {
    const data = {
      grant_type: "password",
      email: "test@test.com",
      password: "password",
      client_id: "HVF8NG2o0o3LJAFvbIv3S-1va5LfMptHMAK-sBaUQgM",
      client_secret: "zxU_dRCroTzESE2mTUTuZRecV5ykKmN4L7avtqEowFI",
    };
    axios
      .post("http://localhost:3000/v1/users/oauth/token", data)
      .then((response) => {
        setUser(response.data.user);
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="App">
      <h1>The API</h1>
      <h3>Current User: {user.email}</h3>
    </div>
  );
}

export default App;

