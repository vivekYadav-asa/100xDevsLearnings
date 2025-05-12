import React from 'react';

// const Card = ({ children }) => {
//     return (
//         <div style={{
//             border: '1px solid #ccc',
//             borderRadius: '5px',
//             width:"1600px",
//             padding: '10px',
//             margin: '5px',
//             boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.1)',
//         }}>
//             {children}
//         </div>
//     );
// };

// const App = () => {
//     return (
//         <div>
//             <Card>
//                 <h2>Card Title</h2>
//                 <p>This is some content inside the card.</p>
//             </Card>
//             <Card>
//                 <h2>Another Card</h2>
//                 <textarea type="text" style={{height:"80px",width:'300px'}}></textarea>
//                 <p>This card has different content!</p>
//             </Card>
//         </div>
//     );
// };
const App=()=>{
  // const todos=[{
  //   title:'go to gym',
  //   done:'false'
  // },{
  //   title:'eat the food',
  //   done:'true'
  // }]
  // const todosComponent=todos.map(todo =>
  //   <Todo title={todo.title} done={todo.done}/>
  // )
  // return(
    // <div>
    //   {todosComponent}
    // </div>
  // );
  return(
<div>
  {[//key is given to uniquley identify the element which help the reat in re-rendering process such as when the object id are filped
    <Todo key={1} title={'go to gym'} done={true}/>,
    <Todo key={2} title={'eat food'} done={false}/>
  ]}
</div>
  );
};
function Todo({title,done}){
return <div>
  {title}-{done?"Done!":"not done"}
</div>
}

export default App;

