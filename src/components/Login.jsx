import axios from "axios"
import React from "react"
import { useCookies } from "react-cookie"

function Login() {
  const [cookies, setCookie, removeCookie] = useCookies()

  const fetchLogin = async () => {
    const response = await axios.post("http://localhost:8000/login", { email: "asd@asd@asda", password: "123123123" })
    setCookie("accessToken", response.data["accessToken"], { path: "/" })
  }

  return (
    <div>
      <button onClick={fetchLogin}>로그인</button>
    </div>
  )
}

export default Login
