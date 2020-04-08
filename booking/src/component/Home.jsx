import React, { Component } from 'react';
import '../bookStyle.css'
// import { render } from 'react-dom'
import Person from 'react-ionicons/lib/MdPerson'
import Arrow from 'react-ionicons/lib/IosArrowDropright'
import Cash from 'react-ionicons/lib/MdCash'
import ModalTest from './Modal'


class Home extends React.Component{
    // state = {
    //     name:'',
    //   }
    // // อีเว้นท์เมื่อคลิก เพื่อใช้ในการอัพ firebase
    //   onChange = (e) => {
    //     this.setState( { [e.target.name]: e.target.value } );
    //   }
    
    //   onSubmit = (e) => {
    //     e.preventDefault();
    //     this.props.addData(this.state.name);
    //     this.setState( { name:''});
    //   }
    
    render(){
        
        return(      
            <section className = "section container" >
                <div className = "center">                               {/* first page */} 
                    <div className = "nameHotel">
                        . h o t e l  
                    </div> 
                    <form action="" className="form" > 
                        <label className="label"> Email : </label>   
                        <input type="email" placeholder="Jacob@example.com"/>
                        <label className="label"> password : </label>
                        <input type="password" />
                        <input type="submit" value="LOGIN"/>
                     </form>  
                </div>
                <div className = "center" >
                    <div className = "nameHotel">
                       . h o t e l  
                    </div>
                     
                    <div>
                        <form action="" className="form" > 
                            <label className="label"> Type Room : </label>
                            <select className="typeRoom">
                                <option value="Superior">Superior</option>
                                <option value="Delux">Delux room </option>
                                <option value="Sweet">Sweet room</option>
                                <option value="Suit">Suit room</option>
                                <option value="Family">Family room</option>
                            </select>
                            <label className="label"> Check in : </label>
                            <input type="date"  name="checkin" value="2020-04-04" min="2020-04-05" max="2021-12-31"/>
                            <label className="label"> Check out : </label>
                            <input type="date" name="checkout" value="2020-04-05" min="2020-04-05" max="2021-12-31"/>
                            <label className ="label"> Amount : </label>   
                            <input type="number" name="amount" placeholder="0"/>
                            <input type="submit" value="FIND"/>
                        </form>
                    </div>
                </div>
                <div className = "result-list">
                    <div className = "result">
                        Result list
                    </div>
                    <table className ="list">
                        <tr className = "row">
                            <td className = "typeroom">
                                SWEET ROOM
                            </td>
                            <td className ="number">
                                S201
                            </td>
                            <td className = "iconPerson">
                                <Person fontSize="27px" color="#31312E"/>
                            </td >
                            <td className = "amount">
                                2
                            </td>
                            <td className = "iconCash">
                                <Cash fontSize="30px" color="#31312E"/>
                            </td>
                            <td className = "course">
                             3000
                            </td>
                            <td className = "iconArrow">
                                <Arrow fontSize="30px" color="#31312E"/>
                            </td>
                        </tr>
                    </table>
                </div>

                {/* <form id="add-transaction_form" onSubmit={this.onSubmit}>
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
                </form> */}


                <div className="testRoom">
                    <div className="room"> 
                        <span className="headA">S201</span>
                        <span className="headB">. h o t e l</span>
                    </div> 
                    <div className="roomDetail">
                        <form className="formDetail">
                            <div className="col-25">
                                <label className="forms">Name: </label>
                            </div>
                            <div className="col-75">
                                <input type="text" name="fname" placeholder="Jacob"/>
                            </div>
                            <div className="col-25">
                                <label className="forms">Surname: </label>
                            </div>
                            <div className="col-75">
                                <input type="text" name="lname" placeholder="Wilton"/>
                            </div>
                            <div className="col-25">
                                <label className="forms"> Peraonal ID: </label>
                            </div>
                            <div className="col-75">
                                <input type="text" name="id" placeholder="xxxx-xxx-xxx-xxx"/>
                            </div>
                            <div className="col-25">
                                <label className="forms"> Phone number: </label>
                            </div>
                            <div className="col-75">
                                <input type="tel" name="number" placeholder="08xxxxx78"/>
                            </div>
                            <div className="col-25">
                                <label className="forms"> Check in: </label>
                            </div>
                            <div className="col-25" id="date">
                                <label className="forms" id="date2"> 04/04/2020</label>
                            </div>
                            <div className="col-25">
                                <label className="forms" > Check out: </label>
                            </div>
                            <div className="col-25" id="date">
                                <label className="forms" id="date2"> 04/05/2020</label>
                            </div>
                            <div className="col-25">
                                <label className="forms"> price:</label>
                            </div>
                            <div className="col-25" id="price">
                                <label className="forms" id="date2"> 3000 bath</label>
                            </div>

                            <ModalTest/>
                            {/* <div className="col-100" id="submit">
                                <input type="submit" value="submit" id="submit" />
                            </div> */}
                        </form>
                    </div>
                    
                </div>
                <div>
                    
                </div>
                
                
           
            </section>            
        );
        
    } 

}

export default Home