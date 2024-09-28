import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react'

function MyApp(){
  return(
    <div>
      <h1>custom App | Jay Kumar</h1>
    </div>
  )
}

// const ReactElement = {    //syntax is not right because we made it not react
//   type : 'a',
//   props : {    //props is a object
//       href: "https://google.com",
//       target : '_blank'
//   },
//   children : 'Click me to visit google'
// }





const anotherELement = (
  <a href="https://google.com" target='_blank'>Visit Google</a>
)

const anotherUser = "chai aur react"
//we are using evaluated expression so we cannot write if or else because object has it's own syntax
const reactElement = React.createElement(  //using react
  //parameters are:
  'a', //any tag
  {href : 'https://google.com', target : '_blank'}, //object
  'click me to visit google', //direct tag
  //after this tree we can inject variables:
  anotherUser,
  anotherELement
)

createRoot(document.getElementById('root')).render(
  // <ReactElement/>
  // MyApp() //we can also write it as function
  reactElement

  // <App/>

)
