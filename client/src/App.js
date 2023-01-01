// import React, { useEffect, useState } from "react"
import { BrowserRouter, Route, Routes,  } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Quiz from "./Pages/Quiz";
import Demo from "./Pages/Demo";
import Errorpage from "./Pages/Errorpage";
import Header from "./common/Header/Header";
import Quizpage from "./quiz/quiz-page";

function App() {
    return (
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/Demo" element={<Demo />} />
            <Route path="/Quiz" element={<Quizpage />} />
            <Route path="*" element={<Errorpage />} />

          </Routes>
        </BrowserRouter>

    );

    
}

// function App(){
//   return (
//     <BrowserRouter>
//       <nav> TODO </nav>

//       <Routes>
//        <Route path= '/test' >
//         <h1> Home</h1>
//         <p> This is the home page.</p>
      
//        </Route>
//       </Routes>
 
 
 
//      </BrowserRouter>
//  );
// }

// function App() {
//   const [backendData, setBackendData] = useState([{}])
  
//   useEffect(()=> {
//     fetch("/api").then(
//       response => response.json()
//     ).then(
//       data => {
//         setBackendData(data)
//       }
//     )
//   }, [])
  
//   return (
//     <div>
//       {(typeof backendData.users === 'undefined') ? (
//         <p>Loading...</p>
//       ): (
//         backendData.users.map((user,i) => (
//           <p key={i} > {user}</p>
//         ))
//       )}
      
      

//     </div>
//   )
// }
export default App;