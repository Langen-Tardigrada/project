import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';
import Home from './component/Home'
import firebase from './firebase/firebase'
import { BrowserRouter as Router, Route } from 'react-router-dom';

export default class App extends Component {
  //**********For Add Firebase************/
  state = {
    test: []
  }

  validateForm = (name) => {
    if (!name) {
      window.alert('Please fill in ALL data fields.');
      return false;
    } else if ( !isNaN(name)) {
      window.alert('Please fill only TEXT detail in transaction name.');
      return false;
    }
      return true;
  }

  addData = (name) => {
    
    if(!this.validateForm(name)) {
      return false;
    }

    const newData = {
      name: name,  
    }
    
    firebase.firestore().collection('test').add(newData)
    this.state.test.unshift(newData);
    this.setState( { test: this.state.test } );
  }

  find = () => {
    return true
  } 

  // validate = () => {
  //   if (!name || !amount) {
  //     window.alert('Please fill in ALL data fields.');
  //     return false;
  //   } else if ( !isNaN(name)) {
  //     window.alert('Please fill only TEXT detail in transaction name.');
  //     return false;
  //   } else if (+amount === 0) {
  //     window.alert('Amount CANNOT be zero!');
  //     return false;
  //   }
  //   else if(!Number.isInteger(Number(amount))){
  //     window.alert('Amount CANNOT be float !')
  //     return false
  //   }
  
  //   return true;
  // }

  render() {
    return (
      // <Home/>
      <Router>
      <div className="container mt-4 mb-5">

        <Route exact path="/" render={ props => (
          <div>
          <Home addData={this.addData} />
          
          </div>
        )} />
                 
      </div>
      </Router>
    )
  }




}


