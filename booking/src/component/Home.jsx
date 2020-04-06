import React, { Component } from 'react';
import '../bookStyle.css'
// import { render } from 'react-dom'
import Person from 'react-ionicons/lib/MdPerson'
import Arrow from 'react-ionicons/lib/IosArrowDropright'
import Cash from 'react-ionicons/lib/MdCash'


class Home extends React.Component{
    
    state = {
        name:'',
      }
    // อีเว้นท์เมื่อคลิก เพื่อใช้ในการอัพ firebase
      onChange = (e) => {
        this.setState( { [e.target.name]: e.target.value } );
      }
    
      onSubmit = (e) => {
        e.preventDefault();
        this.props.addData(this.state.name);
        this.setState( { name:''});
      }   
    render(){
        return(      
    <div>
        <form id="add-transaction_form" onSubmit={this.onSubmit}>
          <div className="form-group">
            <label htmlFor="name">Transaction Name:</label>
            <input 
              type="text" 
              name="name" 
              className="form-control" 
              placeholder="Expense detail ..."
              onChange={this.onChange}
              value={this.state.name}
            />
          </div>
          

          <input type="submit" value="Add Transaction" className="btn btn-primary btn-block"/>
        </form>
    </div>
            
        );
    } 

}

export default Home