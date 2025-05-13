import{BrowserRouter,Routes,Route} from "react-router-dom";
function App(){
return <div>
    Allen | class-11 |class-12
<BrowserRouter>
<Routes>
    <Route path="/neet/online-coaching-class11" element={<Class11Prog/>}/>
    <Route path="/neet/online-coaching-class12" element={<Class12Prog/>}/>
        <Route path="/" element={<Landing/>}/>
    
</Routes>
</BrowserRouter>
</div>
function Class11Prog(){
    return <div>
        Class 11 coaching for neet
    </div>
}
function Landing(){
    return <div>
        Welcome to Allen
    </div>
}
function Class12Prog(){
    return <div>
        Class 12 coaching for neet
    </div>  
}
}

export default App

