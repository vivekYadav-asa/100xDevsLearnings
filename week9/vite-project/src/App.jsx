import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (

//       )
// }


function App() {
  const[count,setCount]=useState(1);
  function increaseCount(){
    setCount(count+1);
  }
  // setInterval(increaseCount,1000)
  return ( 
    <div>
      <div style={{display:"flex"}}>
      <div style={{backgroundColor:"red",borderRadius:20,width:
        20,height:25,paddingLeft:10,paddingTop:10}}>
         {count}
      </div>
      </div>
      <img style={{cursor:"pointer"}} src={"https://cdn-icons-png.flaticon.com/512/472/472371.png"} width={60}/>
    </div>
  )
}
export default App
// the component isnt re-rendering
// because we havent used a state variable

// const ToggleMessage = () => {
//   let [notificationCount, setNotificationCount] = useState(0);

//   console.log("re-render");
//   function increment() {
//     setNotificationCount(notificationCount + 1);
//   }

//   return (
//       <div>
//           <button onClick={increment}>
//               Increase count
//           </button>
//           {notificationCount}
//       </div>
//   );
// };


// function PostComponent({ name, subtitle, time, description, image }) {
//   const style = {
//     width: 400,
//     backgroundColor: "white",
//     borderRadius: 10,
//     borderColor: "gray",
//     borderWidth: 1,
//     padding: 20
//   };
//   return (
//     <div style={style}>
//       <div style={{ display: "flex" }}>
//         <img
//           src={image}
//           style={{
//             width: 60,
//             height: 60,
//             borderRadius: 50
//           }}
//         />
//         <div style={{ fontSize: 20, marginLeft: 12 }}>
//           <b>{name}</b>
//           <div>{subtitle}</div>
//           {/* conditional redinering */}
//          {(time) ? <div style={{ display: "flex" }}>
//             <div>{time}</div>
//             <img
//               src={
//                 "https://media.istockphoto.com/id/171450320/photo/isolated-shot-of-2-oclock-clock-face-on-white-background.jpg?s=612x612&w=0&k=20&c=rCqr-IFDMzntr1f-tDtBGLunohNm4MJbpu79Re5QFaE="
//               }
//               style={{ width: 20, height: 20}}
//             />
//           </div>:null}
//         </div>
//       </div>
//       <div style={{ fontSize: 24 }}>{description}</div>
//     </div>
//   );
// }


// hmr hot module replacment
// component- in react component are the building block of user interface ,they split the ui into independent ,reuseable  pieces that can be thought as custom.
  // <div style={{background:'#dfe6e9',height:"100vh"}}>
  //   <div style={{ display:"flex",justifyContent:"center"}}>
  //     <div>
  //   <div>
  //   <PostComponent
  //   name={"harkirat"}
  //   subtitle={"20 followers"}
  //   time={"2m ago"}
  //   image={"https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?cs=srgb&dl=pexels-souvenirpixels-414612.jpg&fm=jpg"}
  //   description={"want to know how to win big?check out how these folks won &600 in bounties"}
  //   />
  //   </div>
  //   <br />
  //     <div>
  //   <PostComponent
  //      name={"harkirat"}
  //   subtitle={"Promoted"}
  //   time={""}
  //   image={"https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?cs=srgb&dl=pexels-souvenirpixels-414612.jpg&fm=jpg"}
  //   description={"want to know how to win big?check out how these folks won &600 in bounties"}
  //   />
  //   </div>
  //   </div>
  //   </div>
    // </div>