import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // state-mangement
  // const [count, setCount] = useState(0)
  return <div>
    <LightBlub/>
  </div>
}
function LightBlub(){
  const [BlubOn,setBlubOn]=useState(true)
  return <div>
<BlubState BlubOn={BlubOn}/>
<ToggleBlubState setBlubOn={setBlubOn}/>
  </div>
}
function BlubState({BlubOn}){
  return <div>
{BlubOn?"Blub On":"Blub off"}
  </div>
}
function ToggleBlubState({setBlubOn}){
  function toggle(){
setBlubOn(currentState=>!currentState)
  }
  return <div>
    <button onClick={toggle}>Toggle the Blub</button>
  </div>
}

export default App
