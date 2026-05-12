import { useState } from "react"
import LoginPage from "./pages/LoginPage"
import SignupPage from "./pages/SignupPage"
import Dashboard from "./pages/Dashboard"

function App() {

  const [showSignup, setShowSignup] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  if (isLoggedIn) {
    return <Dashboard />
  }

  return (
    <>
      {
        showSignup
        ? <SignupPage setShowSignup={setShowSignup} />
        : <LoginPage
            setShowSignup={setShowSignup}
            setIsLoggedIn={setIsLoggedIn}
          />
      }
    </>
  )
}

export default App