import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyButton from `./components/Header/MyButton`

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <h1>Welcome to my app</h1>
      <MyButton />
    </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
