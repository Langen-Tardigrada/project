// import React from 'react';
// import logo from './logo.svg';
// import './App.css';


require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')

//MongoDB Atlas connection string
//mongodb+srv://dragonbebo1:<password>@cluster0-2ondk.gcp.mongodb.net/test?retryWrites=true&w=majority

const app = express()

//middleware section
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

//import transactions router V2
const RouterV2 = require('./route/route')
app.use(RouterV2)

const PORT = process.env.PORT
const HOSTNAME = process.env.HOSTNAME
app.listen(PORT, HOSTNAME, () => {
    console.log('Server is listenning at: '+HOSTNAME+': '+PORT)
})

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

