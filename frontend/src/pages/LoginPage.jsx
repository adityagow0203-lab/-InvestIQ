import { useState } from "react"
import axios from "axios"

function LoginPage({ setShowSignup, setIsLoggedIn }) {

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [message, setMessage] = useState("")

  const handleLogin = async () => {

    try {

      const response = await axios.post(
        "http://127.0.0.1:5001/login",
        {
          username: username,
          password: password
        }
      )

      if (response.data.message === "Login Successful") {

        setMessage(response.data.message)

        console.log("LOGIN WORKED")

        setIsLoggedIn(true)

      }
      else {

        setMessage(response.data.message)

      }

    } catch (error) {

      setMessage("Login failed")

    }

  }

  return (
    <div className="min-h-screen bg-black text-green-400 flex items-center justify-center">
      
      <div className="w-[900px] h-[550px] bg-zinc-900 rounded-2xl shadow-2xl flex overflow-hidden border border-zinc-800">

        {/* Left Side */}
        <div className="w-1/2 bg-gradient-to-br from-black to-zinc-900 p-12 flex flex-col justify-center">

          <h1 className="text-5xl font-bold text-green-400 mb-4">
            InvestIQ
          </h1>

          <p className="text-zinc-400 text-lg">
            Smart investing. Simplified.
          </p>

          <div className="mt-10 border border-green-500 p-4 rounded-lg bg-black">
            <p className="text-sm text-green-300">
              LIVE MARKET STATUS
            </p>

            <p className="text-2xl font-bold mt-2">
              S&P 500 ↑ 2.4%
            </p>
          </div>

        </div>

        {/* Right Side */}
        <div className="w-1/2 flex items-center justify-center bg-zinc-950">

          <div className="w-[350px]">

            <h2 className="text-3xl font-semibold text-white mb-8">
              Login
            </h2>

            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full mb-4 p-3 rounded-lg bg-zinc-900 border border-zinc-700 text-white outline-none focus:border-green-400"
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full mb-6 p-3 rounded-lg bg-zinc-900 border border-zinc-700 text-white outline-none focus:border-green-400"
            />

            <button
              onClick={handleLogin}
              className="w-full bg-green-500 hover:bg-green-400 text-black font-bold py-3 rounded-lg transition-all"
            >
              LOGIN
            </button>

            <p className="text-center mt-4 text-green-400">
              {message}
            </p>
            <button
              onClick={() => setShowSignup(true)}
              className="w-full mt-4 text-zinc-400 hover:text-white"
            >
              Create New Account
            </button>

          </div>

        </div>

      </div>

    </div>
  )
}

export default LoginPage