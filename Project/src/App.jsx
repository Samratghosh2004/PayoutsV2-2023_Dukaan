import { useState } from 'react'

import './App.css'
import Sidebar from './components/SideBar/Sidebar'
import BodyPart from './components/BodyPart/BodyPart'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className=' h-screen flex'>
        <Sidebar />
        <BodyPart />

      </div>
    </>
  )
}

export default App
