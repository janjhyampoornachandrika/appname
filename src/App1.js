// import React from 'react'

// export default function App1(props) {
//   App1.defaultProps={name:"chandu",age:22}
//   return (
//     <div>
//     <h1>Hello {props.name}.Are you {props.age}? </h1>
//     </div>
//   )
// }

//index of this

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App1 from "./App1";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render

// (
//   <React.StrictMode>
//     <App1/>
//   </React.StrictMode>  
 
// );


import React from 'react'

export default function App1(props) {
  return (
    <div style={{color:'silver',backgroundColor:'red'}}>
    <h1>Hello {props.name}.Are you {props.age}? </h1>
    </div>
  )
}
App1.defaultProps={name:"chandu",age:22}
