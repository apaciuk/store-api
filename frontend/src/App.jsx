import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [user, setUser] = useState({});
  const clientId = ENV('CLIENT_ID')
  const clientSecret = ENV('CLIENT_SECRET')

  const login = () => {
    const data = {
      "client_id": clientId,
      "client_secret": clientSecret,
      "grant_type": "password",
      "email": "test@test.com",
      "password": "password",

  }


  return (
    <div className="App">
      <div>
      Output
      </div>
    
    </div>
  )
}

export default App
