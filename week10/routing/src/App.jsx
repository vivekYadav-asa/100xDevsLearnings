// import{BrowserRouter,Routes,Route,Link} from "react-router-dom";
// function App(){
// return <div>

import { useRef, useState } from "react"

// <BrowserRouter>
// <Link to="/"> ALLEN </Link>
// <Link to="/neet/online-coaching-class11"> class11 </Link>
// <Link to="/neet/online-coaching-class12"> class12 </Link>
// <Routes>
//     <Route path="/neet/online-coaching-class11" element={<Class11Prog/>}/>
//     <Route path="/neet/online-coaching-class12" element={<Class12Prog/>}/>
//         <Route path="/" element={<Landing/>}/>
    
// </Routes>
// </BrowserRouter>

// </div>
// function Class11Prog(){
//     return <div>
//         Class 11 coaching for neet
//     </div>
// }
// function Landing(){
//     return <div>
//         Welcome to Allen
//     </div>
// }
// function Class12Prog(){
//     return <div>
//         Class 12 coaching for neet
//     </div>  
// }
// }
// import{useRef} from 'react'
function App(){
    const inputRef=useRef()
    function FocusOn(){
        // document.getElementById("name").focus()
inputRef.current.focus()
    }
    return <div>
        SignUP<br />
    <input ref={inputRef} type={"text"} />
    <input type={"text"} />
    <button onClick={FocusOn}>sumbit</button>
    </div>
}

export default App

