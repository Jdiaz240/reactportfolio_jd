import './App.css';
import { Home } from './pages/Home'
// import React, { useState, useRef, useEffect } from 'react'
// import styled from 'styled-components';

function App() {
//   function nav() {
//     const Button = styled.button`
//   /* Same as above */
// `;
//     const ButtonToggle = styled(Button)`
//   opacity: 0.6;
//   ${({ active }) =>
//         active &&
//         `
//     opacity: 1;
//   `}
// `;
//     const ButtonGroup = styled.div`
//   display: flex;
// `;
//     const types = ['About Me', 'Portfolio', 'Contact', 'Resume'];
//     function ToggleGroup() {
//       const [active, setActive] = useState(types[0]);
//       return (
//         <ButtonGroup>
//           {types.map(type => (
//             <ButtonToggle
//               key={type}
//               active={active === type}
//               onClick={() => setActive(type)}
//             >
//               {type}
//             </ButtonToggle>
//           ))}
//         </ButtonGroup>
//       );
//     }
//   }
// }
// }
  // {/* the corresponding nav-tile to the current page is highlighted */}
  // About me page is default on first load



  // function aboutMe() {
  //   // working nav bar wiht corresponding pages 
  //   // the about me section has a profile picture and short bio
  // }

  // function portfolio() {
  //   //wokring portfolio page with 6 projects with live/repo links
  // }

  // function projects() {
  //   //needs an img
  //   //title
  //   //live link
  //   //repo link
  // }

  // function contact() {
  //   //contact form which takes in name, email, and a message
  //   //notification that certain fields on the form are required in the cursor leaves area
  //   //error checking for invalid email
  // }

  // function resume() {
  //   //link to a downloadable resume 
  //   //list of skills
  // }

  // function footer() {
  //   //links to github, linked in, etc. 
  // }


  return (
    <>
      <header>
        <h1>Joshua Diaz</h1>
        <Router>
          <Route
            path='/'
            element={<Home />}
          />
          <Route
            path='/projects'
            element={<Projects />}
          />
          <Route 
            path='/aboutme'
            element={<Aboutme />}
          />
          <Route 
            path='/contact'
            element={<Contact />}
          />
        </Router>
        {/* <button onClick="highlight">{projects}</button>
        <button onClick="highlight">{aboutMe}</button>
        <button onClick="highlight">{contact}</button> */}
      
      </header>
      <footer>This is the Footer</footer>
    </>
  );
}

export default App;
