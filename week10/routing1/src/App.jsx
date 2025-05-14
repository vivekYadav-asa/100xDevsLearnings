// import { useState , createContext ,useContext } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// // import { useContext } from 'react'
// // import { useCallback } from 'react'
// const BlubContext= createContext();
// function BlubProvider({childern}){
//      const [BlubOn,setBlubOn]=useState(true)
//  return <BlubContext.Provider value={{
//       BlubOn:BlubOn,
//       setBlubOn:setBlubOn
//     }}>
//   {childern}
//     </BlubContext.Provider>
// }
// function App() {

//   // state-mangement
//   // const [count, setCount] = useState(0)
//   return <div>
//     <BlubProvider >
//     <LightBlub/>
//     </BlubProvider>
    
//   </div>
// }
// // props--> blubon is a prop to a blubstate component,
// // setBlubon is a prop to a toggleblubstate component
// function LightBlub(){
//   return <div>
// <BlubState />
// <ToggleBlubState />
//   </div>
// }
// function BlubState(){
//   const{BlubOn}=useContext(BlubContext)
//   return <div>
// {BlubOn?"Blub On":"Blub off"}
//   </div>
// }
// function ToggleBlubState(){
//     const{BlubOn ,setBlubOn}=useContext(BlubContext)
//   function toggle(){
// // setBlubOn(currentState=>!currentState)
// setBlubOn(!BlubOn)
//   }
//   return <div>
//     <button onClick={toggle}>Toggle the Blub</button>
//   </div>
// }

// export default App
import React, { createContext, useContext, useState } from 'react';

const CountContext = createContext();

function CountContextProvider({ children }) {
  const [count, setCount] = useState(0);

  return <CountContext.Provider value={{count, setCount}}>
    {children}
  </CountContext.Provider>
}

function Parent() {
  return (
    <CountContextProvider>
      <Incrase />
      <Decrease />
      <Value />
    </CountContextProvider>
  );
}

function Decrease() {
  const {count, setCount} = useContext(CountContext);
  return <button onClick={() => setCount(count - 1)}>Decrease</button>;
}

function Incrase() {
  const {count, setCount} = useContext(CountContext);
  return <button onClick={() => setCount(count + 1)}>Increase</button>;
}

function Value() {
  const {count} = useContext(CountContext);
  return <p>Count: {count}</p>;
}

// App Component
const App = () => {
  return <div>
    <Parent />
  </div>
};

export default App;
