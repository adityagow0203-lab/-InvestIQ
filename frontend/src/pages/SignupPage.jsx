import { useState } from "react"
import axios from "axios"

function SignupPage({ setShowSignup }) {

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [message, setMessage] = useState("")

  const handleSignup = async () => {

    try {

      const response = await axios.post(
        "http://127.0.0.1:5001/signup",
        {
          username: username,
          password: password
        }
      )

      setMessage(response.data.message)

    } catch (error) {

      setMessage("Signup failed")

    }

  }

  return (

    <div className="min-h-screen bg-black flex items-center justify-center">

      <div className="w-[500px] bg-zinc-900 border border-zinc-800 rounded-2xl p-10">

        <h1 className="text-4xl font-bold text-green-400 mb-2">
          Create Account
        </h1>

        <p className="text-zinc-500 mb-8">
          Join InvestIQ
        </p>

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-4 rounded-xl bg-zinc-950 border border-zinc-700 text-white mb-4 outline-none focus:border-green-400"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-4 rounded-xl bg-zinc-950 border border-zinc-700 text-white mb-6 outline-none focus:border-green-400"
        />

        <button
          onClick={handleSignup}
          className="w-full bg-green-500 hover:bg-green-400 text-black font-bold py-4 rounded-xl"
        >
          SIGN UP
        </button>

        <p className="text-center mt-4 text-green-400">
          {message}
        </p>

        <button
          onClick={() => setShowSignup(false)}
          className="w-full mt-4 text-zinc-400 hover:text-white"
        >
          Back to Login
        </button>

      </div>

    </div>

  )
}

export default SignupPage