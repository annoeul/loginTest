import axios from "axios"
import React, { useState } from "react"
import { useNavigate } from "react-router-dom"

function Register() {
  const [userInput, setUserInput] = useState({ email: "", password: "" })
  const inputChangeHandler = (e) => {
    const { name, value } = e.target
    setUserInput({ ...userInput, [name]: value })
  }

  const doSignup = async () => {
    try {
      const response = await axios.post("http://localhost:8000/register", userInput)
      console.log(response.data)
    } catch (e) {
      console.log("error")
    }
  }

  return (
    <div>
      Register
      <input onChange={inputChangeHandler} name="email"></input>
      <input onChange={inputChangeHandler} name="password" type="password"></input>
      <button onClick={doSignup}>회원가입</button>
    </div>
  )
}

export default Register
